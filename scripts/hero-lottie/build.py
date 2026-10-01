"""Gera as animações do hero da INTUSeg editando os arquivos .lottie originais.

O movimento é o original (camadas, tempos, curvas). Mudam:
  - os textos (o Lottie embute o contorno das letras, então os glifos são regenerados da Archivo)
  - os 4 ícones das notificações e o monograma do cartão de resumo
  - os 4 avatares em PNG (eram fotos de pessoas; viram pictogramas)

Uso: python scripts/hero-lottie/build.py
Saída: public/assets/hero-{2500,1280,820,420}.lottie
"""
import io, json, os, sys, urllib.request, zipfile, tempfile, copy
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.basePen import BasePen
from PIL import Image, ImageDraw

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / 'docs' / 'research' / 'hero-lottie' / 'original'
OUT = ROOT / 'public' / 'assets'
CACHE = Path(tempfile.gettempdir()) / 'intuseg-hero-lottie'
CACHE.mkdir(exist_ok=True)

# ---------------------------------------------------------------- conteúdo (Proposta 2)
TIME_BY_COLOR = {  # cor do horário -> novo horário
    'green': '07:00', 'blue': '07:02', 'coral': '07:05', 'purple': '07:08',
}
TEXT = {
    'Meeting completed': 'Renovações calculadas',
    'Product demo with Acme Corp': '12 apólices em 30 dias',
    'Follow-up drafted': 'Cotação iniciada',
    'Intro email with next steps': 'Dados já no multicálculo',
    'CRM updated': 'Cadastro conferido',
    'Discovery Call → Pro-Sale': '3 duplicidades unificadas',
    'Next step scheduled': 'Resumo enviado ao dono',
    'Follow-up call on May 16': 'Pendências no WhatsApp',
    'Zig did': 'INTUSeg fez',
    '14 tasks': '14 tarefas',
    'You did': 'Sua equipe fez',
    'Closed the deal': 'Decidiu e fechou',
}
MONOGRAM = 'IS'

# ---------------------------------------------------------------- fonte
def font(weight):
    ttf = CACHE / 'Archivo.ttf'
    if not ttf.exists():
        urllib.request.urlretrieve('https://raw.githubusercontent.com/google/fonts/main/ofl/archivo/Archivo%5Bwdth%2Cwght%5D.ttf', ttf)
    inst = CACHE / f'Archivo-{weight}.ttf'
    if not inst.exists():
        instancer.instantiateVariableFont(TTFont(ttf), {'wght': weight, 'wdth': 100}).save(inst)
    return TTFont(inst)

class Pen(BasePen):
    def __init__(self, gs):
        super().__init__(gs)
        self.contours = []
    def _moveTo(self, p): self.contours.append([('m', p)])
    def _lineTo(self, p): self.contours[-1].append(('l', p))
    def _curveToOne(self, a, b, p): self.contours[-1].append(('c', a, b, p))
    def _qCurveToOne(self, a, p):
        p0 = self._getCurrentPoint()
        c1 = (p0[0] + 2 / 3 * (a[0] - p0[0]), p0[1] + 2 / 3 * (a[1] - p0[1]))
        c2 = (p[0] + 2 / 3 * (a[0] - p[0]), p[1] + 2 / 3 * (a[1] - p[1]))
        self.contours[-1].append(('c', c1, c2, p))
    def _closePath(self): pass
    def _endPath(self): pass

def glyph_paths(tt, ch):
    """Contornos do glifo em coordenadas Lottie (100 unidades por em, y para baixo) + avanço."""
    upm = tt['head'].unitsPerEm
    k = 100 / upm
    gs = tt.getGlyphSet()
    name = tt.getBestCmap()[ord(ch)]
    pen = Pen(gs)
    gs[name].draw(pen)
    paths = []
    for cont in pen.contours:
        pts = lambda p: (p[0] * k, -p[1] * k)
        start = pts(cont[0][1])
        v, i, o = [start], [[0, 0]], [[0, 0]]
        cur = start
        for seg in cont[1:]:
            if seg[0] == 'l':
                n = pts(seg[1]); v.append(n); i.append([0, 0]); o.append([0, 0]); cur = n
            else:
                c1, c2, n = pts(seg[1]), pts(seg[2]), pts(seg[3])
                o[-1] = [c1[0] - cur[0], c1[1] - cur[1]]
                v.append(n); i.append([c2[0] - n[0], c2[1] - n[1]]); o.append([0, 0]); cur = n
        # fecha: se o último ponto repete o primeiro, funde as alças
        if abs(v[-1][0] - v[0][0]) < 1e-6 and abs(v[-1][1] - v[0][1]) < 1e-6:
            i[0] = i[-1]; v.pop(); i.pop(); o.pop()
        paths.append({'c': True, 'v': [[round(x, 3), round(y, 3)] for x, y in v],
                      'i': [[round(x, 3), round(y, 3)] for x, y in i], 'o': [[round(x, 3), round(y, 3)] for x, y in o]})
    return paths, gs[name].width * k

