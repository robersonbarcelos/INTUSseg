// Variação 4 (Integração): hero com a copy lapidada
const html = String.raw`<section id="topo" class="section hero_section">
<div class="padding_global is--static">
<div class="w-layout-vflex container">
<div class="hero_container-new">
<div class="w-layout-vflex hero_component-new">
<div class="hero_content-new">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2ade093d4ed3f8ed40f59a_b02bd53e80ae3ff609dc26af780b742d_Icon.svg" alt="" class="icon_chips"/>
<div>Automação com IA para corretoras de seguros</div>
</div>
<h1 class="title--xl intuseg-h1">Sua corretora não precisa de mais um sistema.<br/><span class="text--grad">Precisa que os sistemas que já tem trabalhem juntos.</span></h1>
<div class="w-layout-vflex hero__description-new">
<p class="text--l">Mapeamos os gargalos da sua operação, conectamos os sistemas que você já usa e automatizamos com IA o trabalho manual que mais pesa. O ganho é medido em horas e em erros evitados.</p></div>
</div>
<div class="w-layout-vflex hero_buttons-wrapp"><a data-modal-open="cta" data-wf--button--variant="primary-m" href="#diagnostico" class="button w-inline-block">
<div>Quero identificar os gargalos da minha corretora</div>
</a><a data-wf--button--variant="tertiary-m" href="#metodo" class="button w-variant-8ab93cf4-d629-81e6-e7fb-0245c8a1d5ff w-inline-block">
<div>Ver o método em 5 etapas</div>
</a></div>
</div>
<div class="hero-animation_wrapp">
<div class="hero-chat" aria-hidden="true">
<div class="hero-chat_card">
<div class="hero-chat_head"><div class="hero-chat_avatar">IS</div><div><div class="hero-chat_name">Renovações da equipe</div><div class="hero-chat_status">Agente INTUSeg · exemplo ilustrativo</div></div></div>
<div class="hero-chat_body">
<div class="hero-chat_msg is--agent" data-step><p>Bom dia. Varri a carteira: <b>12 apólices</b> vencem nos próximos 30 dias.</p><span>06:58</span></div>
<div class="hero-chat_msg is--agent" data-step><p>Multicálculo rodado em todas. Resultados na ordem de vencimento:</p><span>07:01</span></div>
<div class="hero-chat_list" data-step>
<div class="hero-chat_row"><b>Auto · vence em 6 dias</b><span class="hero-chat_pill">cálculo pronto</span></div>
<div class="hero-chat_row"><b>Residencial · vence em 11 dias</b><span class="hero-chat_pill">cálculo pronto</span></div>
<div class="hero-chat_row"><b>Vida · vence em 19 dias</b><span class="hero-chat_pill">cálculo pronto</span></div>
</div>
<div class="hero-chat_msg is--human" data-step><p>Vou ligar para os três primeiros.</p><span>08:12</span></div>
<div class="hero-chat_msg is--agent" data-step><p>Anotado. Ligações e decisões ficam registradas em cada renovação.</p><span>08:12</span></div>
</div>
</div>
</div>
<div class="hero-animation_grad"></div>
<div class="hero-animation_grad is--right"></div>
</div>
</div>
</div>
</div>
</section>`;

export function Hero4() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
