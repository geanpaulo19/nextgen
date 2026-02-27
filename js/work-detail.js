/* =============================================================
   GP Portfolio — Work Detail Page Renderer
   File: js/work-detail.js
   ============================================================= */

window.addEventListener('load', function () {

  /* Read ?id=xxx from the URL */
  var params  = new URLSearchParams(window.location.search);
  var id      = params.get('id');
  var project = null;

  /* Find the matching project in WORKS */
  for (var i = 0; i < WORKS.length; i++) {
    if (WORKS[i].id === id) { project = WORKS[i]; break; }
  }

  /* If not found, redirect back to index */
  if (!project) { window.location.href = 'index.html'; return; }

  /* ── Populate all fields ── */
  document.title = project.title + ' — Gean Paulo';

  /* Hero bg */
  var hero = document.getElementById('wd-hero');
  if (hero) hero.style.background = project.bg;

  /* Accent color for this project */
  document.documentElement.style.setProperty('--proj-acc', project.color);

  /* Text fields */
  setText('wd-num',     project.num);
  setText('wd-title',   project.title);
  setText('wd-year',    project.year);
  setText('wd-summary', project.summary);
  setText('wd-role',    project.role);

  /* Tags row */
  var tagsEl = document.getElementById('wd-tags');
  if (tagsEl && project.tags) {
    tagsEl.innerHTML = project.tags.map(function (t) {
      return '<span class="wd-tag">' + t + '</span>';
    }).join('');
  }

  /* Tech stack */
  var stackEl = document.getElementById('wd-stack');
  if (stackEl && project.stack) {
    stackEl.innerHTML = project.stack.map(function (s) {
      return '<span class="wd-chip">' + s + '</span>';
    }).join('');
  }

  /* Highlights list */
  var hlEl = document.getElementById('wd-highlights');
  if (hlEl && project.highlights) {
    hlEl.innerHTML = project.highlights.map(function (h) {
      return '<li class="wd-hl-item"><span class="wd-hl-dot"></span>' + h + '</li>';
    }).join('');
  }

  /* Live URL button */
  var urlBtn = document.getElementById('wd-url-btn');
  if (urlBtn) {
    if (project.url) {
      urlBtn.href        = project.url;
      urlBtn.textContent = 'Visit Live Site ↗';
    } else {
      urlBtn.textContent = 'Coming Soon';
      urlBtn.style.opacity = '0.4';
      urlBtn.style.pointerEvents = 'none';
    }
  }

  /* Cover image */
  var coverEl = document.getElementById('wd-cover');
  if (coverEl) {
    if (project.cover) {
      coverEl.style.backgroundImage = 'url(' + project.cover + ')';
      coverEl.style.backgroundSize  = 'cover';
      coverEl.style.backgroundPosition = 'center';
    } else {
      /* Fallback: show project bg gradient as cover */
      coverEl.style.background = project.bg;
    }
  }

  /* Prev / Next navigation */
  var currentIndex = WORKS.findIndex(function (w) { return w.id === id; });
  var prevBtn = document.getElementById('wd-prev');
  var nextBtn = document.getElementById('wd-next');

  if (prevBtn) {
    var prev = WORKS[currentIndex - 1];
    if (prev) {
      prevBtn.href        = 'work.html?id=' + prev.id;
      prevBtn.querySelector('.wd-nav-title').textContent = prev.title;
    } else {
      prevBtn.style.visibility = 'hidden';
    }
  }
  if (nextBtn) {
    var next = WORKS[currentIndex + 1];
    if (next) {
      nextBtn.href        = 'work.html?id=' + next.id;
      nextBtn.querySelector('.wd-nav-title').textContent = next.title;
    } else {
      nextBtn.style.visibility = 'hidden';
    }
  }

  /* ── GSAP entrance animations ── */
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('#wd-num',   { y: 30, opacity: 0, duration: 0.6, delay: 0.1, ease: 'power3.out' });
    gsap.from('#wd-title', { y: 60, opacity: 0, duration: 0.9, delay: 0.2, ease: 'power4.out' });
    gsap.from('#wd-tags',  { y: 20, opacity: 0, duration: 0.6, delay: 0.5, ease: 'power3.out' });
    gsap.from('.wd-meta-block', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1, delay: 0.4, ease: 'power3.out' });
    gsap.from('#wd-cover', { scale: 1.05, opacity: 0, duration: 1.1, delay: 0.3, ease: 'power3.out' });
    document.querySelectorAll('.wd-fade').forEach(function (el) {
      gsap.from(el, {
        y: 32, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      });
    });
  }

  /* ── Helper ── */
  function setText(id, value) {
    var el = document.getElementById(id);
    if (el && value) el.textContent = value;
  }

  /* Polyfill findIndex for older browsers */
  if (!Array.prototype.findIndex) {
    Array.prototype.findIndex = function (fn) {
      for (var i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) return i;
      }
      return -1;
    };
  }

});