def sh_item(path):
    return {'ty': 'sh', 'nm': '', 'd': 1, 'ks': {'a': 0, 'k': path}}

# ---------------------------------------------------------------- ícones (traço 2.2, #2b4d60)
def line(x1, y1, x2, y2):
    return sh_item({'c': False, 'v': [[x1, y1], [x2, y2]], 'i': [[0, 0], [0, 0]], 'o': [[0, 0], [0, 0]]})
def poly(pts, closed=False):
    z = [[0, 0]] * len(pts)
    return sh_item({'c': closed, 'v': [list(p) for p in pts], 'i': [list(x) for x in z], 'o': [list(x) for x in z]})
def rrect(cx, cy, w, h, r):
    return {'ty': 'rc', 'nm': 'Rect', 'd': 1, 's': {'a': 0, 'k': [w, h]}, 'p': {'a': 0, 'k': [cx, cy]}, 'r': {'a': 0, 'k': r}}

def icon(kind, cx, cy):
    if kind == 'calendar':
        return [rrect(cx, cy + 1.2, 18, 16, 2.6), line(cx - 9, cy - 1.8, cx + 9, cy - 1.8),
                line(cx - 4.6, cy - 7.4, cx - 4.6, cy - 4.2), line(cx + 4.6, cy - 7.4, cx + 4.6, cy - 4.2)]
    if kind == 'calculator':
        return [rrect(cx, cy, 15, 19, 2.6), line(cx - 4, cy - 5, cx + 4, cy - 5),
                line(cx - 4, cy + 0.5, cx - 3.9, cy + 0.5), line(cx, cy + 0.5, cx + 0.1, cy + 0.5), line(cx + 4, cy + 0.5, cx + 4.1, cy + 0.5),
                line(cx - 4, cy + 5, cx - 3.9, cy + 5), line(cx, cy + 5, cx + 0.1, cy + 5), line(cx + 4, cy + 5, cx + 4.1, cy + 5)]
    if kind == 'filecheck':
        return [poly([(cx - 6.5, cy - 9.5), (cx + 2, cy - 9.5), (cx + 6.5, cy - 5), (cx + 6.5, cy + 9.5), (cx - 6.5, cy + 9.5)], True),
                poly([(cx - 3.2, cy + 1.2), (cx - 0.8, cy + 3.8), (cx + 3.6, cy - 1.6)])]
    if kind == 'chat':
        return [rrect(cx, cy - 1.2, 19, 14, 3.2), poly([(cx - 5, cy + 5.6), (cx - 5.6, cy + 9.4), (cx - 1.2, cy + 5.6)]),
                line(cx - 4, cy - 3.4, cx + 4, cy - 3.4), line(cx - 4, cy + 0.6, cx + 1.4, cy + 0.6)]
    raise ValueError(kind)

ICON_BY_LAYER = {37: 'calendar', 6: 'calendar', 52: 'calculator', 12: 'calculator', 59: 'filecheck', 17: 'filecheck', 64: 'chat'}

# ---------------------------------------------------------------- utilidades de forma
def all_groups(items):
    for it in items:
        if it['ty'] == 'gr':
            yield it
            yield from all_groups(it['it'])

def bbox_of(items):
    xs, ys = [], []
    for g in all_groups(items):
        for s in g['it']:
            if s['ty'] == 'sh' and isinstance(s['ks']['k'], dict):
                for p in s['ks']['k']['v']:
                    xs.append(p[0]); ys.append(p[1])
    return (min(xs), min(ys), max(xs), max(ys)) if xs else None

def stroke_groups(layer):
    """Grupos internos que têm traço #2b4d60 de 2.2 (os pictogramas)."""
    out = []
    for g in all_groups(layer['shapes']):
        st = [s for s in g['it'] if s['ty'] == 'st']
        if st and abs(st[0]['w']['k'] - 2.2) < 0.01 and any(s['ty'] == 'sh' for s in g['it']):
            out.append(g)
    return out

