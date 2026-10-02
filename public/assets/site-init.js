window.__siteInit = function () {
/* inline9: modal (original) + INTUSeg: trava a rolagem da página enquanto o popup está aberto */
try {
(() => {
  let locked = false;
  let current = null;
  function lockPage() {
    if (locked) return;
    locked = true;
    const sbw = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.overflow = 'hidden';
    if (sbw > 0) document.body.style.paddingRight = sbw + 'px';
    if (window.__lenis) window.__lenis.stop();
  }
  function unlockPage() {
    if (!locked) return;
    locked = false;
    document.documentElement.style.overflow = '';
    document.body.style.paddingRight = '';
    if (window.__lenis) window.__lenis.start();
  }
  function openModal(modal) {
    current = modal;
    modal.style.display = "flex";
    modal.style.opacity = "0";
    requestAnimationFrame(() => { modal.style.opacity = "1"; });
    lockPage();
  }
  function closeModal(modal) {
    if (!modal) return;
    modal.style.opacity = "0";
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      modal.style.display = "none";
      modal.removeEventListener('transitionend', handler);
      if (current === modal) current = null;
      unlockPage();
    };
    function handler(e) { if (e.propertyName === 'opacity') finish(); }
    modal.addEventListener('transitionend', handler);
    setTimeout(finish, 450);
  }

  document.querySelectorAll('[data-modal-open]').forEach(btn => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      const modalId = btn.getAttribute('data-modal-open');
      const modal = document.querySelector(`[data-modal="${modalId}"]`);
      if (!modal) return;
      openModal(modal);
    });
  });

  document.querySelectorAll('[data-modal="close"]').forEach(btn => {
    btn.addEventListener("click", () => {
      let modal = btn.parentElement;
      while (modal && (!modal.getAttribute('data-modal') || modal.getAttribute('data-modal') === 'close')) {
        modal = modal.parentElement;
      }
      closeModal(modal);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && current) closeModal(current);
  });

  // O Lenis (parado) bloqueia a roda mesmo dentro do popup; o evento não pode chegar até ele.
  document.querySelectorAll('.modal_wrapp').forEach((w) => {
    ['wheel', 'touchmove'].forEach((t) => w.addEventListener(t, (e) => e.stopPropagation(), { passive: true }));
  });

})();
} catch (e) { console.warn("site-init inline9", e); }

/* inline11: loop do Lottie do hero (original, 8 s com pausas de 1 s em 25% e 65%) */
try {
window.Webflow = window.Webflow || [];
window.Webflow.push(function () {

  function init() {
    const lottieModule = Webflow.require('lottie');
    const animations = lottieModule.lottie.getRegisteredAnimations();

    if (!animations.length) {
      setTimeout(init, 200);
      return;
    }

    const allLotties = document.querySelectorAll('.hero_lottie');
    const visibleEl = Array.from(allLotties).find(
      el => getComputedStyle(el).display !== 'none'
    );

    const anim = animations.find(a => a.wrapper === visibleEl) || animations[0];

    if (!anim) {
      setTimeout(init, 200);
      return;
    }

    anim.stop();

    const proxy = { frame: 0 };
    const t = anim.totalFrames;
    const totalDuration = 8;

    function segmentDuration(from, to) {
      return ((to - from) / t) * totalDuration;
    }

    function playLoop() {
      proxy.frame = 0;
      anim.goToAndStop(0, true);

      gsap.timeline()
        .to(proxy, {
          frame: t * 0.25,
          duration: segmentDuration(0, t * 0.25),
          ease: 'none',
          onUpdate: () => anim.goToAndStop(proxy.frame, true)
        })
        .to(proxy, {
          frame: t * 0.65,
          duration: segmentDuration(t * 0.25, t * 0.65),
          delay: 1,
          ease: 'none',
          onUpdate: () => anim.goToAndStop(proxy.frame, true)
        })
        .to(proxy, {
          frame: t,
          duration: segmentDuration(t * 0.65, t),
          delay: 1,
          ease: 'none',
          onUpdate: () => anim.goToAndStop(proxy.frame, true),
          onComplete: playLoop
        });
    }

    playLoop();
  }

  init();
});
} catch (e) { console.warn("hero-lottie", e); }

