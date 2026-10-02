// V4: a seção "Como começa" (roda de cards) sem o bloco verde "Uma renovação" (redundante)
const html = String.raw`<div data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f99d" class="w-layout-vflex steps-animation-wrapp is--no-steps">
<div class="w-layout-vflex sales-animation-track">
<section class="section sales-section">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex sales-section_heading">
<div class="w-layout-vflex section_heading">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2baff6be86b18d52d34a87_678c4ed9c7f0fe2b3dbca4429bca2c4b_Icon3.svg" alt="" class="icon_chips"/>
<div>Como começa</div>
</div>
<div class="w-layout-vflex sales-section_title">
<h2 class="title--l"><span class="text--grad">Do diagnóstico</span> à operação rodando</h2>
<div class="w-layout-vflex sales-section_sub">
<p class="text--l">Cada fase se justifica pelo ganho que o diagnóstico aponta. Um projeto que não dá retorno não deve ser feito.</p></div>
</div>
</div>
</div>
</div>
</div>
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="sales-cards">
<div class="sales-cards_track">
<div class="sales-card">
<div class="title--s is--green">Passo 1</div>
<div class="title--xs">Diagnóstico operacional. Mapa dos processos, ordem de automação por impacto e a linha de base da medição.</div>
</div>
<div class="sales-card">
<div class="title--s is--green">Passo 2</div>
<div class="title--xs">Implantação por marcos. Começamos pelo processo de maior retorno e treinamos a equipe ao longo do caminho.</div>
</div>
<div class="sales-card">
<div class="title--s is--green">Passo 3</div>
<div class="title--xs">Medição. Repetimos a medição depois de cada entrega, em horas, prazos e erros.</div>
</div>
<div class="sales-card">
<div class="title--s is--green">Passo 4</div>
<div class="title--xs">Evolução contínua. A INTUSeg mantém e evolui a operação, como o time de tecnologia e IA da corretora.</div>
</div>
<div class="sales-card is--cta">
<div class="title--s">Comece pelo processo que mais pesa.</div>
<div class="w-layout-vflex sales-card_btns"><a data-modal-open="cta" data-wf--button--variant="secondary-m" href="#diagnostico" class="button w-variant-81780053-53ab-86ef-2544-04e67f3b68aa w-inline-block">
<div>Agendar o diagnóstico</div>
</a><a data-wf--button--variant="tertiary-m-white" href="#faq" class="button w-variant-6101740f-88aa-0a0a-23a7-024ce8ee2b35 w-inline-block">
<div>Ver as perguntas</div>
</a></div>
</div>
</div>
</div>
</div>
</div>
<div class="w-layout-vflex sales-figure-wrapp">
<div class="sales-figure-wheel">
<div class="sales-figure-line is--1"></div>
<div class="sales-figure-line is--2"></div>
<div class="sales-figure-line is--3"></div>
<div class="sales-figure-line is--4"></div>
<div class="sales-figure-line is--5"></div>
<div class="sales-figure-line is--6"></div>
</div>
</div>
</section></div>
</div>`;

export function StepsTrack4() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
