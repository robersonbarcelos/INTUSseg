import re, json, glob, os
BLOCK = r'(?=<(?:div|section|h[1-6]|p|ul|li|nav|main|footer|header)\b)'
for f in glob.glob('src/components/sections/*.tsx'):
    t = open(f, encoding='utf8').read()
    m = re.search(r'const html = (".*");\n', t)
    if not m: continue
    h = json.loads(m.group(1))
    h = re.sub(r'(?<=>)' + BLOCK, '\n', h)
    h = re.sub(r'(?<=</div>)(?=<)', '\n', h)
    assert chr(96) not in h and chr(36)+'{' not in h, f
    name = os.path.basename(f)[:-4]
    out = ('// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg\n'
           f'const html = String.raw`{h}`;\n\n'
           f'export function {name}() {{\n'
           '  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;\n'
           '}\n')
    open(f, 'w', encoding='utf8').write(out)
    print(name, len(h))
