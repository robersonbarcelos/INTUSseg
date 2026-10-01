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
<div class="win-circle illustration"><div class="intuseg-mark"><svg class="intuseg-hexmark" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="INTUSeg"><defs><linearGradient id="hexg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#60c7ac"/><stop offset="1" stop-color="#08906c"/></linearGradient><radialGradient id="hubg"><stop offset="0" stop-color="#93dcc8"/><stop offset="1" stop-color="#08906c"/></radialGradient></defs><polygon points="60,12 101.6,36 101.6,84 60,108 18.4,84 18.4,36" fill="#08906c" fill-opacity="0.08" stroke="url(#hexg)" stroke-width="3.2" stroke-linejoin="round"/><g stroke="#93dcc8" stroke-opacity="0.35" stroke-width="1.4" stroke-linecap="round"><line x1="60" y1="60" x2="60" y2="12"/><line x1="60" y1="60" x2="101.6" y2="36"/><line x1="60" y1="60" x2="101.6" y2="84"/><line x1="60" y1="60" x2="60" y2="108"/><line x1="60" y1="60" x2="18.4" y2="84"/><line x1="60" y1="60" x2="18.4" y2="36"/></g><g fill="url(#hexg)"><circle cx="60" cy="12" r="5.5"/><circle cx="101.6" cy="36" r="4"/><circle cx="101.6" cy="84" r="5.5"/><circle cx="60" cy="108" r="5.5"/><circle cx="18.4" cy="84" r="5.5"/><circle cx="18.4" cy="36" r="4"/></g><circle cx="60" cy="60" r="19" fill="#37a88a" fill-opacity="0.18"/><circle cx="60" cy="60" r="11" fill="url(#hubg)"/><circle cx="60" cy="60" r="4" fill="#ffffff" fill-opacity="0.95"/></svg></div></div>
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