/* inline12 */
try {
gsap.registerPlugin(ScrollTrigger, SplitText);

  document.querySelectorAll('.animate-text_opacity').forEach((el) => {
    const split = new SplitText(el, { type: 'words' });

    gsap.set(split.words, { opacity: 0.2 });

    gsap.to(split.words, {
      opacity: 1,
      ease: 'none',
      stagger: 0.5,
      scrollTrigger: {
        trigger: el,
        start: 'top 60%',
        end: 'bottom 40%',
        scrub: true,
      },
    });
  });

  document.querySelectorAll('.animate-block_appear').forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 65%',
        toggleActions: 'play none none none',
      },
    });
  });
} catch (e) { console.warn("site-init inline12", e); }

/* inline13 */
try {
(function () {
    if (window.innerWidth <= 767) return;

    const accent = document.querySelector('.impact-item-accent');
    const accentText = document.querySelector('.impact-item-accent-text');
    function getScale(el) {
      const match = (el.getAttribute('style') || '').match(/scale3d\(([\d.]+)/);
      return match ? parseFloat(match[1]) : 0;
    }
    let accentState = 'hidden';
    new MutationObserver(() => {
      const scale = getScale(accent);
      if (scale >= 0.99 && accentState === 'hidden') {
        accentState = 'shown';
        accentText.style.opacity = '1';
      } else if (scale < 0.99 && accentState === 'shown') {
        accentState = 'hidden';
        accentText.style.opacity = '0';
      }
    }).observe(accent, { attributes: true, attributeFilter: ['style'] });
    if (getScale(accent) >= 0.99) {
      accentState = 'shown';
      accentText.style.opacity = '1';
    }
    const impactItems = document.querySelectorAll('.impact-item');
    const watchItem = document.querySelector('.impact-item.is--01');
    function getTranslate(el) {
      const match = (el.getAttribute('style') || '').match(/translate3d\(([\d.-]+)/);
      return match ? parseFloat(match[1]) : 0;
    }
    new MutationObserver(() => {
      const tx = getTranslate(watchItem);
      const moving = Math.abs(tx) > 0.01;
      impactItems.forEach((item) => {
        item.style.pointerEvents = moving ? 'none' : '';
      });
    }).observe(watchItem, { attributes: true, attributeFilter: ['style'] });
  })();
} catch (e) { console.warn("site-init inline13", e); }

/* inline14 */
try {
(function () {
    if (window.innerWidth < 480) return;
    const fullMode = () => window.innerWidth >= 992;
    const wrap = document.querySelector('.win-circles-wrapp');
    const illus = document.querySelector('.win-circle.illustration');
    const leftEl = document.querySelector('.win-circle.is--left');
    const rightEl = document.querySelector('.win-circle.is--right');
    const tooltips = document.querySelectorAll('.win-tooltips');
    let maskState = 'hidden';
    let linesState = 'hidden';
    let elements = [];
    const MASK_THRESHOLD = 0.7;
    const TIP_THRESHOLD = 0.5;
    function getOpacity(el) {
      const match = (el.getAttribute('style') || '').match(/opacity:\s*([\d.]+)/);
      return match ? parseFloat(match[1]) : 0;
    }
    function applyMask() {
      const iRect = illus.getBoundingClientRect();
      const lRect = leftEl.getBoundingClientRect();
      const rRect = rightEl.getBoundingClientRect();
      const lCx = lRect.left - iRect.left + lRect.width / 2;
      const lCy = lRect.top - iRect.top + lRect.height / 2;
      const lR = lRect.width / 2;
      const rCx = rRect.left - iRect.left + rRect.width / 2;
      const rCy = rRect.top - iRect.top + rRect.height / 2;
      const rR = rRect.width / 2;
      illus.style.clipPath = `circle(${lR}px at ${lCx}px ${lCy}px)`;
      const mask = `radial-gradient(circle ${rR}px at ${rCx}px ${rCy}px, black 99%, transparent 100%)`;
      illus.style.maskImage = mask;
      illus.style.webkitMaskImage = mask;
    }
    // INTUSeg: o recorte em lente fica sempre aplicado (o original o removia durante o fade e mostrava a caixa inteira)
    function removeMask() {}
    function buildAnnotations(visible) {
      const svg = document.querySelector('.win-svg-overlay');
      const wrapRect = wrap.getBoundingClientRect();
      gsap.killTweensOf(svg);
      elements.forEach(({ path, dot }) => {
        gsap.killTweensOf(path);
        gsap.killTweensOf(dot);
      });
      svg.innerHTML = '';
      svg.style.opacity = '1';
      elements = [];
      [
        { el: leftEl, side: 'left', color: 'var(--_intuseg---colors--green-500)' },
        { el: rightEl, side: 'right', color: '#87bbd9' },
      ].forEach(({ el, side, color }) => {
        const cr = el.getBoundingClientRect();
        const cx = cr.left - wrapRect.left + cr.width / 2;
        const cy = cr.top - wrapRect.top + cr.height / 2;
        const r = cr.width / 2;
        el.querySelectorAll('.win-tooltip').forEach((tooltip, i) => {
          const tr = tooltip.getBoundingClientRect();
          const x0 = side === 'left' ? tr.left - wrapRect.left : tr.right - wrapRect.left;
          const y1 = tr.bottom - wrapRect.top;
          let mx, my, d;
          if (i === 1) {
            mx = side === 'left' ? cx - r : cx + r;
            my = y1;
            d = `M ${x0} ${y1} L ${mx} ${my}`;
          } else {
            const ANGLE = (30 * Math.PI) / 180;
            const x1raw = side === 'left' ? tr.right - wrapRect.left : tr.left - wrapRect.left;
            const minOffset = 32;
            const x1 = side === 'left' ? Math.min(x1raw, cx - minOffset) : Math.max(x1raw, cx + minOffset);
            const dx = (side === 'left' ? 1 : -1) * Math.cos(ANGLE);
            const dy = (cy > y1 ? 1 : -1) * Math.sin(ANGLE);
            const ax = x1 - cx,
              ay = y1 - cy;
            const b = 2 * (ax * dx + ay * dy);
            const c = ax * ax + ay * ay - r * r;
            const disc = b * b - 4 * c;
            const t = disc >= 0 ? [(-b - Math.sqrt(disc)) / 2, (-b + Math.sqrt(disc)) / 2].filter((t) => t > 0).sort((a, b) => a - b)[0] : 60;
            mx = x1 + t * dx;
            my = y1 + t * dy;
            d = `M ${x0} ${y1} L ${x1} ${y1} L ${mx} ${my}`;
          }
          const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          path.setAttribute('d', d);
          path.setAttribute('stroke', color);
          path.setAttribute('stroke-width', '1');
          path.setAttribute('fill', 'none');
          const len = path.getTotalLength();
          path.setAttribute('stroke-dasharray', len);
          path.setAttribute('stroke-dashoffset', visible ? '0' : len);
          svg.appendChild(path);
          const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
          dot.setAttribute('cx', mx);
          dot.setAttribute('cy', my);
          dot.setAttribute('r', '3');
          dot.setAttribute('fill', color);
          dot.style.opacity = visible ? 1 : 0;
          svg.appendChild(dot);
          elements.push({ path, dot, len, delay: i * 0.15 });
        });
      });
    }
    function drawAnnotations() {
      if (!fullMode()) return;
      buildAnnotations(false);
      elements.forEach(({ path, dot, delay }) => {
        gsap.to(path, { strokeDashoffset: 0, duration: 0.5, delay, ease: 'power2.out' });
        gsap.to(dot, { opacity: 1, duration: 0.2, delay: delay + 0.45 });
      });
    }
    function redrawInstant() {
      if (!fullMode()) return;
      buildAnnotations(true);
    }
    function hideLines() {
      const svg = document.querySelector('.win-svg-overlay');
      if (!svg) return;
      elements.forEach(({ path, dot, len }) => {
        gsap.killTweensOf(path);
        gsap.killTweensOf(dot);
        gsap.to(path, { strokeDashoffset: len, duration: 0.3, delay: 0.15, ease: 'power2.in' });
        gsap.to(dot, { opacity: 0, duration: 0.15, delay: 0.1 });
      });
      gsap.to(svg, { opacity: 0, duration: 0.3, delay: 0.4 });
    }
    function clearLines() {
      const svg = document.querySelector('.win-svg-overlay');
      if (!svg) return;
      gsap.killTweensOf(svg);
      elements.forEach(({ path, dot }) => {
        gsap.killTweensOf(path);
        gsap.killTweensOf(dot);
      });
      svg.innerHTML = '';
      svg.style.opacity = '0';
      elements = [];
    }
    new MutationObserver(() => {
      // INTUSeg: a IX2 reescreve o atributo style e apaga o recorte; reaplica sempre que sumir
      if (!illus.style.clipPath) requestAnimationFrame(applyMask);
      const opacity = getOpacity(illus);
      if (opacity >= MASK_THRESHOLD && maskState === 'hidden') {
        maskState = 'shown';
        requestAnimationFrame(applyMask);
      } else if (opacity < MASK_THRESHOLD && maskState === 'shown') {
        maskState = 'hidden';
        removeMask();
      }
    }).observe(illus, { attributes: true, attributeFilter: ['style'] });
    new MutationObserver(() => {
      const opacity = getOpacity(tooltips[0]);
      if (opacity >= TIP_THRESHOLD && linesState === 'hidden') {
        linesState = 'shown';
        if (fullMode()) drawAnnotations();
      } else if (opacity < TIP_THRESHOLD && linesState === 'shown') {
        linesState = 'hidden';
        if (fullMode()) hideLines();
      }
    }).observe(tooltips[0], { attributes: true, attributeFilter: ['style'] });
    requestAnimationFrame(applyMask);
    window.addEventListener('load', () => requestAnimationFrame(applyMask));
    let resizeTimer;
    window.addEventListener('resize', () => {
      const svg = document.querySelector('.win-svg-overlay');
      if (svg) {
        gsap.killTweensOf(svg);
        gsap.set(svg, { opacity: 0 });
      }
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        applyMask();
        const linesVisible = fullMode() && getOpacity(tooltips[0]) >= TIP_THRESHOLD;
        if (linesVisible) {
          linesState = 'shown';
          drawAnnotations();
        } else {
          linesState = 'hidden';
          clearLines();
        }
      }, 150);
    });
  })();
} catch (e) { console.warn("site-init inline14", e); }