def replace_icons(layer, kind):
    gs = stroke_groups(layer)
    assert gs, layer['nm']
    xs, ys = [], []
    for g in gs:
        for s in g['it']:
            if s['ty'] == 'sh':
                for p in s['ks']['k']['v']:
                    xs.append(p[0]); ys.append(p[1])
    cx, cy = (min(xs) + max(xs)) / 2, (min(ys) + max(ys)) / 2
    first = True
    for g in gs:
        keep = [s for s in g['it'] if s['ty'] not in ('sh', 'rc')]
        g['it'] = (icon(kind, cx, cy) if first else []) + keep
        first = False

def classify_time_color(fc):
    r, g, b = fc[:3]
    if abs(r - 0.0314) < 0.05 and abs(g - 0.5647) < 0.05: return 'green'
    if abs(r - 0.4) < 0.05 and abs(g - 0.65) < 0.05: return 'blue'
    if abs(r - 0.9) < 0.05 and abs(g - 0.59) < 0.05: return 'coral'
    if abs(r - 0.74) < 0.05 and abs(g - 0.44) < 0.05: return 'purple'
    raise ValueError(fc)

# ---------------------------------------------------------------- imagens (pictogramas no lugar das fotos)
INK = (43, 77, 96, 255)
def pictogram_png(kind, size, tile, ring=True, square=False):
    S = 8
    n = size * S
    im = Image.new('RGBA', (n, n), (0, 0, 0, 0))
    d = ImageDraw.Draw(im)
    if square:
        d.rounded_rectangle([0, 0, n - 1, n - 1], radius=int(n * 0.22), fill=tile)
    else:
        d.ellipse([0, 0, n - 1, n - 1], fill=(255, 255, 255, 255) if ring else tile)
        m = int(n * 0.06)
        d.ellipse([m, m, n - 1 - m, n - 1 - m], fill=tile)
    w = max(2, int(n * 0.05))
    c = n / 2
    u = n / 72
    def ln(x1, y1, x2, y2): d.line([(c + x1 * u, c + y1 * u), (c + x2 * u, c + y2 * u)], fill=INK, width=w, joint='curve')
    def rr(x1, y1, x2, y2, r): d.rounded_rectangle([c + x1 * u, c + y1 * u, c + x2 * u, c + y2 * u], radius=r * u, outline=INK, width=w)
    if kind == 'calendar':
        rr(-14, -12, 14, 14, 4); ln(-14, -4, 14, -4); ln(-7, -17, -7, -10); ln(7, -17, 7, -10)
    elif kind == 'calculator':
        rr(-11, -15, 11, 15, 4); ln(-6, -8, 6, -8)
        for x in (-6, 0, 6):
            for y in (0, 7): d.ellipse([c + (x - 1.3) * u, c + (y - 1.3) * u, c + (x + 1.3) * u, c + (y + 1.3) * u], fill=INK)
    elif kind == 'filecheck':
        pts = [(-10, -15), (3, -15), (10, -8), (10, 15), (-10, 15), (-10, -15)]
        d.line([(c + x * u, c + y * u) for x, y in pts], fill=INK, width=w, joint='curve')
        d.line([(c + x * u, c + y * u) for x, y in [(-5, 2), (-1, 6), (5, -2)]], fill=INK, width=w, joint='curve')
    elif kind == 'person':
        r = 7 * u
        d.ellipse([c - r, c - 15 * u, c + r, c - 1 * u], outline=INK, width=w)
        d.arc([c - 16 * u, c + 4 * u, c + 16 * u, c + 34 * u], 180, 360, fill=INK, width=w)
    return im.resize((size, size), Image.LANCZOS)

