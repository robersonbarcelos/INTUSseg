// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg
const html = String.raw`<section data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f8e7" class="section main-large">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex section_heading animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/zig/6a2ba47a3fac7258e1e616b1_5f7fbb6e08355e7f25447873f71cf0fa_Lightbulb_Icon.svg" alt="" class="icon_chips"/>
<div>Built different</div>
</div>
<div class="w-layout-vflex built_title">
<h2 class="title--l"><span class="text--grad">Why Zig is different</span> from everything else you&#x27;ve tried</h2></div>
<p class="text--l">Most sales tools wait to be used. Zig is the AI employee that never stops working.</p></div>
<div class="spacer spacer-60"></div>
<div class="built-container">
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8f6-62a4fde0" class="built-card is--wide">
<div class="built-card-content">
<div class="text--mono is--grey">/ 01</div>
<div class="title--m">Full revenue motion</div>
<p class="text--m">From ICP to closed deal — research, outreach, meetings, follow-ups, CRM, pipeline — all connected. No other platform covers more than three stages. Zig covers all of them, and they talk to each other.</p></div>
<img src="/zig/6a2bab8643ca2678a85b67a4_885fd6d13eedb034ff9318901d56aab2_built-img--1.avif" loading="lazy" width="499.5" alt="" class="built-img-01"/></div>
<div class="built-card is--accent-red">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 02<br/></div>
<div class="title--m">Field-first mobile</div>
<p class="text--m">Scan a badge, a business card, or a handwritten name. Instantly: LinkedIn profile, email, phone, full company research. Ready to talk before the conversation starts. Your desk is wherever you&#x27;re selling.<br/></p></div>
<img src="/zig/6a2bab86c0baa426682eac51_built-img--2.avif" loading="lazy" width="628" alt="" class="built-img-02"/></div>
<div class="built-card is--accent-green">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 03<br/></div>
<div class="title--m">Always working. Never waiting.</div>
<p class="text--m">Zig doesn&#x27;t sit in a tab waiting to be opened. It surfaces actions before the rep thinks to look, listens during calls, and executes downstream — automatically.</p></div>
<img src="/zig/6a2bab86466f4a6f19e95059_b211bcb409c270226bd051b224cd418d_built-img--3.avif" loading="lazy" width="384" alt="" class="built-img-03"/></div>
<div class="built-card">
<div class="built-card-content">
<div class="text--mono is--grey">/ 04<br/></div>
<div class="title--m">The rep stays in control</div>
<p class="text--m">Complex actions require approval. Simple ones just happen. Every execution is visible, reviewable, and reversible. Enterprise-ready by design.</p></div>
<img src="/zig/6a2bab86772ae44669db2e29_built-img--4.avif" loading="lazy" width="409" alt="" class="built-img-04"/></div>
<div class="built-card">
<div class="built-card-content">
<div class="text--mono is--grey">/ 05<br/></div>
<div class="title--m">Your agent on the phone</div>
<p class="text--m">Call your Zig agent from the car. &quot;Send the follow-up. Update the CRM. Call Emily and offer her times from my calendar.&quot; It handles it. No laptop required.</p></div>
<img src="/zig/6a2bab863fac7258e1e903bd_65c3dd6d7eb826dde7209141a62eece1_built-img--5.avif" loading="lazy" width="189.5" alt="" class="built-img-05"/></div>
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f928-62a4fde0" class="built-card is--wide-accent">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 06<br/></div>
<div class="title--m">Intelligence trained on your data</div>
<p class="text--m">Not generic AI. Revenue Intelligence that learns from your actual deals, your actual wins, your actual buyers — and gets sharper every month.</p></div>
<img src="/zig/6a2bab865e1c44ad05720c06_65510cb5ecf042fe859f4d50ae142691_built-img--6.avif" loading="lazy" width="501" alt="" class="built-img-06"/><img src="/zig/6a2bab865e3ef1f56fad87b7_built-img--6-mob.avif" loading="lazy" width="501" alt="" class="built-img-06--mob"/></div>
</div>
</div>
</div>
</section>`;

export function Features() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
