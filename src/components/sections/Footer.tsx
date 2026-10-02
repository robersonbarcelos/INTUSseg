// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<section class="footer-section">
<div class="w-layout-vflex footer-top">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex footer-cta-content">
<div class="w-layout-vflex footer-cta-title">
<h2 class="title--l">Descubra qual processo da sua corretora paga a automação primeiro.</h2>
<div class="text--l">Uma conversa sobre seus sistemas, sua equipe e o processo que mais pesa.</div>
</div>
<div class="w-layout-vflex steps-btns"><a data-modal-open="cta" data-wf--button--variant="primary-m" href="#diagnostico" class="button w-inline-block">
<div>Agendar o diagnóstico operacional</div>
</a>
<div class="w-layout-vflex btn-wrapp"><a data-wf--button--variant="tertiary-m-white" href="#metodo" class="button w-variant-6101740f-88aa-0a0a-23a7-024ce8ee2b35 w-inline-block">
<div>Ver como o método funciona</div>
</a></div>
</div>
</div>
</div>
</div>
</div>
<div class="w-layout-vflex footer-bottom">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="footer_container-grid">
<div id="w-node-dfeb8a6f-3d27-8a65-53e0-41b223156485-23156472" class="w-layout-vflex footer-logo_wrapp"><a href="#topo" aria-current="page" class="footer_logo w-inline-block w--current"><span class="intuseg-logo is--footer">INTUSeg</span></a>
<div class="text--s is--green--200">Inteligência digital para corretoras de seguros</div>
<div class="text--s is--green--200">© 2026 INTUS HUB. Todos os direitos reservados.</div>
</div>
<div class="w-layout-vflex footer_column-links">
<div class="w-layout-vflex footer_links-list"><a href="#metodo" class="text--link is--white">Método</a><a href="#processos" class="text--link is--white">Processos</a><a href="#casos" class="text--link is--white">Casos</a></div>
<div id="w-node-fde80ad8-1ba3-7421-30ed-1ff46aec729a-23156472" class="w-layout-vflex footer_links-list"><a href="#medicao" class="text--link is--white">Medição</a><a href="#faq" class="text--link is--white">Perguntas</a></div>
<div id="w-node-dfeb8a6f-3d27-8a65-53e0-41b223156495-23156472" class="w-layout-vflex footer_links-wrapp"></div>
</div>
<div id="w-node-dfeb8a6f-3d27-8a65-53e0-41b22315649d-23156472" class="w-layout-vflex footer_sn-wrapp"></div>
</div>
</div>
</div>
</div>
</section>`;

export function Footer() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
