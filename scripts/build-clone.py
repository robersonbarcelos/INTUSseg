"""Builds the Next.js clone of zig.ai from docs/research/zig.html + zig.css.

- downloads every asset (images, fonts, lottie, runtime scripts) into public/zig/
- rewrites URLs to local paths
- splits the page into section components (src/components/sections/*.tsx)
- writes src/app/zig.css and public/zig/zig-init.js (ported inline scripts)
"""
import re, os, json, urllib.parse, urllib.request, hashlib, concurrent.futures as cf, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
R = os.path.join(ROOT, 'docs', 'research')
PUB = os.path.join(ROOT, 'public', 'zig')
os.makedirs(PUB, exist_ok=True)
html = open(os.path.join(R, 'zig.html'), encoding='utf8').read()
css = open(os.path.join(R, 'zig.css'), encoding='utf8').read()

URL_RE = re.compile(r'https://(?:cdn\.prod\.website-files\.com|cdn\.prod\.website-files\.com|d3e54v103j8qbb\.cloudfront\.net|assets-global\.website-files\.com)/[^"\'\s)\\,]+')
mapping = {}

def local_name(url):
    p = urllib.parse.urlparse(url)
    name = urllib.parse.unquote(os.path.basename(p.path))
    name = re.sub(r'[^A-Za-z0-9._-]', '_', name)
    return name

def fetch(url):
    name = local_name(url)
    dest = os.path.join(PUB, name)
    if not os.path.exists(dest):
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        try:
            data = urllib.request.urlopen(req, timeout=60).read()
            open(dest, 'wb').write(data)
        except Exception as e:
            print('FAIL', url, e)
            return None
    return name

def collect(text):
    urls = set()
    for m in URL_RE.finditer(text):
        u = m.group(0).rstrip('.;')
        urls.add(u)
    return urls

# ---- head / body split
b = html.index('<body')
head, body = html[:b], html[b:]
# srcset values may contain spaces/commas: handle by collecting raw URLs anyway
tail_scripts = body.index('<script src="https://d3e54v103j8qbb') if '<script src="https://d3e54v103j8qbb' in body else len(body)
body_html = body[:tail_scripts]

head_styles = re.findall(r'<style[^>]*>(.*?)</style>', head, re.S)
urls = collect(body_html) | collect(css) | collect(head)
# lottie names contain %20 and (1) -> decoded in local_name
urls = {u for u in urls if not u.endswith('.js')}
with cf.ThreadPoolExecutor(8) as ex:
    for u, n in zip(urls, ex.map(fetch, urls)):
        if n:
            mapping[u] = '/zig/' + n
print('downloaded', len(mapping), 'assets')