/* inline15 */
try {
(function () {
    gsap.registerPlugin(ScrollTrigger);

    const body = document.body;
    const stepsSection = document.querySelector('.steps-section');

    ScrollTrigger.matchMedia({
      '(min-width: 992px)': function () {
        ScrollTrigger.create({
          trigger: '.wins-animation-track',
          start: 'top center',
          onEnter: () => (body.style.backgroundColor = 'var(--_intuseg---colors--black)'),
          onLeaveBack: () => (body.style.backgroundColor = 'var(--_intuseg---colors--gray-50)'),
        });

        if (stepsSection) {
          ScrollTrigger.create({
            trigger: '.steps-animation-track',
            start: 'top center',
            onEnter: () => (body.style.backgroundColor = 'var(--_intuseg---colors--green-500)'),
            onLeaveBack: () => (body.style.backgroundColor = 'var(--_intuseg---colors--black)'),
          });

          ScrollTrigger.create({
            trigger: '.steps-section',
            start: 'bottom 50%',
            onEnter: () => (stepsSection.style.backgroundColor = 'var(--_intuseg---colors--green-500)'),
            onLeaveBack: () => (stepsSection.style.backgroundColor = 'transparent'),
          });

          ScrollTrigger.create({
            trigger: '.steps-section',
            start: 'bottom 20%',
            onEnter: () => (body.style.backgroundColor = 'var(--_intuseg---colors--gray-50)'),
            onLeaveBack: () => (body.style.backgroundColor = 'var(--_intuseg---colors--green-500)'),
          });
        } else if (document.querySelector('.sales-animation-track')) {
          // INTUSeg (/v4): sem o bloco verde dos passos, o fundo volta ao claro quando a seção "Como começa" chega
          ScrollTrigger.create({
            trigger: '.sales-animation-track',
            start: 'top center',
            onEnter: () => (body.style.backgroundColor = 'var(--_intuseg---colors--gray-50)'),
            onLeaveBack: () => (body.style.backgroundColor = 'var(--_intuseg---colors--black)'),
          });
        }

        return () => {
          body.style.backgroundColor = '';
          if (stepsSection) {
            stepsSection.style.backgroundColor = '';
          }
        };
      },
    });

    window.addEventListener('load', () => {
      ScrollTrigger.refresh();
    });
  })();
} catch (e) { console.warn("site-init inline15", e); }

