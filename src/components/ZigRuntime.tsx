"use client";

import { useEffect } from "react";

const LIBS = [
  "https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3/dist/ScrollTrigger.min.js",
  "https://cdn.jsdelivr.net/npm/gsap@3/dist/SplitText.min.js",
  "https://cdn.jsdelivr.net/npm/lenis@latest/dist/lenis.min.js",
  "https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js",
  "/zig/jquery-3.5.1.min.dc5e7f18c8.js",
  "/zig/webflow.schunk.36b8fb49256177c8.js",
  "/zig/webflow.schunk.c42549641b7d4501.js",
  "/zig/webflow.schunk.da605346bd7e7de0.js",
  "/zig/webflow.a0d2a647.d0015bc50368f326.js",
  "/zig/zig-init.js",
];

function load(src: string) {
  return new Promise<void>((resolve) => {
    if (document.querySelector(`script[data-zig="${src}"]`)) return resolve();
    const s = document.createElement("script");
    s.src = src;
    s.async = false;
    s.dataset.zig = src;
    s.onload = () => resolve();
    s.onerror = () => {
      console.warn("zig: failed to load", src);
      resolve();
    };
    document.body.appendChild(s);
  });
}

/** Loads the animation stack in the same order as the original page, then runs the ported inline scripts. */
export function ZigRuntime() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      // Splide stylesheet (original page ships it through the Webflow embed; harmless if duplicated)
      for (const src of LIBS) {
        if (cancelled) return;
        await load(src);
      }
      // Webflow's lottie module already missed DOM-ready when loaded after hydration: init it explicitly.
      try {
        const wf = (window as unknown as { Webflow?: { require: (m: string) => { init?: () => void } } }).Webflow;
        wf?.require("lottie").init?.();
      } catch (e) {
        console.warn("zig: lottie init", e);
      }
      (window as unknown as { __zigInit?: () => void }).__zigInit?.();
      window.dispatchEvent(new Event("load"));
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return null;
}