# runtime scripts (webflow chunks + jquery) -> self host
runtime = []
for m in re.finditer(r'<script src="(https://(?:d3e54v103j8qbb\.cloudfront\.net|cdn\.prod\.website-files\.com)/[^"]+\.js[^"]*)"', body):
    u = m.group(1)
    n = local_name(u.split('?')[0])
    dest = os.path.join(PUB, n)
    if not os.path.exists(dest):
        open(dest, 'wb').write(urllib.request.urlopen(urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'}), timeout=60).read())
    runtime.append('/zig/' + n)
print('runtime', runtime)

def rewrite(text):
    for u in sorted(mapping, key=len, reverse=True):
        text = text.replace(u, mapping[u])
    return text

# webflow chunks fetch more stuff relative to their own CDN path at runtime (public path); patch if needed later.

NL = chr(10)
css_out = rewrite(css) + NL + '/* ---- <head> style block */' + NL + rewrite(NL.join(head_styles))
# fonts live at /zig/, css file lives in src/app -> absolute urls are fine
open(os.path.join(ROOT, 'src', 'app', 'zig.css'), 'w', encoding='utf8').write(css_out)

# ---- body fragments
body_html = rewrite(body_html)
inner_start = body_html.index('>') + 1          # after <body ...>
inner = body_html[inner_start:]
# drop the inline <script> blocks embedded inside the document (re-implemented in zig-init.js)
inner_noscript = re.sub(r'<script\b(?![^>]*type="application/ld\+json")[^>]*>.*?</script>', '', inner, flags=re.S)

pw_open = '<div class="page_wrapp">'
assert inner_noscript.startswith(pw_open)
rest = inner_noscript[len(pw_open):]
main_i = rest.index('<main')
main_tag_end = rest.index('>', main_i) + 1
pre_main = rest[:main_i]                         # embed style + nav etc.
main_open = rest[main_i:main_tag_end]
main_close = rest.index('</main>')
main_inner = rest[main_tag_end:main_close]
post_main = rest[main_close + len('</main>'):]
print('main open tag:', main_open)

# split main into balanced top-level children (sections AND the wrapper divs between them)
from html.parser import HTMLParser
VOID = {'area','base','br','col','embed','hr','img','input','link','meta','source','track','wbr'}
class Splitter(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=False)
        self.depth = 0; self.starts = []; self.ends = []; self.src = ''
    def _off(self):
        l, c = self.getpos()
        lines = self.src.split(chr(10))
        return sum(len(x) + 1 for x in lines[:l-1]) + c
    def handle_starttag(self, tag, attrs):
        if self.depth == 0: self.starts.append(self._off())
        if tag not in VOID: self.depth += 1
        elif self.depth == 0: self.ends.append(self._off() + len(self.get_starttag_text()))
    def handle_startendtag(self, tag, attrs):
        if self.depth == 0:
            self.starts.append(self._off()); self.ends.append(self._off() + len(self.get_starttag_text()))
    def handle_endtag(self, tag):
        self.depth -= 1
        if self.depth == 0: self.ends.append(self._off() + len(f'</{tag}>'))
sp = Splitter(); sp.src = main_inner; sp.feed(main_inner)
assert len(sp.starts) == len(sp.ends), (len(sp.starts), len(sp.ends))
frags = [main_inner[a:b] for a, b in zip(sp.starts, sp.ends)]
leftover = ''
print('top-level children of main:', len(frags), [len(f) for f in frags])
names = []
for f in frags:
    m = re.match(r'<(\w+)[^>]*class="([^"]*)"', f)
    names.append(m.group(1) + '.' + m.group(2))
print(names)

sec_dir = os.path.join(ROOT, 'src', 'components', 'sections')
os.makedirs(sec_dir, exist_ok=True)
# friendly names by order (verified against screenshots)
friendly = None
friendly = ['Hero','Logos','Pillars','Spacer','Features','ImpactTrack','WinsTrack','StepsTrack','Testimonials','Cta','Footer']
assert len(friendly)==len(frags)

def comp(name, fragment, tag='section'):
    code = (
        '// Auto-extracted from https://zig.ai/ (see scripts/build-clone.py)\n'
        f'const html = {json.dumps(fragment, ensure_ascii=False)};\n\n'
        f'export function {name}() {{\n'
        '  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;\n'
        '}\n'
    )
    open(os.path.join(sec_dir, name + '.tsx'), 'w', encoding='utf8').write(code)

comp('Header', pre_main)
for n, f in zip(friendly, frags):
    comp(n, f)
if leftover.strip():
    comp('MainExtras', leftover)
comp('Overlays', post_main)
open(os.path.join(sec_dir, 'index.ts'), 'w').write(
    '\n'.join(f"export {{ {n} }} from './{n}';" for n in ['Header'] + friendly + (['MainExtras'] if leftover.strip() else []) + ['Overlays']) + '\n')

meta = {'runtime': runtime, 'friendly': friendly, 'mainOpen': main_open, 'hasExtras': bool(leftover.strip()), 'classes': names}
json.dump(meta, open(os.path.join(R, 'build-meta.json'), 'w'), indent=2)

# ---- ported inline scripts
order = [9, 11, 12, 13, 14, 15, 16, 17, 18, 19]
parts = []
for i in order:
    t = open(os.path.join(R, f'inline{i}.js'), encoding='utf8').read()
    t = t.replace('document.addEventListener("DOMContentLoaded", () => {', '(() => {').replace("document.addEventListener('DOMContentLoaded', () => {", '(() => {')
    if 'DOMContentLoaded' in open(os.path.join(R, f'inline{i}.js'), encoding='utf8').read():
        t = re.sub(r'\}\);\s*$', '})();', t)
    parts.append(f'/* inline{i} */\ntry {{\n{t}\n}} catch (e) {{ console.warn("zig-init inline{i}", e); }}\n')
init = 'window.__zigInit = function () {\n' + '\n'.join(parts) + '\ntry { window.__lenis = new Lenis(); function raf(t){ window.__lenis.raf(t); requestAnimationFrame(raf);} requestAnimationFrame(raf); } catch(e) { console.warn("lenis", e); }\n};\n'
open(os.path.join(PUB, 'zig-init.js'), 'w', encoding='utf8').write(init)
print('done')
