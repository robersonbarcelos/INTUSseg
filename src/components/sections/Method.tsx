// Seção nova da INTUSeg: Como trabalhamos (4 passos)
const html = String.raw`<section id="metodo" class="section main-large intuseg-method">
<div class="padding_global">
<div class="w-layout-vflex container">
<div class="w-layout-vflex section_heading animate-block_appear">
<div data-wf--section-chips--variant="base" class="section_chips"><img loading="lazy" src="/assets/6a2ba47a3fac7258e1e616b1_5f7fbb6e08355e7f25447873f71cf0fa_Lightbulb_Icon.svg" alt="" class="icon_chips"/>
<div>Como trabalhamos</div>
</div>
<div class="w-layout-vflex built_title">
<h2 class="title--l"><span class="text--grad">Processo, gargalo, automação sob medida</span> e medição</h2></div>
<p class="text--l">A automação nasce do que a sua corretora faz hoje, e o resultado é medido em horas, prazos e erros.</p></div>
<div class="spacer spacer-60"></div>
<div class="method-grid">
<div class="built-card method-card">
<div class="built-card-content">
<div class="text--mono is--grey">/ 01</div>
<div class="title--m">Processo</div>
<p class="text--m">Mapeamos como a sua corretora opera hoje: renovação, cotação, cadastro, documentos, financeiro e equipe.</p></div>
</div>
<div class="built-card method-card is--accent-red">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 02</div>
<div class="title--m">Gargalo</div>
<p class="text--m">Medimos onde cada processo perde tempo, dinheiro ou precisão.</p></div>
</div>
<div class="built-card method-card is--accent-green">
<div class="built-card-content">
<div class="text--mono opacity-60">/ 03</div>
<div class="title--m">Automação sob medida</div>
<p class="text--m">Desenhamos o agente, a integração ou o sistema que resolve aquele gargalo, sobre os sistemas que você já usa.</p></div>
</div>
<div class="built-card method-card">
<div class="built-card-content">
<div class="text--mono is--grey">/ 04</div>
<div class="title--m">Medição</div>
<p class="text--m">Comparamos o antes e o depois em horas, prazos e erros.</p></div>
</div>
</div>
</div>
</div>
</section>`;

export function Method() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
