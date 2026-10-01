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
    function removeMask() {
      illus.style.clipPath = '';
      illus.style.maskImage = '';
      illus.style.webkitMaskImage = '';
    }
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
        { el: leftEl, side: 'left', color: 'var(--_zig---colors--green-500)' },
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
    let resizeTimer;
    window.addEventListener('resize', () => {
      const svg = document.querySelector('.win-svg-overlay');
      if (svg) {
        gsap.killTweensOf(svg);
        gsap.set(svg, { opacity: 0 });
      }
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (maskState === 'shown') applyMask();
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