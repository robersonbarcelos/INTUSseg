// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<section id="topo" class="section hero_section">
<div class="padding_global is--static">
<div class="w-layout-vflex container">
<div class="hero_container-new">
<div class="w-layout-vflex hero_component-new">
<div class="hero_content-new">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2ade093d4ed3f8ed40f59a_b02bd53e80ae3ff609dc26af780b742d_Icon.svg" alt="" class="icon_chips"/>
<div>Automação e Agentes de IA para corretoras de seguros</div>
</div>
<h1 class="title--xl intuseg-h1">Mostre o processo mais manual da sua corretora.<br/><span class="text--grad">A automação é desenhada em cima dele.</span></h1>
<div class="w-layout-vflex hero__description-new">
<p class="text--l">Mapeamos como a sua corretora opera hoje, achamos onde o tempo e a precisão se perdem e construímos a automação sobre os sistemas que você já usa. O ganho é medido em horas e em erros evitados.</p></div>
</div>
<div class="w-layout-vflex hero_buttons-wrapp"><a data-modal-open="cta" data-wf--button--variant="primary-m" href="#diagnostico" class="button w-inline-block">
<div>Quero mapear o processo mais manual da minha corretora</div>
</a><a data-wf--button--variant="tertiary-m" href="#metodo" class="button w-variant-8ab93cf4-d629-81e6-e7fb-0245c8a1d5ff w-inline-block">
<div>Ver como o método funciona</div>
</a></div>
<p class="text--s intuseg-hero_proof">De 20% a 35% da rotina de um corretor vai para tarefas administrativas.<span class="intuseg-hero_proof-src">*segundo levantamento divulgado pela Revista Apólice em 20/07/2026.</span></p>
</div>
<div class="hero-animation_wrapp">
<div class="hero_lottie _1280" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f890" data-animation-type="lottie" data-src="/assets/hero-2500.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero_lottie desktop" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f891" data-animation-type="lottie" data-src="/assets/hero-1280.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero_lottie tablet" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f892" data-animation-type="lottie" data-src="/assets/hero-820.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero_lottie mobile" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f893" data-animation-type="lottie" data-src="/assets/hero-420.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero-lottie_note">Exemplo ilustrativo</div>
<div class="hero-animation_grad"></div>
<div class="hero-animation_grad is--right"></div>
</div>
</div>
</div>
</div>
</section>`;

export function Hero() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