/* inline16 */
try {
(function () {
    gsap.registerPlugin(ScrollTrigger);
    const wrap = document.querySelector('.steps-animation-wrapp');
    const wheel = document.querySelector('.sales-figure-wheel');
    const cards = [...document.querySelectorAll('.sales-cards_track .sales-card')];
    if (!wrap || !wheel || !cards.length) return;
    if (window.innerWidth <= 767) return;

    const lineStart = -35,
      lineStep = 30;
    const angles = cards.map((_, i) => lineStart + (cards.length - 1 - i) * lineStep);

    gsap.set(cards, { clearProps: 'all' });
    gsap.set(wheel, { clearProps: 'all' });

    requestAnimationFrame(() => {
      const wR = wheel.getBoundingClientRect();
      const wcx = wR.left + wR.width / 2;
      const wcy = wR.top + wR.height / 2;
      const meta = cards.map((card) => {
        const r = card.getBoundingClientRect();
        return { naturalCx: r.left + r.width / 2, deltaY: r.top + r.height / 2 - wcy };
      });

      const cta = cards[cards.length - 1];
      const ctaR = cta.getBoundingClientRect();
      const track = document.querySelector('.sales-cards_track');
      const targetCx = track.getBoundingClientRect().left + ctaR.width / 2;
      const cotTarget = (targetCx - wcx) / meta[cards.length - 1].deltaY;
      const ctaFinalAngle = (Math.atan2(1, cotTarget) * 180) / Math.PI;
      const totalRotation = Math.min(180, ctaFinalAngle - lineStart);

      function tick(rotation) {
        cards.forEach((card, i) => {
          const rad = ((angles[i] + rotation) * Math.PI) / 180;
          const sinA = Math.sin(rad);
          let rx;
          if (sinA <= 0.05) {
            rx = wcx + Math.sign(Math.cos(rad)) * window.innerWidth * 2;
          } else {
            rx = wcx + meta[i].deltaY * (Math.cos(rad) / sinA);
          }
          gsap.set(card, { x: rx - meta[i].naturalCx });
        });
      }

      tick(0);

      gsap.to(wheel, {
        rotation: totalRotation,
        ease: 'none',
        scrollTrigger: {
          trigger: wrap,
          start: (function () {
            if (document.querySelector('.steps-animation-track')) return '50% top-=200';
            // sem a trilha dos passos (250vh) o início equivalente é medido a partir do topo da trilha da roda
            const S = 2.5 * window.innerHeight;
            const T = wrap.offsetHeight;
            const X = Math.round((T - S) / 2 + 200);
            return 'top top' + (X >= 0 ? '-=' + X : '+=' + -X);
          })(),
          end: 'bottom bottom-=400',
          scrub: true,
          onUpdate: (self) => tick(self.progress * totalRotation),
        },
      });
    });
  })();
} catch (e) { console.warn("site-init inline16", e); }

