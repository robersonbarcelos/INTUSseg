// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<div data-w-id="e22a8e64-76c5-ec90-dab3-4caedf46f933" class="w-layout-vflex impact-animation-track">
<section class="section impact-section">
<div class="padding_global">
<div class="w-layout-vflex container-impact">
<div class="w-layout-vflex impact-section_heading animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2baff6be86b18d52d34a87_678c4ed9c7f0fe2b3dbca4429bca2c4b_Icon3.svg" alt="" class="icon_chips"/>
<div>O gargalo em números</div>
</div>
<div class="w-layout-vflex impact_title">
<h2 class="title--l">Onde o tempo da corretora <span class="text--grad">se perde</span></h2></div>
<p class="text--l">Levantamentos internos da Segura, divulgados pela Revista Apólice em 20/07/2026. Como vêm de uma empresa que vende IA para o setor, servem como ordem de grandeza.</p></div>
<div class="impact-list">
<div class="impact-item is--01">
<div class="impact-content">
<div class="text--number">20-35%</div>
<div class="text--l">da rotina de um corretor vai para tarefas administrativas.</div>
</div>
<div class="impact-bg"></div>
</div>
<div class="impact-item is--02">
<div class="impact-content">
<div class="text--number">2-4h</div>
<div class="text--l">por semana consumidas por retrabalho.</div>
</div>
<div class="impact-bg"></div>
</div>
<div class="impact-item is--03">
<div class="impact-content">
<div class="text--number">8-15 min</div>
<div class="text--l">para encontrar um documento de cobertura.</div>
</div>
<div class="impact-bg"></div>
</div>
<div class="impact-item is--04">
<div class="impact-content">
<div class="text--number">14.430</div>
<div class="text--l">Lei 14.430/22: a assistência ao segurado na renovação entrou entre as atribuições do corretor (CQCS, 22/06/2026).</div>
</div>
<div class="impact-bg"></div>
</div>
<div class="impact-item-accent">
<div class="w-layout-vflex impact-item-accent-text">
<p class="title--m">Ordem de grandeza, não promessa: o diagnóstico mede o valor real da sua corretora.</p></div>
</div>
</div>
</div>
</div>
</section></div>`;

export function ImpactTrack() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