# ---------------------------------------------------------------- build
def build(path):
    zin = zipfile.ZipFile(path)
    anim = json.loads(zin.read('animations/animation.json'))
    layers = {l['ind']: l for l in anim['layers']}

    # 1) textos
    used = set()
    for l in anim['layers']:
        if l['ty'] != 5: continue
        s = l['t']['d']['k'][0]['s']
        old = s['t']
        if old in ('9:02 AM', '9:03 AM', '9:04 AM'):
            s['t'] = TIME_BY_COLOR[classify_time_color(s['fc'])]
        else:
            s['t'] = TEXT[old]
        style = 'SemiBold' if 'SemiBold' in s['f'] else 'Medium'
        for ch in s['t']: used.add((style, ch))

    # 2) glifos novos (substituem todos os antigos)
    fonts = {'Medium': font(500), 'SemiBold': font(600)}
    chars = []
    for style, ch in sorted(used):
        if ch == ' ':
            adv = fonts[style]['hmtx']['space'][0] * 100 / fonts[style]['head'].unitsPerEm
            shapes = []
        else:
            paths, adv = glyph_paths(fonts[style], ch)
            shapes = [sh_item(p) for p in paths]
        size = 13.2 if style == 'Medium' else 17.8
        chars.append({'ch': ch, 'fFamily': 'Archivo', 'size': size, 'style': style, 'w': round(adv, 2),
                      'data': {'shapes': [{'ty': 'gr', 'nm': '', 'it': shapes}]}})
    anim['chars'] = chars

    # 3) ícones das notificações
    for ind, kind in ICON_BY_LAYER.items():
        replace_icons(layers[ind], kind)

    # 4) monograma no lugar do "Z" do cartão de resumo
    l33 = layers[33]
    tile = None
    for g in all_groups(l33['shapes']):
        fl = [s for s in g['it'] if s['ty'] == 'fl']
        if fl and abs(fl[0]['c']['k'][0] - 0.0314) < 0.01 and abs(fl[0]['c']['k'][1] - 0.5647) < 0.01:
            tile = g
    tx0, ty0, tx1, ty1 = bbox_of([tile])
    cx, cy = (tx0 + tx1) / 2, (ty0 + ty1) / 2
    white = [g for g in all_groups(l33['shapes']) if any(s['ty'] == 'fl' and s['c']['k'][:3] == [1, 1, 1] for s in g['it'])]
    assert len(white) >= 2, len(white)
    semibold = fonts['SemiBold']
    target_cap = (ty1 - ty0) * 0.36          # altura das letras ~36% do bloco
    k = target_cap / 70.0                     # altura de caixa-alta da Archivo ~70 unidades
    pI, aI = glyph_paths(semibold, MONOGRAM[0])
    pS, aS = glyph_paths(semibold, MONOGRAM[1])
    gap = 3.0
    total = (aI + gap + aS) * k
    x = cx - total / 2
    base = cy + target_cap / 2
    def place(paths, x0):
        out = []
        for p in paths:
            q = copy.deepcopy(p)
            q['v'] = [[round(x0 + a * k, 3), round(base + b * k, 3)] for a, b in p['v']]
            q['i'] = [[round(a * k, 3), round(b * k, 3)] for a, b in p['i']]
            q['o'] = [[round(a * k, 3), round(b * k, 3)] for a, b in p['o']]
            out.append(sh_item(q))
        return out
    for g, (paths, x0) in zip(white[:2], ((pI, x), (pS, x + (aI + gap) * k))):
        rest = [s for s in g['it'] if s['ty'] not in ('sh',)]
        g['it'] = place(paths, x0) + rest

    # 5) imagens
    imgs = {
        '7.png': pictogram_png('calendar', 72, (196, 236, 225, 255)),
        '8.png': pictogram_png('calculator', 72, (176, 212, 232, 255)),
        '9.png': pictogram_png('filecheck', 72, (246, 218, 213, 255)),
        '11.png': pictogram_png('person', 59, (196, 236, 225, 255), square=True),
    }

    buf = io.BytesIO()
    with zipfile.ZipFile(buf, 'w', zipfile.ZIP_DEFLATED) as zout:
        for info in zin.infolist():
            data = zin.read(info.filename)
            name = info.filename
            if name == 'animations/animation.json':
                data = json.dumps(anim, ensure_ascii=False, separators=(',', ':')).encode('utf8')
            elif name.startswith('images/') and Path(name).name in imgs:
                b = io.BytesIO(); imgs[Path(name).name].save(b, 'PNG'); data = b.getvalue()
            zout.writestr(name, data)
    return buf.getvalue(), anim

if __name__ == '__main__':
    OUT.mkdir(parents=True, exist_ok=True)
    for n in (2500, 1280, 820, 420):
        data, anim = build(SRC / f'm{n}.lottie')
        (OUT / f'hero-{n}.lottie').write_bytes(data)
        print(n, len(data), 'bytes,', len(anim['chars']), 'glifos')