/* inline17 */
try {
(() => {
    const customersSlider = document.querySelector('.testim_slider');
    if (!customersSlider) return;

    new Splide(customersSlider, {
      perPage: 1,
      perMove: 1,
      type: 'loop',
      arrows: true,
      pagination: true,
      rewindSpeed: 400,
      updateOnMove: true,
    }).mount();
  })();
} catch (e) { console.warn("site-init inline17", e); }

/* inline18 */
try {
(function () {
    if (window.innerWidth <= 991) return;
    const navBg = document.querySelector('.nav_bg');
    if (!navBg) return;
    navBg.style.opacity = '0';
    navBg.style.transition = 'opacity 0.3s ease';
    window.addEventListener(
      'scroll',
      () => {
        navBg.style.opacity = window.scrollY >= 200 ? '1' : '0';
      },
      { passive: true },
    );
  })();
} catch (e) { console.warn("site-init inline18", e); }

/* inline19 */
try {
(() => {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach(accordion => {
		const toggle = accordion.querySelector('.accordion-control');
		const content = accordion.querySelector('.accordion-content');

		toggle.addEventListener('click', () => {
			const isOpen = accordion.classList.contains('open');

			accordions.forEach(otherAccordion => {
				if (otherAccordion !== accordion) {
					otherAccordion.classList.remove('open');
					otherAccordion.setAttribute('aria-expanded', 'false');
					const otherContent = otherAccordion.querySelector('.accordion-content');
					otherContent.setAttribute('aria-hidden', 'true');
					otherContent.style.maxHeight = null;
				}
			});

			accordion.classList.toggle('open');
			accordion.setAttribute('aria-expanded', String(!isOpen));
			content.setAttribute('aria-hidden', String(isOpen));
			content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
		});
	});
})();
} catch (e) { console.warn("site-init inline19", e); }

