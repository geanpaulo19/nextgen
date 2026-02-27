/* =============================================================
   GP Portfolio — Main JavaScript
   File: js/main.js
   ============================================================= */

/* Wait for the full page (including CDN scripts) to be ready */
window.addEventListener('load', function () {

  gsap.registerPlugin(ScrollTrigger);

  /* ── CURSOR ─────────────────────────────────────────────── */
  var cur  = document.getElementById('cur');
  var curf = document.getElementById('cur-f');
  var cx = 0, cy = 0, fx = 0, fy = 0;

  document.addEventListener('mousemove', function (e) {
    cx = e.clientX; cy = e.clientY;
    gsap.set(cur, { x: cx, y: cy });
  });

  (function cursorLoop() {
    fx += (cx - fx) * 0.1;
    fy += (cy - fy) * 0.1;
    gsap.set(curf, { x: fx, y: fy });
    requestAnimationFrame(cursorLoop);
  })();

  document.querySelectorAll('a, button, .chip, .svc-item, .t-card, .wrow').forEach(function (el) {
    el.addEventListener('mouseenter', function () { document.body.classList.add('c-hover'); });
    el.addEventListener('mouseleave', function () { document.body.classList.remove('c-hover'); });
  });

  /* ── SCROLL PROGRESS ────────────────────────────────────── */
  window.addEventListener('scroll', function () {
    var pct = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    document.getElementById('prog').style.width = pct + '%';
  });

  /* ── LOADER ─────────────────────────────────────────────── */
  var lw1    = document.getElementById('lw1');
  var lw2    = document.getElementById('lw2');
  var lbar   = document.getElementById('lbar');
  var lnum   = document.getElementById('lnum');
  var loader = document.getElementById('loader');

  /* Set words off-screen BEFORE the interval starts */
  gsap.set([lw1, lw2], { y: '110%' });

  var pct = 0;
  var loaderInterval = setInterval(function () {
    pct += Math.random() * 16 + 4;
    if (pct > 100) pct = 100;

    lbar.style.width  = Math.floor(pct) + '%';
    lnum.textContent  = Math.floor(pct) + '%';

    if (pct >= 100) {
      clearInterval(loaderInterval);

      /* Reveal the name */
      gsap.to([lw1, lw2], {
        y: '0%', duration: 0.85, stagger: 0.1,
        ease: 'power4.out', delay: 0.1
      });

      /* Fade out loader then kick off hero */
      gsap.to(loader, {
        opacity: 0, duration: 0.65, delay: 1.2,
        onComplete: function () {
          loader.style.display = 'none';
          initHero();
        }
      });
    }
  }, 65);

  /* ── HERO ENTRANCE ──────────────────────────────────────── */
  function initHero() {
    gsap.to(['#hw1', '#hw2'], {
      y: '0%', duration: 1.05, stagger: 0.1, ease: 'power4.out'
    });
    gsap.to('#eyebrow', {
      opacity: 1, y: 0, duration: 0.75, delay: 0.45, ease: 'power3.out'
    });
    gsap.to('#heroBot', {
      opacity: 1, y: 0, duration: 0.75, delay: 0.65, ease: 'power3.out'
    });
    gsap.to('#scrollHint', { opacity: 1, duration: 0.6, delay: 1.0 });

    gsap.to('.hero-bg', {
      yPercent: 25, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
    });
    gsap.to('.hero-gridlines', {
      yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
    });
  }

  /* ── FADE-UP ────────────────────────────────────────────── */
  document.querySelectorAll('.fade-up').forEach(function (el) {
    gsap.to(el, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 89%', once: true }
    });
  });

  /* ── WIRE UP WORK ROW LINKS from WORKS data ──────────────── */
  /* Reads js/works.js (must be loaded before main.js in index.html) */
  var rows = document.querySelectorAll('.wrow');
  rows.forEach(function (row, i) {
    if (WORKS[i]) {
      row.href = 'work.html?id=' + WORKS[i].id;
    }
  });

  /* ── WORK ROWS STAGGER ──────────────────────────────────── */
  gsap.fromTo('.wrow',
    { opacity: 0, x: -20 },
    {
      opacity: 1, x: 0, stagger: 0.08, duration: 0.65, ease: 'power3.out',
      scrollTrigger: { trigger: '.works-list', start: 'top 82%', once: true }
    }
  );

  /* ── HORIZONTAL SCROLL PIN ──────────────────────────────── */
  var track  = document.getElementById('htrack');
  var pfill  = document.getElementById('hpfill');
  var slides = document.querySelectorAll('.hslide');

  function getMaxScroll() {
    return (slides[0].offsetWidth + 24) * (slides.length - 1);
  }

  if (window.innerWidth > 768) {
    ScrollTrigger.create({
      trigger: '#hpin',
      start: 'top top',
      end: function () { return '+=' + (getMaxScroll() + window.innerWidth * 0.4); },
      pin: '#hsticky',
      scrub: 1,
      onUpdate: function (self) {
        gsap.set(track, { x: -getMaxScroll() * self.progress });
        pfill.style.width = (self.progress * 100) + '%';
      }
    });
  }

  /* ── NUMBER COUNTERS ────────────────────────────────────── */
  document.querySelectorAll('.num-big[data-target]').forEach(function (el) {
    var target = parseInt(el.getAttribute('data-target'));
    ScrollTrigger.create({
      trigger: el, start: 'top 88%', once: true,
      onEnter: function () {
        var v    = 0;
        var step = target / (1500 / 16);
        var iv   = setInterval(function () {
          v += step;
          if (v >= target) {
            el.textContent = target + '+';
            clearInterval(iv);
          } else {
            el.textContent = Math.floor(v) + '+';
          }
        }, 16);
      }
    });
  });

}); /* end window load */
