// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg
const html = String.raw`<section class="section main-large">
<div class="padding_global">
<div class="w-layout-vflex container">
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8e1-62a4fde0" class="w-layout-vflex animated_title">
<h2 id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8e2-62a4fde0" class="title--l animate-text_opacity">Zig doesn&#x27;t speed up admin.<br/><span class="is--light-green">It gives the rep a team that runs it.</span></h2></div>
</div>
</div>
</section>`;

export function Pillars() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
