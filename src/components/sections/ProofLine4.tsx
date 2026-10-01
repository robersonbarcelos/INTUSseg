// Variação 4: linha de prova com fonte
const html = String.raw`<section class="section intuseg-proofline">
<div class="padding_global">
<div class="w-layout-vflex container">
<p class="text--l intuseg-proofline_text">De 20% a 35% da rotina de um corretor vai para tarefas administrativas, segundo levantamento da Segura divulgado pela Revista Apólice em 20/07/2026.</p>
</div>
</div>
</section>`;

export function ProofLine4() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
