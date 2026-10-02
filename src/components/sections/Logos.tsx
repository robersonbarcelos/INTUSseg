// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<section class="section main-large is--bg-white">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex benefits_header-new animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2ae04928fffdcec95313ae_d8d09b442fc8bac3c3dfa5c87774475d_Expand_Icon.svg" alt="" class="icon_chips"/>
<div>Onde o dia trava</div>
</div>
<h2 class="title--l">Você não montou uma corretora para <span class="text--grad">copiar dados</span> de uma tela para outra</h2></div>
<div class="spacer spacer-60"></div>
<div class="benefits_grid">
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8a2-62a4fde0" class="w-layout-vflex benefits">
<div class="w-layout-vflex benefits_chips is--red">
<p class="text--chips">Sem INTUSeg</p></div>
<div class="hiw-benefits_list">
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker"><img src="/assets/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">Alguém da equipe abre o multicálculo, o sistema de gestão e a planilha só para saber o que vence nos próximos 30 dias.</div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker"><img src="/assets/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">O vencimento depende da memória de quem cuida da carteira.<br/></div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker"><img src="/assets/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">O cálculo é refeito apólice por apólice, em um portal de seguradora depois do outro.<br/></div>
</div>
<div class="w-layout-vflex benefits_item is--last">
<div class="benefit_marker"><img src="/assets/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">O dono abre vários sistemas para descobrir como está o dia.<br/></div>
</div>
</div>
</div>
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8c1-62a4fde0" class="w-layout-vflex benefits">
<div class="w-layout-vflex benefits_chips is--green">
<p class="text--chips">Com a INTUSeg</p></div>
<div class="hiw-benefits_list">
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker is--green"><img src="/assets/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="w-layout-vflex benefit_text">
<div class="title--xs is--green">A lista de vencimentos chega pronta no grupo da equipe.</div>
</div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker is--green"><img src="/assets/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="w-layout-vflex benefit_text">
<div class="title--xs is--green">O multicálculo roda sozinho antes mesmo de você acordar.</div>
</div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker is--green"><img src="/assets/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="w-layout-vflex benefit_text">
<div class="title--xs is--green">O corretor revisa, liga e decide.</div>
</div>
</div>
<div class="w-layout-vflex benefits_item is--last">
<div class="benefit_marker is--green"><img src="/assets/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs is--green">Cada ação fica registrada, e o ganho é medido em horas e em erros evitados.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>`;

export function Logos() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
