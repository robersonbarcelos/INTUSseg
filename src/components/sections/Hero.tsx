// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg
const html = String.raw`<section class="section hero_section">
<div class="padding_global is--static">
<div class="w-layout-vflex container">
<div class="hero_container-new">
<div class="w-layout-vflex hero_component-new">
<div class="hero_content-new">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/zig/6a2ade093d4ed3f8ed40f59a_b02bd53e80ae3ff609dc26af780b742d_Icon.svg" alt="" class="icon_chips"/>
<div>AI Assistants for Sales Reps</div>
</div>
<h1 class="title--xl">Close deals.<br/><span class="text--grad">Zig handles the rest.</span></h1>
<div class="w-layout-vflex hero__description-new">
<p class="text--l">Your own team of AI assistants — take out one per workflow. They research, outreach, prep, follow up, and log. You approve and close.<br/></p></div>
</div>
<div class="w-layout-vflex hero_buttons-wrapp"><a data-modal-open="" data-wf--button--variant="primary-m" href="/book-a-meeting" class="button w-inline-block">
<div>Start Now</div>
</a><a data-modal-open="" data-wf--button--variant="tertiary-m" href="/book-a-meeting" class="button w-variant-8ab93cf4-d629-81e6-e7fb-0245c8a1d5ff w-inline-block">
<div>Book a demo for a Team</div>
</a></div>
</div>
<div class="hero-animation_wrapp">
<div class="hero_lottie _1280" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f890" data-animation-type="lottie" data-src="/zig/6a33e33f6042414d2340012a_93df246aa189ea66a4abed5d901e8533_Homepage_Hero___Motion_2500.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero_lottie desktop" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f891" data-animation-type="lottie" data-src="/zig/6a4271bb54dbd7a2df1642e3_aeed43bf3b730e548c909a40b9344278_Homepage_Hero___Motion_1280.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero_lottie tablet" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f892" data-animation-type="lottie" data-src="/zig/6a426cad8ba4eb299e327813_8ffbf03408276c0100d2c18bc7ce9912_Homepage_Hero___Motion_820__1_.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
<div class="hero_lottie mobile" data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f893" data-animation-type="lottie" data-src="/zig/6a426cadc63f603a8b1699a7_e85e91fad1396a64c046d353727b94ea_Homepage_Hero___Motion_420.lottie" data-loop="1" data-direction="1" data-autoplay="1" data-is-ix2-target="0" data-renderer="canvas" data-default-duration="0" data-duration="8" data-loading="lazy"></div>
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
