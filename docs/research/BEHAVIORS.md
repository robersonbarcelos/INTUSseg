# zig.ai — Behaviors (extraídos do HTML/JS originais)

Stack original: Webflow + GSAP (ScrollTrigger, SplitText) + Lenis + Splide + Lottie + Webflow IX2.

| Comportamento | Gatilho | Mecanismo |
|---|---|---|
| Smooth scroll | sempre | `new Lenis()` (classe `.lenis` no html) |
| Nav background | scroll >= 200px (só > 991px) | `.nav_bg` opacity 0→1, transition .3s |
| Hero Lottie | tempo | 4 arquivos .lottie por breakpoint; loop GSAP 8s com pausas de 1s em 25%/65% |
| Texto revelado por palavra | scroll scrub | `.animate-text_opacity` SplitText words 0.2→1, start `top 60%` end `bottom 40%` |
| Blocos que aparecem | scroll | `.animate-block_appear` y:40→0 + fade, 1.2s power4.out, start `top 65%` |
| Impact (cards/accent) | scroll (IX2) | translate3d/scale3d via IX2; MutationObserver liga `.impact-item-accent-text` e pointer-events |
| Wins (círculos + tooltips) | scroll (IX2) | clip-path/mask nos círculos, linhas SVG animadas com GSAP (>= 992px) |
| Cor de fundo do body | scroll | gray-50 → black (wins) → green-500 (steps) → gray-50, via ScrollTrigger, transition .4s |
| Steps / Sales wheel | scroll scrub | roda `.sales-figure-wheel` rotaciona; cards posicionados por trigonometria (> 767px) |
| Depoimentos | click/arrows | Splide loop, 1 por página, arrows + paginação |
| FAQ/accordion | click | só um aberto por vez, max-height animado |
| Modais | click `[data-modal-open]` | display flex + fade de opacity |
| Hover | — | transições definidas no CSS Webflow (botões, ícones de rodapé) |

Breakpoints: 991 / 767 / 479 (Webflow).
