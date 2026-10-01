// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<div data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f962" class="w-layout-vflex wins-animation-track">
<section class="section main-large">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex steps-section-title">
<div class="w-layout-vflex section_heading animate-block_appear">
<div data-wf--section-chips--variant="dark" class="section_chips w-variant-28ba76d0-08d9-d4d7-40be-ef11d536cd9f"><img loading="lazy" src="/assets/6a2bb5f230f5600b18d92d3c_f5806a04f77d5f96be5623316e89377c_Tagline_Icon.svg" alt="" class="icon_chips"/>
<div>Dois lados da mesma rotina</div>
</div>
<div class="w-layout-vflex win_title">
<h2 class="title--l">O corretor vende.<br/>O dono enxerga a operação.</h2>
<div class="w-layout-vflex win_sub">
<p class="text--l">O agente assume o repetitivo. O relacionamento, a negociação e a venda continuam com o corretor.</p></div>
</div>
</div>
<div class="w-layout-vflex steps-btns"><a data-modal-open="cta" data-wf--button--variant="primary-m" href="#diagnostico" class="button w-inline-block">
<div>Agendar o diagnóstico</div>
</a><a data-wf--button--variant="tertiary-m-white" href="#medicao" class="button w-variant-6101740f-88aa-0a0a-23a7-024ce8ee2b35 w-inline-block">
<div>Ver como medimos</div>
</a></div>
</div>
</div>
</div>
</section>
<section class="section wins-section">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="win-circles-wrapp">
<div class="win-circle illustration"><div class="intuseg-mark">IS</div></div>
<div class="win-circle is--left">
<div class="w-layout-vflex win-circle-content is--left">
<div class="w-layout-vflex win-circle-text">
<div class="title--m">Para a equipe que executa</div>
</div>
</div>
<div class="win-tooltips is--left">
<div class="w-layout-vflex win-tooltip is--01">
<p class="text--l">Renovações calculadas no grupo antes do expediente.</p></div>
<div class="w-layout-vflex win-tooltip is--02">
<p class="text--l">Cotação iniciada pelo WhatsApp, com os dados já preenchidos.</p></div>
<div class="w-layout-vflex win-tooltip is--03">
<p class="text--l">Regras das seguradoras na memória do agente: pergunta e recebe.<br/></p></div>
</div>
</div>
<div class="win-circle is--right">
<div class="w-layout-vflex win-circle-content is--right">
<div class="w-layout-vflex win-circle-text">
<div class="title--m">Para o dono que responde pelo resultado</div>
</div>
</div>
<div class="win-tooltips is--right">
<div class="w-layout-vflex win-tooltip is--01-right">
<p class="text--l">Pergunta pelo número que precisa e recebe a resposta no WhatsApp.</p></div>
<div class="w-layout-vflex win-tooltip is--02">
<p class="text--l">Recebe o aviso do que exige decisão e vê as pendências da equipe.</p></div>
<div class="w-layout-vflex win-tooltip is--03-right">
<p class="text--l">Define o que o agente faz sozinho e o que precisa de aprovação.</p></div>
</div>
</div>
<div class="code-embed w-embed"><svg class="win-svg-overlay" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none;overflow:visible;opacity:0"></svg></div>
</div>
</div>
</div>
</section></div>`;

export function WinsTrack() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
