# zig.ai — Page topology (ordem de cima para baixo)

Header (nav fixa + `<style>` embed) → `<main class="main_wrapp">`:
1. Hero (`hero_section`, Lottie) — static + time
2. Logos (`main-large is--bg-white`) — static
3. Pillars (`main-large`, animate-text) — scroll scrub
4. Spacer (`section`) — static
5. Features (`main-large`, cards) — scroll IX2
6. ImpactTrack (`impact-animation-track` > `impact-section`) — scroll IX2, 1920px
7. WinsTrack (`wins-animation-track` > `wins-section`) — scroll IX2 + body bg
8. StepsTrack (`steps-animation-wrapp` > steps + sales) — scroll scrub, wheel
9. Testimonials — Splide
10. Cta (`section main`) — static/accordion
11. Footer — hover icons
Overlays (modais/embeds) após `</main>`.

Implementação: `scripts/build-clone.py` baixa os assets para `public/zig/`, reescreve URLs, gera `src/components/sections/*.tsx` e `public/zig/zig-init.js`. `ZigRuntime.tsx` carrega GSAP/Lenis/Splide/jQuery/Webflow runtime na mesma ordem do original.
