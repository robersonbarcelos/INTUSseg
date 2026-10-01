// Conteúdo extraído de https://zig.ai/ e adaptado para a INTUSeg
const html = String.raw`<section class="section main-large is--bg-white">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex benefits_header-new animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/zig/6a2ae04928fffdcec95313ae_d8d09b442fc8bac3c3dfa5c87774475d_Expand_Icon.svg" alt="" class="icon_chips"/>
<div>The execution gap</div>
</div>
<h2 class="title--l">You didn&#x27;t get into sales to do <span class="text--grad">data entry</span></h2></div>
<div class="spacer spacer-60"></div>
<div class="benefits_grid">
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8a2-62a4fde0" class="w-layout-vflex benefits">
<div class="w-layout-vflex benefits_chips">
<p class="text--chips">Before</p><img src="/zig/6a2ae0c52c00f4b73a109602_Tag_Icon.svg" loading="lazy" alt="" class="image-5"/></div>
<div class="hiw-benefits_list">
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker"><img src="/zig/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">You log into 8 tools to close<br/>one deal.</div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker"><img src="/zig/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">You spend 40 minutes after every call on work nobody built a tool to handle<br/></div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker"><img src="/zig/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">Your CRM is a to-do list you silently agreed to ignore. The board notices.<br/></div>
</div>
<div class="w-layout-vflex benefits_item is--last">
<div class="benefit_marker"><img src="/zig/6a2ae1aa14a73969a4f78b24_Close_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs">Your best rep is spending half their week not selling.<br/></div>
</div>
</div>
</div>
<div id="w-node-e22a8e64-76c5-ec90-dab3-4caedf46f8c1-62a4fde0" class="w-layout-vflex benefits">
<div class="w-layout-vflex benefits_chips is--green">
<p class="text--chips">After</p><img src="/zig/6a2ae0c52c00f4b73a109602_Tag_Icon.svg" loading="lazy" alt="" class="image-5"/></div>
<div class="hiw-benefits_list">
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker is--green"><img src="/zig/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="w-layout-vflex benefit_text">
<div class="title--xs is--green">Every action logged. You didn&#x27;t touch a thing.</div>
</div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker is--green"><img src="/zig/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="w-layout-vflex benefit_text">
<div class="title--xs is--green">Follow-up sent before you finished the next call.</div>
</div>
</div>
<div class="w-layout-vflex benefits_item">
<div class="benefit_marker is--green"><img src="/zig/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="w-layout-vflex benefit_text">
<div class="title--xs is--green">Your reps are selling. Not administrating.</div>
</div>
</div>
<div class="w-layout-vflex benefits_item is--last">
<div class="benefit_marker is--green"><img src="/zig/6a2ae1aa394b8dfaeee438b2_Check_Icon.svg" loading="lazy" alt="" class="icon_14px"/></div>
<div class="title--xs is--green">A pipeline your manager can defend to the board.</div>
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
