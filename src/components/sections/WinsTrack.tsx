// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg
const html = String.raw`<div data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f962" class="w-layout-vflex wins-animation-track">
<section class="section main-large">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex steps-section-title">
<div class="w-layout-vflex section_heading animate-block_appear">
<div data-wf--section-chips--variant="dark" class="section_chips w-variant-28ba76d0-08d9-d4d7-40be-ef11d536cd9f"><img loading="lazy" src="/zig/6a2bb5f230f5600b18d92d3c_f5806a04f77d5f96be5623316e89377c_Tagline_Icon.svg" alt="" class="icon_chips"/>
<div>One platform. Two wins</div>
</div>
<div class="w-layout-vflex win_title">
<h2 class="title--l">The rep closes.<br/>The leader has their back.</h2>
<div class="w-layout-vflex win_sub">
<p class="text--l">The rep stops administrating. The leader stops guessing. The number starts moving.</p></div>
</div>
</div>
<div class="w-layout-vflex steps-btns"><a data-modal-open="" data-wf--button--variant="primary-m" href="/book-a-meeting" class="button w-inline-block">
<div>Start Now</div>
</a><a data-modal-open="" data-wf--button--variant="tertiary-m-white" href="/book-a-meeting" class="button w-variant-6101740f-88aa-0a0a-23a7-024ce8ee2b35 w-inline-block">
<div>Book a demo for a Team</div>
</a></div>
</div>
</div>
</div>
</section>
<section class="section wins-section">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="win-circles-wrapp">
<div class="win-circle illustration"><img src="/zig/6a2bbc88b9b3fcc05f3c1d04_5ccd0447c27a19ea6d5ba4313c11b518_Frame_2136140972.avif" loading="lazy" sizes="100vw" srcset="/zig/6a2bbc88b9b3fcc05f3c1d04_5ccd0447c27a19ea6d5ba4313c11b518_Frame_2136140972-p-500.avif 500w, /zig/6a2bbc88b9b3fcc05f3c1d04_5ccd0447c27a19ea6d5ba4313c11b518_Frame_2136140972.avif 618w" alt="" class="win-circle-img"/></div>
<div class="win-circle is--left">
<div class="w-layout-vflex win-circle-content is--left">
<div class="w-layout-vflex win-circle-text">
<div class="title--m">For the rep doing the closing</div>
</div>
</div>
<div class="win-tooltips is--left">
<div class="w-layout-vflex win-tooltip is--01">
<p class="text--l">60+ hours back. Every month. Automatically.</p></div>
<div class="w-layout-vflex win-tooltip is--02">
<p class="text--l">Finds leads, drafts outreach, joins calls, writes follow-ups.</p></div>
<div class="w-layout-vflex win-tooltip is--03">
<p class="text--l">Wherever you sell — desktop, phone, voice, or text.<br/></p></div>
</div>
</div>
<div class="win-circle is--right">
<div class="w-layout-vflex win-circle-content is--right">
<div class="w-layout-vflex win-circle-text">
<div class="title--m">For the leader running the number</div>
</div>
</div>
<div class="win-tooltips is--right">
<div class="w-layout-vflex win-tooltip is--01-right">
<p class="text--l">Pipeline that finally mirrors reality. CRM that survives the quarter.</p></div>
<div class="w-layout-vflex win-tooltip is--02">
<p class="text--l">One layer that replaces Apollo, Gong, Salesloft, and the notetaker.</p></div>
<div class="w-layout-vflex win-tooltip is--03-right">
<p class="text--l">At month 12, knows your deals better than any new hire.</p></div>
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
