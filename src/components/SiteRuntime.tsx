"use client";

import { useEffect } from "react";

const LIBS = [
  "https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3/dist/SplitText.min.js",
  "https://cdn.jsdelivr.net/npm/lenis@latest/dist/lenis.min.js",
  "/assets/jquery-3.5.1.min.dc5e7f18c8.js",
  "/assets/webflow.schunk.36b8fb49256177c8.js",
  "/assets/webflow.schunk.c42549641b7d4501.js",
  "/assets/webflow.schunk.da605346bd7e7de0.js",
  "/assets/webflow.a0d2a647.d0015bc50368f326.js",
  "/assets/site-init.js",
];

function load(src: string) {
  return new Promise<void>((resolve) => {
    if (document.querySelector(`script[data-site="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = false; // preserva a ordem de execução mesmo com o download em paralelo
    s.dataset.site = src;
    s.onload = () => resolve();
    s.onerror = () => {
      console.warn("site: failed to load", src);
      resolve();
    };
    document.body.appendChild(s);
  });
}

/** Loads the animation stack in the same order as the original page, then runs the ported inline scripts. */
export function SiteRuntime() {
  useEffect(() => {
    let cancelled = false;
    const run = async () => {
      // Splide stylesheet (original page ships it through the Webflow embed; harmless if duplicated)
      // Todos os scripts entram de uma vez: o navegador baixa em paralelo e executa na ordem da lista
      // (async=false). Antes eram baixados um depois do outro, o que atrasava a animação do hero.
      if (cancelled) return;
      await Promise.all(LIBS.map(load));
      // Webflow's lottie module already missed DOM-ready when loaded after hydration: init it explicitly.
      try {
        const wf = (window as unknown as { Webflow?: { require: (m: string) => { init?: () => void } } }).Webflow;
        wf?.require("lottie").init?.();
      } catch (e) {
        console.warn("site: lottie init", e);
      }
      (window as unknown as { __siteInit?: () => void }).__siteInit?.();
      window.dispatchEvent(new Event("load"));
    };
    // A animação só começa depois da primeira pintura e quando o navegador está ocioso,
    // para o título do hero não competir com ~1 s de JavaScript das animações.
    const whenIdle = () => {
      const w = window as unknown as { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number };
      if (w.requestIdleCallback) w.requestIdleCallback(() => void run(), { timeout: 2000 });
      else setTimeout(() => void run(), 300);
    };
    whenIdle();
    return () => {
      cancelled = true;
    };
  }, []);
  return null;
}
