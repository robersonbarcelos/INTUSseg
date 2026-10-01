// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<div class="w-layout-vflex custom_js">
<div class="modal-logic_js w-embed w-script"></div>
<div class="gsap w-embed w-script">

</div>
<div class="lenis-scroll-js w-embed w-script">

</div>
<div class="hero-lottie-js w-embed w-script"></div>
<div class="text-animation-js w-embed w-script"></div>
<div class="impact-circles-js w-embed w-script"></div>
<div class="win-circles-js w-embed w-script"></div>
<div class="body-bg-js w-embed w-script"></div>
<div class="sales-section-js w-embed w-script"></div>
<div class="testimonials-js w-embed w-script">
</div>
<div class="navbar-bg-js w-embed w-script"></div>
<div class="faq-js w-embed w-script"></div>
</div>
</div>`;

export function Overlays() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
