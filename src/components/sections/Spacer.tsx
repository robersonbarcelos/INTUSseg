// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<section class="section">
<div class="padding_global">
<div class="w-layout-vflex container">
<div data-w-id="1c97c66c-14c5-df64-1e1f-0f58f91a9f6d" class="w-layout-vflex trusted-container">
<div class="trusted-wrapp">
<div class="title--s is--gray-600">Em operação em</div>
<div class="trusted-track">
<div class="trusted-list"><span class="trusted-name">Rede de franquias de corretoras</span><span class="trusted-name">Corretora de seguros auto</span><span class="trusted-name">Corretora com CORP e Aggilizador</span><span class="trusted-name">Corretora com apólices no Drive</span><span class="trusted-name">Corretora com multicálculo sob medida</span></div>
<div class="trusted-list"><span class="trusted-name">Rede de franquias de corretoras</span><span class="trusted-name">Corretora de seguros auto</span><span class="trusted-name">Corretora com CORP e Aggilizador</span><span class="trusted-name">Corretora com apólices no Drive</span><span class="trusted-name">Corretora com multicálculo sob medida</span></div>
<div class="trusted-list"><span class="trusted-name">Rede de franquias de corretoras</span><span class="trusted-name">Corretora de seguros auto</span><span class="trusted-name">Corretora com CORP e Aggilizador</span><span class="trusted-name">Corretora com apólices no Drive</span><span class="trusted-name">Corretora com multicálculo sob medida</span></div>
</div>
</div>
</div>
</div>
</div>
</section>`;

export function Spacer() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
