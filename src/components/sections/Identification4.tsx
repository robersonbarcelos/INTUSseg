// Variação 4: bloco de identificação e proposta de valor
const html = String.raw`<section class="section main-large intuseg-ident">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex benefits_header-new animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2ae04928fffdcec95313ae_d8d09b442fc8bac3c3dfa5c87774475d_Expand_Icon.svg" alt="" class="icon_chips"/>
<div>O gargalo</div>
</div>
<p class="title--m intuseg-ident_lead">Quando a operação só funciona porque duas pessoas sabem onde está cada informação, entre a planilha, o WhatsApp e três sistemas, o gargalo está na falta de integração, e não no esforço da equipe.</p>
<p class="text--l intuseg-ident_value">A INTUSeg transforma processos repetitivos em fluxos automatizados, leva a informação certa ao dono pelo WhatsApp ou Telegram e cria agentes que consultam dados e executam tarefas dentro dos seus sistemas, com cada ação registrada.</p></div>
</div>
</div>
</section>`;

export function Identification4() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
