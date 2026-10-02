// Conteúdo da INTUSeg (estrutura de seções e animações herdadas do site de referência)
const html = String.raw`<div class="main-css w-embed"><style>
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    transition: background-color 0.4s;
  }

  .text--grad {
    background: linear-gradient(265.26deg, #07846a 38.04%, #34bf99 94.86%);
    background-clip: text;
    color: transparent;
  }

  .footer_sn-icon rect,
  .footer_sn-icon path {
    transition: fill 0.3s ease;
  }

  .footer_sn-icon:hover rect {
    fill: #ffffff;
  }

  .footer_sn-icon:hover path {
    fill: #07846a;
  }

  .hubspot_form {
    overflow: auto;
  }
</style></div>
<div class="onpage_css w-embed"><style>
  .line {
    overflow: hidden;
  }

  .animate-text_opacity {
    overflow: hidden;
  }

  .animate-text_opacity [aria-hidden='true'] {
    will-change: opacity;
  }

  .impact-item .text--number {
    color: var(--_intuseg---colors--green-500);
  }
  .impact-item .text--l {
    color: var(--_intuseg---colors--gray-600);
  }

  @media screen and (min-width: 992px) {
    .impact-item:hover .impact-bg {
      transform: scale(1, 1);
    }
    .impact-item:hover .text--number {
      color: var(--_intuseg---colors--white);
    }
    .impact-item:hover .text--l {
      color: var(--_intuseg---colors--green-200);
    }
  }

  @media screen and (max-width: 480px) {
    .splide__pagination {
      position: static;
    }
  }

  .splide__pagination {
    width: auto;
    height: var(--_intuseg---base-size--44);
    gap: var(--_intuseg---base-size--12);
    border-radius: var(--_intuseg---base-size--20);
    justify-content: flex-start;
    align-items: center;
    display: flex;
    position: absolute;
    inset: auto auto 0% 0%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .splide__pagination__page {
    width: var(--_intuseg---base-size--42);
    height: 2px;
    border-radius: var(--_intuseg---base-size--40);
    background-color: #fff3;
    border: none;
    padding: 0;
    cursor: pointer;
    overflow: clip;
    transform: none;
    opacity: 1;
  }

  .splide__pagination__page.is-active {
    background-color: #fff;
    transform: none;
  }

  .splide__sr {
    display: none;
  }

  .trusted-track {
    -webkit-mask-image: linear-gradient(90deg, #000 0%, #000 92%, transparent 100%);
    mask-image: linear-gradient(90deg, #000 0%, #000 92%, transparent 100%);
  }

  @media (max-width: 480px) {
    .trusted-track {
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
      mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
    }
  }
</style></div>
<div data-modal="cta" class="modal-component">
<div data-modal="close" class="form-modal__bg"></div>
<div class="modal_wrapp" data-lenis-prevent>
<div data-modal="close" class="modal__close"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none" class="close--icon"><path d="M21 21L3 3M21.0001 3L3 21.0001" stroke="#15171A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
<div class="hubspot_form w-embed w-script">
<div class="intuseg-form-wrap">
<form class="intuseg-form" data-intuseg-form novalidate>
<h3>Agendar o diagnóstico operacional</h3>
<p class="lead">Uma conversa sobre seus sistemas, sua equipe e o processo que mais pesa.</p>
<div class="intuseg-steps" aria-hidden="true"><span class="is--on"></span><span></span></div>
<div class="intuseg-step is--active" data-step="1">
<div class="row">
<label>Nome<input type="text" name="nome" required autocomplete="name"/></label>
<label>WhatsApp<input type="tel" name="whatsapp" required autocomplete="tel"/></label>
</div>
<label>E-mail<input type="email" name="email" required autocomplete="email"/></label>
<label>Nome da corretora<input type="text" name="corretora" required autocomplete="organization"/></label>
<label>Instagram ou site da corretora<input type="text" name="presenca" placeholder="@suacorretora ou www.suacorretora.com.br" autocomplete="off"/></label>
<button type="button" class="intuseg-next" data-next>Continuar <span aria-hidden="true">&rarr;</span></button>
</div>
<div class="intuseg-step" data-step="2">
<fieldset data-group="sistemas"><legend>Sistemas que você usa</legend>
<div class="checks">
<label class="chk"><input type="checkbox" name="sistemas" value="Corp"/>Corp</label>
<label class="chk"><input type="checkbox" name="sistemas" value="CORE"/>CORE</label>
<label class="chk"><input type="checkbox" name="sistemas" value="Quiver"/>Quiver</label>
<label class="chk"><input type="checkbox" name="sistemas" value="Aggilizador"/>Aggilizador</label>
<label class="chk"><input type="checkbox" name="sistemas" value="Agger"/>Agger</label>
<label class="chk"><input type="checkbox" name="sistemas" value="Segfy"/>Segfy</label>
<label class="chk"><input type="checkbox" name="sistemas" value="Outro"/>Outro</label>
</div></fieldset>
<div class="row">
<label data-field="equipe">Tamanho da equipe<select name="equipe"><option value="">Selecione</option><option>1</option><option>2 a 3</option><option>4 a 10</option><option>11 ou mais</option></select></label>
<label data-field="renovacoes">Renovações por mês (aprox.)<select name="renovacoes"><option value="">Selecione</option><option>Até 50</option><option>51 a 200</option><option>201 a 500</option><option>Mais de 500</option></select></label>
</div>
<fieldset data-group="processos"><legend>Qual processo mais pesa hoje?</legend>
<div class="checks">
<label class="chk"><input type="checkbox" name="processos" value="Renovação"/>Renovação</label>
<label class="chk"><input type="checkbox" name="processos" value="Cotação"/>Cotação</label>
<label class="chk"><input type="checkbox" name="processos" value="Cadastro"/>Cadastro</label>
<label class="chk"><input type="checkbox" name="processos" value="Documentos"/>Documentos</label>
<label class="chk"><input type="checkbox" name="processos" value="Financeiro"/>Financeiro</label>
<label class="chk"><input type="checkbox" name="processos" value="Equipe e acompanhamento"/>Equipe e acompanhamento</label>
<label class="chk"><input type="checkbox" name="processos" value="Outro"/>Outro</label>
</div></fieldset>
<div class="intuseg-actions">
<button type="button" class="intuseg-back" data-back><span aria-hidden="true">&larr;</span> Voltar</button>
<button type="submit">Agendar o diagnóstico</button>
</div>
</div>
<div class="msg" role="status" aria-live="polite"></div>
<div class="intuseg-done" role="status" aria-live="polite">
<span class="intuseg-done_check" aria-hidden="true"><svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
<h3>Recebemos o seu pedido.</h3>
<p class="lead">Nosso time vai entrar em contato no WhatsApp em até 1 dia útil para agendar o horário do diagnóstico da sua corretora.</p>
<button type="button" class="intuseg-next" data-done-close>Fechar</button>
</div>
</form>
</div>
</div>
</div>
</div>
<div data-animation="over-right" class="navbar w-nav" data-wf--navbar--variant="base" data-easing2="ease" data-easing="ease" data-collapse="medium" data-w-id="a7bc8a10-fdd2-7358-97a0-ee55c54de030" role="banner" data-duration="400">
<div class="w-layout-vflex nav_container"><a href="#topo" aria-current="page" class="nav_logo w-inline-block w--current">
<div class="logo_img is--desk w-embed"><span class="intuseg-logo">INTUSeg</span></div>
</a>
<nav role="navigation" id="w-node-a7bc8a10-fdd2-7358-97a0-ee55c54de034-c54de030" class="nav_links w-nav-menu">
<div class="w-layout-vflex nav_links-content"><a href="#metodo" class="navlink w-nav-link">Método</a><a href="#processos" class="navlink w-nav-link">Processos</a><a href="#casos" class="navlink w-nav-link">Casos</a><a href="#faq" class="navlink w-nav-link">Perguntas</a>
<div class="nav_links-button"><a data-modal-open="cta" data-wf--button--variant="primary-s" href="#diagnostico" class="button w-variant-987f400b-b846-238a-7f65-5fa18cfecfa3 w-inline-block">
<div>Agendar diagnóstico</div>
</a><a data-wf--button--variant="secondary-s" href="#metodo" class="button w-variant-05364811-9faf-2d5c-060a-a42f79515f00 w-inline-block">
<div>Ver o método</div>
</a></div>
</div>
</nav>
<div class="button_navbar btn-bar"><a data-wf--button--variant="tertiary-s" href="#metodo" class="button w-variant-069eda21-72c1-d9fc-63ae-ff327d98e2a0 w-inline-block">
<div>Ver o método</div>
</a><a data-modal-open="cta" data-wf--button--variant="primary-s" href="#diagnostico" class="button w-variant-987f400b-b846-238a-7f65-5fa18cfecfa3 w-inline-block">
<div>Agendar diagnóstico</div>
</a></div>
<div class="menu-button w-nav-button"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="burger_icon is--open"><path d="M4.5 12.75H31.5M4.5 23.25H31.5" stroke="#15171A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 36 36" fill="none" class="burger_icon is--close"><path d="M27 9L9 27M9 9L27 27" stroke="#15171A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
</div>
<div class="nav_bg"></div>
</div>`;

export function Header() {
  return <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: html }} />;
}