try { window.__lenis = new Lenis({ anchors: true }); function raf(t){ window.__lenis.raf(t); requestAnimationFrame(raf);} requestAnimationFrame(raf); } catch(e) { console.warn("lenis", e); }
};

/* formulário do diagnóstico */
try {
  document.querySelectorAll('[data-intuseg-form]').forEach((form) => {
    const msg = form.querySelector('.msg');
    const steps = form.querySelectorAll('.intuseg-step');
    const dots = form.querySelectorAll('.intuseg-steps span');
    const showStep = (n) => {
      steps.forEach((el) => el.classList.toggle('is--active', el.dataset.step === String(n)));
      dots.forEach((d, i) => d.classList.toggle('is--on', i < n));
      msg.className = 'msg'; msg.textContent = '';
      const w = form.closest('.modal_wrapp'); if (w) w.scrollTop = 0;
    };
    const step1Error = () => {
      const fd = new FormData(form);
      const v = (k) => String(fd.get(k) || '').trim();
      if (!v('nome') || !v('whatsapp') || !v('email') || !v('corretora')) return 'Preencha nome, WhatsApp, e-mail e nome da corretora.';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v('email'))) return 'Confira o e-mail digitado.';
      return '';
    };
    form.querySelector('[data-next]').addEventListener('click', () => {
      const err = step1Error();
      if (err) { msg.className = 'msg'; msg.textContent = err; return; }
      showStep(2);
    });
    const resetDone = () => { form.classList.remove('is--done'); showStep(1); };
    document.querySelectorAll('[data-modal-open]').forEach((b) => b.addEventListener('click', resetDone));
    form.querySelector('[data-done-close]').addEventListener('click', () => {
      const x = form.closest('.modal-component').querySelector('.modal__close');
      if (x) x.click();
    });
    const step2Error = () => {
      const fd = new FormData(form);
      const miss = [];
      form.querySelectorAll('.intuseg-step[data-step="2"] .is--missing').forEach((el) => el.classList.remove('is--missing'));
      const flag = (sel) => { const el = form.querySelector(sel); if (el) el.classList.add('is--missing'); };
      if (!fd.getAll('sistemas').length) { miss.push('sistemas'); flag('fieldset[data-group="sistemas"]'); }
      if (!fd.get('equipe')) { miss.push('equipe'); flag('label[data-field="equipe"]'); }
      if (!fd.get('renovacoes')) { miss.push('renovacoes'); flag('label[data-field="renovacoes"]'); }
      if (!fd.getAll('processos').length) { miss.push('processos'); flag('fieldset[data-group="processos"]'); }
      return miss.length ? 'Marque ao menos uma opção em cada bloco para continuar.' : '';
    };
    form.querySelector('.intuseg-step[data-step="2"]').addEventListener('change', () => {
      if (form.querySelector('.is--missing')) { const e = step2Error(); msg.className = 'msg'; msg.textContent = e; }
    });
    form.querySelector('[data-back]').addEventListener('click', () => showStep(1));
    form.addEventListener('submit', async (ev) => {
      ev.preventDefault();
      const err = step1Error();
      if (err) { showStep(1); msg.textContent = err; return; }
      const err2 = step2Error();
      if (err2) { msg.className = 'msg is--error'; msg.textContent = err2; return; }
      const fd = new FormData(form);
      const v = (k) => String(fd.get(k) || '').trim();
      const body = {
        nome: v('nome'), whatsapp: v('whatsapp'), email: v('email'),
        corretora: v('corretora'), presenca: v('presenca'),
        sistemas: fd.getAll('sistemas'),
        equipe: fd.get('equipe') || '',
        renovacoes: fd.get('renovacoes') || '',
        processos: fd.getAll('processos'),
      };
      msg.className = 'msg';
      msg.textContent = 'Enviando...';
      try {
        const r = await fetch('/api/lead', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
        if (!r.ok) throw new Error('http ' + r.status);
        msg.className = 'msg ok';
        msg.textContent = 'Recebemos o seu pedido. Obrigado.';
        form.reset();
        showStep(1);
        form.classList.add('is--done');
      } catch (e) {
        msg.className = 'msg';
        msg.textContent = 'Não foi possível enviar agora. Tente novamente em instantes.';
      }
    });
  });
} catch (e) { console.warn('form', e); }
