// Variação 4: método em 5 etapas
const html = String.raw`<section id="metodo" class="section main-large intuseg-method">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex section_heading animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2ba47a3fac7258e1e616b1_5f7fbb6e08355e7f25447873f71cf0fa_Lightbulb_Icon.svg" alt="" class="icon_chips"/>
<div>Como trabalhamos</div>
</div>
<div class="w-layout-vflex built_title">
<h2 class="title--l"><span class="text--grad">Diagnóstico, priorização, piloto,</span> implantação e evolução</h2></div>
<p class="text--l">Começamos pequeno, validamos na operação real e só então expandimos.</p></div>
<div class="spacer spacer-60"></div>
<div class="method-grid is--five">
<div class="built-card method-card">
<div class="built-card-content">
<div class="text--mono is--grey">/ 01</div>
<div class="title--m">Diagnóstico</div>
<p class="text--m">Mapeamos processos, sistemas, dados, gargalos e custos ocultos.</p></div>
</div>
<div class="built-card method-card is--accent-red">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 02</div>
<div class="title--m">Priorização</div>
<p class="text--m">Identificamos o fluxo com maior impacto, melhor retorno e risco controlado.</p></div>
</div>
<div class="built-card method-card is--evo-1">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 03</div>
<div class="title--m">Piloto</div>
<p class="text--m">Automatizamos um processo importante e validamos o resultado na operação real.</p></div>
</div>
<div class="built-card method-card is--evo-2">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 04</div>
<div class="title--m">Implantação</div>
<p class="text--m">Conectamos sistemas, dados, agentes e canais utilizados pela equipe.</p></div>
</div>
<div class="built-card method-card is--accent-green">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 05</div>
<div class="title--m">Evolução</div>
<p class="text--m">Medimos ganhos e expandimos a automação para outros processos.</p></div>
</div>
</div>
</div>
</div>
</section>`;

export function Method4() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
