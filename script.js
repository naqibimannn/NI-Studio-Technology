(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var lang = 'ms';
  try {
    var l0 = localStorage.getItem('ni-lang');
    if (l0 === 'en' || l0 === 'ms') lang = l0;
    else if (new URLSearchParams(window.location.search).get('lang') === 'en') lang = 'en';
  } catch (e) {}

  var seoText = {
    ms: {
      title: "NI Studio Technology | Web Design & Development Malaysia",
      desc: "Studio pembangunan web bebas di Malaysia oleh Naqib Iman. Kepakaran dalam membina Landing Page, Website Korporat, Sistem Pengurusan Web, dan Web App PWA berprestasi tinggi."
    },
    en: {
      title: "NI Studio Technology | Web Design & Engineering Studio Malaysia",
      desc: "Independent web development and engineering studio in Malaysia by Naqib Iman. We build fast, high-converting Landing Pages, Corporate Sites, Web Systems, and PWAs."
    }
  };

  var P = [
    {
      n: 'MyWorkSpace – Tadika Al Faqeh Kidz',
      tag: 'Management System · PWA',
      k: 'pwa',
      t: 1,
      u: 'https://myworkspace.site/',
      ms: 'Platform pengurusan tadika berbentuk PWA untuk perancangan pembelajaran, pemantauan yuran, dan notifikasi pintar.',
      en: 'A kindergarten management PWA for learning planning, fee tracking, and push notifications optimized for mobile.'
    },
    {
      n: 'Lumina Mind & Wellness',
      tag: 'Healthcare · Mental Wellness',
      k: 'custom',
      t: 3,
      u: 'https://ni-studio.github.io/Lumina-Mind-Wellness/',
      ms: 'Platform kesihatan mental mesra pengguna dengan tempahan terapi dalam talian dan ujian saringan kendiri interaktif.',
      en: 'A user-friendly mental wellness platform featuring online therapy booking and an interactive self-check.'
    },
    {
      n: 'Halden & Reeve',
      tag: 'Corporate Website',
      k: 'corporate',
      t: 2,
      u: 'https://ni-studio.github.io/Halden-Reeve/',
      ms: 'Laman web korporat konsep untuk firma kejuruteraan struktur yang memaparkan profil kepimpinan dan senarai perkhidmatan.',
      en: 'A concept corporate website for a structural engineering firm showcasing services and leadership profiles.'
    },
    {
      n: 'Rehoboth Resources (M) Sdn. Bhd.',
      tag: 'Corporate · Manpower',
      k: 'corporate',
      t: 1,
      u: 'https://rrsbmanpower.com/',
      ms: 'Laman web korporat rasmi penyedia penyelesaian tenaga kerja untuk pengurusan staf dan saluran pengambilan pekerja.',
      en: 'An official corporate website providing workforce solutions, staffing services, and recruitment channels.'
    },
    {
      n: 'RSVP – Danial & Aisyah',
      tag: 'Wedding · Digital Invitation',
      k: 'landing',
      t: 2,
      u: 'https://ni-studio.github.io/RSVP/',
      ms: 'Kad jemputan perkahwinan digital interaktif dengan animasi sampul surat, kiraan detik majlis, dan borang RSVP.',
      en: 'An interactive digital wedding invitation featuring an animated envelope reveal, live countdown, and RSVP form.'
    },
    {
      n: 'Rimbun Properties',
      tag: 'Real Estate · Property Portal',
      k: 'system',
      t: 3,
      u: 'https://ni-studio.github.io/MyProperties/',
      ms: 'Portal hartanah dinamik di Malaysia yang dilengkapi penapis carian kawasan, panduan lokasi, dan borang pertanyaan.',
      en: 'A dynamic Malaysian property portal equipped with search filters, area guides, and buyer lead capture.'
    },
    {
      n: 'Mekar Bakeri',
      tag: 'Food & Beverage · Bakery',
      k: 'landing',
      t: 1,
      u: 'https://ni-studio.github.io/Mekar-Bakeri/',
      ms: 'Laman web jenama bakeri yang mengetengahkan menu digital, galeri produk segar berstatus Halal, dan sejarah jenama.',
      en: 'A bakery brand website highlighting a digital menu, fresh Halal-certified product gallery, and brand heritage.'
    },
    {
      n: 'Klinik Denai Sihat',
      tag: 'Healthcare · Clinic',
      k: 'corporate',
      t: 3,
      u: 'https://ni-studio.github.io/Klinik-Denai-Sihat/',
      ms: 'Laman web klinik profesional bertema zamrud dan emas dengan maklumat perkhidmatan serta tempahan pantas WhatsApp.',
      en: 'A professional emerald-and-gold clinic website offering service details and direct WhatsApp appointment booking.'
    },
    {
      n: 'Tadika Ceria Kasih',
      tag: 'Education · Kindergarten',
      k: 'custom',
      t: 2,
      u: 'https://ni-studio.github.io/Tadika-Ceria-Kasih/',
      ms: 'Laman web konsep pendidikan awal kanak-kanak yang mesra pengguna dengan sokongan dwibahasa serta mod cerah dan gelap.',
      en: 'A child-friendly kindergarten concept website featuring bilingual support and light and dark mode.'
    },
    {
      n: 'LANGKAH',
      tag: 'Fashion · E-commerce Concept',
      k: 'custom',
      t: 1,
      u: 'https://ni-studio.github.io/Langkah/',
      ms: 'Laman web konsep e-dagang minimalis untuk jenama kasut moden dengan sokongan tema cerah dan gelap.',
      en: 'A minimalist e-commerce concept website for a modern footwear brand with light and dark mode.'
    },
    {
      n: 'Teras Bina Sdn. Bhd.',
      tag: 'Corporate · Construction',
      k: 'corporate',
      t: 2,
      u: 'https://ni-studio.github.io/Teras-Bina-Sdn-Bhd/',
      ms: 'Laman web korporat konsep syarikat kejuruteraan awam dan pembinaan yang memaparkan portfolio projek serta testimoni.',
      en: 'A concept corporate website for a civil engineering and construction firm featuring project portfolios and testimonials.'
    },
    {
      n: 'WA Universiti',
      tag: 'Education · Higher Education',
      k: 'custom',
      t: 3,
      u: 'https://ni-studio.github.io/WA-Universiti/',
      ms: 'Laman web konsep institusi pengajian tinggi yang interaktif dengan slaid penuh beranimasi dan senarai program pengajian.',
      en: 'An interactive higher education concept website with an animated full-screen hero slider and academic programs.'
    }
  ];

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;'); }
  function card(p, i) {
    return '<article class="card proj" data-k="' + p.k + '" data-i="' + i + '">' +
      '<a href="' + esc(p.u) + '" target="_blank" rel="noopener noreferrer" class="thumb tone-' + p.t + '" aria-label="' + esc(p.n) + '">' +
      '<svg class="wf" viewBox="0 0 240 150" aria-hidden="true"><use href="#wf-' + p.k + '"/></svg></a>' +
      '<div class="proj-b">' +
      '<div class="proj-top"><h3>' + esc(p.n) + '</h3><span class="tag">' + esc(p.tag) + '</span></div>' +
      '<p data-en="' + esc(p.en) + '">' + esc(p.ms) + '</p>' +
      '<div class="proj-foot">' +
      '<a href="' + esc(p.u) + '" target="_blank" rel="noopener noreferrer" class="proj-link">' +
      '<span data-en="Visit Website">Lawati Laman</span>' +
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8"/></svg>' +
      '</a>' +
      '</div>' +
      '</div></article>';
  }

  var perSlide = 3;
  var totalSlides = Math.ceil(P.length / perSlide);
  var slidesHTML = '';
  for (var s = 0; s < totalSlides; s++) {
    var group = P.slice(s * perSlide, (s + 1) * perSlide);
    slidesHTML += '<div class="pf-slide" role="tabpanel" aria-label="Slaid ' + (s + 1) + '">' +
      group.map(function (p, idx) { return card(p, s * perSlide + idx); }).join('') +
      '</div>';
  }
  $('#pfTrack').innerHTML = slidesHTML;

  var pagesHTML = '';
  for (var pIdx = 0; pIdx < totalSlides; pIdx++) {
    pagesHTML += '<button class="page-btn" data-slide="' + pIdx + '" aria-current="' + (pIdx === 0 ? 'true' : 'false') + '" aria-label="Halaman ' + (pIdx + 1) + '">' + (pIdx + 1) + '</button>';
  }
  $('#pfPages').innerHTML = pagesHTML;

  var curSlide = 0;
  var pfTrack = $('#pfTrack');
  var prevBtn = $('#pfPrev');
  var nextBtn = $('#pfNext');
  var pageBtns = $$('.page-btn');

  function updateSlider(index) {
    curSlide = Math.max(0, Math.min(index, totalSlides - 1));
    pfTrack.style.transform = 'translate3d(-' + (curSlide * 100) + '%, 0, 0)';
    pageBtns.forEach(function (btn, i) {
      btn.setAttribute('aria-current', String(i === curSlide));
    });
    prevBtn.disabled = curSlide === 0;
    nextBtn.disabled = curSlide === totalSlides - 1;
  }

  pageBtns.forEach(function (btn) {
    btn.addEventListener('click', function () { updateSlider(parseInt(this.dataset.slide, 10)); });
  });
  prevBtn.addEventListener('click', function () { updateSlider(curSlide - 1); });
  nextBtn.addEventListener('click', function () { updateSlider(curSlide + 1); });

  var startX = 0, deltaX = 0, swiping = false;
  pfTrack.addEventListener('touchstart', function (e) {
    if (e.touches.length !== 1) return;
    startX = e.touches[0].clientX; deltaX = 0; swiping = true;
  }, { passive: true });
  pfTrack.addEventListener('touchmove', function (e) {
    if (!swiping) return;
    deltaX = e.touches[0].clientX - startX;
  }, { passive: true });
  pfTrack.addEventListener('touchend', function () {
    if (!swiping) return;
    swiping = false;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0 && curSlide < totalSlides - 1) updateSlider(curSlide + 1);
      else if (deltaX > 0 && curSlide > 0) updateSlider(curSlide - 1);
    }
  });
  updateSlider(0);

  $$('[data-en]').forEach(function (el) { el.dataset.ms = el.textContent.replace(/\s+/g, ' ').trim(); });
  function paint() {
    $$('[data-en]').forEach(function (el) { el.textContent = lang === 'en' ? el.dataset.en : el.dataset.ms; });
    $$('[data-lang]').forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.lang === lang)); });
    root.lang = lang;
    
    document.title = seoText[lang].title;
    var descEl = $('#pageDesc'); if (descEl) descEl.setAttribute('content', seoText[lang].desc);
    var ogT = $('#ogTitle'); if (ogT) ogT.setAttribute('content', seoText[lang].title);
    var ogD = $('#ogDesc'); if (ogD) ogD.setAttribute('content', seoText[lang].desc);
    var twT = $('#twTitle'); if (twT) twT.setAttribute('content', seoText[lang].title);
    var twD = $('#twDesc'); if (twD) twD.setAttribute('content', seoText[lang].desc);

    moveInd();
  }
  function setLang(l) {
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem('ni-lang', l); } catch (e) {}
    if (reduce) { paint(); return; }
    document.body.classList.add('swap');
    setTimeout(function () { paint(); document.body.classList.remove('swap'); }, 170);
  }
  $$('[data-lang]').forEach(function (b) { b.addEventListener('click', function () { setLang(b.dataset.lang); }); });

  $('#theme').addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('ni-theme', next); } catch (e) {}
    root.classList.add('tx');
    root.setAttribute('data-theme', next);
    setTimeout(function () { root.classList.remove('tx'); }, 700);
  });

  var nav = $('#nav'), links = $('#links'), ind = $('#ind');
  var ids = ['home', 'about', 'services', 'technology', 'portfolio', 'contact'];
  var current = 'home';
  function moveInd() {
    var on = $('.lnk.on', links);
    if (!on || getComputedStyle(ind).display === 'none') return;
    ind.style.width = on.offsetWidth + 'px';
    ind.style.transform = 'translateX(' + on.offsetLeft + 'px)';
    if (!ind.classList.contains('ready')) requestAnimationFrame(function () { ind.classList.add('ready'); });
  }
  function setActive(id) {
    if (id === current) return;
    current = id;
    $$('.lnk', links).forEach(function (b) { b.classList.toggle('on', b.dataset.go === id); });
    moveInd();
  }
  function spy() {
    if (!$('#homeview') || $('#homeview').hidden) return;
    var y = window.innerHeight * 0.4, found = 'home';
    ids.forEach(function (id) { var el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= y) found = id; });
    setActive(found);
  }
  function closeMenu() { nav.classList.remove('open'); $('#menu').setAttribute('aria-expanded', 'false'); }
  $('#menu').addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    this.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('click', function (e) { if (!nav.contains(e.target)) closeMenu(); });
  window.addEventListener('resize', function () { moveInd(); closeMenu(); });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(moveInd);

  function goto(id) {
    closeMenu();
    if (id === 'home') window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    else { var el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' }); }
  }
  $$('[data-go]').forEach(function (b) {
    b.addEventListener('click', function (e) {
      e.preventDefault();
      goto(b.dataset.go);
    });
  });

  var toast = $('#toast'), tt;
  function say(msg) { toast.textContent = msg; toast.classList.add('show'); clearTimeout(tt); tt = setTimeout(function () { toast.classList.remove('show'); }, 1800); }
  function fallbackCopy(text) {
    var ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false; try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta); return ok;
  }
  $$('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.dataset.copy;
      var done = function (ok) { say(ok ? (lang === 'en' ? 'Copied' : 'Disalin') : (lang === 'en' ? 'Select the text to copy it' : 'Pilih teks untuk menyalin')); };
      if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(function () { done(true); }, function () { done(fallbackCopy(text)); });
      else done(fallbackCopy(text));
    });
  });

  var hero = $('#home'), heroIn = $('.hero-in'), ticking = false, lastP = -1;
  function onScroll() {
    if (ticking) return; ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var h = hero.offsetHeight || 1;
      var p = Math.min(Math.max(window.scrollY / h, 0), 1);
      if (p !== lastP) {
        lastP = p;
        hero.style.transform = 'scale(' + (1 - p * .045).toFixed(4) + ')';
        heroIn.style.opacity = String(Math.max(0, 1 - p * 1.3).toFixed(3));
        heroIn.style.transform = 'translate3d(0,' + (-p * 42).toFixed(1) + 'px,0)';
      }
      nav.classList.toggle('compact', window.scrollY > 60);
      spy();
      checkReveal();
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  [['.kicker', 'left'], ['.photo', 'right'], ['.pillars li', 'zoom'], ['.svc', 'zoom'],
   ['.pf-viewport', 'zoom'], ['.pf-controls', 'fade'], ['.contact', 'zoom']].forEach(function (m) {
    $$(m[0]).forEach(function (el) { el.dataset.rv = m[1]; });
  });
  $$('.about-l .rv').forEach(function (el, i) { el.dataset.i = i; });
  $$('.svc').forEach(function (el, i) { el.dataset.i = [0, 1, 0, 1, 2][i]; });
  function reveal(el) {
    var d = (parseInt(el.dataset.i, 10) || 0) * 90;
    el.style.transitionDelay = d + 'ms';
    el.classList.remove('pre');
    setTimeout(function () { el.classList.add('done'); el.style.transitionDelay = ''; }, 1000 + d);
  }
  function checkReveal() {
    var vh = window.innerHeight;
    $$('.rv.pre').forEach(function (el) { if (el.getBoundingClientRect().top < vh * 0.9) reveal(el); });
  }
  if (!reduce) {
    $$('.rv').forEach(function (el) { el.classList.add(el.getBoundingClientRect().top > window.innerHeight * 0.9 ? 'pre' : 'done'); });
    window.addEventListener('resize', checkReveal);
    window.addEventListener('load', checkReveal);
    [300, 900, 2000].forEach(function (t) { setTimeout(checkReveal, t); });
  } else { $$('.rv').forEach(function (el) { el.classList.add('done'); }); }

  (function () {
    var cv = $('#sky'), ctx = cv.getContext('2d');
    var w = 0, h = 0, stars = [], mx = 0, my = 0, tx = 0, ty = 0, streak = null, nextStreak = 3500, raf = 0, visible = true;
    function size() {
      var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = r.width; h = r.height; if (!w || !h) return;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr); ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.round(Math.min(230, Math.max(100, w * h / 6000)));
      stars = [];
      for (var i = 0; i < n; i++) stars.push({ x: Math.random(), y: Math.random(), r: .25 + Math.pow(Math.random(), 3) * 1.5, a: .35 + Math.random() * .65, s: .4 + Math.random() * 1.6, p: Math.random() * 6.28, d: .15 + Math.random() * .85, c: Math.random() < .18 });
      if (reduce) frame(0);
    }
    function frame(t) {
      ctx.clearRect(0, 0, w, h);
      tx += (mx - tx) * .05; ty += (my - ty) * .05;
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i];
        var x = (((s.x * w + tx * s.d * 22 + t * .004 * s.d) % w) + w) % w;
        var y = s.y * h + ty * s.d * 14;
        var a = s.a * (.62 + .38 * Math.sin(t * .001 * s.s + s.p));
        ctx.fillStyle = s.c ? 'rgba(190,215,255,' + a + ')' : 'rgba(255,255,255,' + a + ')';
        ctx.beginPath(); ctx.arc(x, y, s.r, 0, 6.2832); ctx.fill();
        if (s.r > 1.35) { ctx.fillStyle = 'rgba(160,200,255,' + (a * .16) + ')'; ctx.beginPath(); ctx.arc(x, y, s.r * 3.2, 0, 6.2832); ctx.fill(); }
      }
      if (!reduce && !streak && t > nextStreak) { streak = { x: Math.random() * w * .7, y: Math.random() * h * .32, vx: 6 + Math.random() * 3, vy: 2.4 + Math.random() * 1.4, life: 0 }; nextStreak = t + 5200 + Math.random() * 6500; }
      if (streak) {
        streak.x += streak.vx; streak.y += streak.vy; streak.life++;
        var al = Math.max(0, 1 - streak.life / 55), ex = streak.x - streak.vx * 10, ey = streak.y - streak.vy * 10;
        var g = ctx.createLinearGradient(streak.x, streak.y, ex, ey);
        g.addColorStop(0, 'rgba(255,255,255,' + al + ')'); g.addColorStop(1, 'rgba(255,255,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1.4; ctx.beginPath(); ctx.moveTo(streak.x, streak.y); ctx.lineTo(ex, ey); ctx.stroke();
        if (streak.life > 55) streak = null;
      }
    }
    var last = 0;
    function loop(t) { if (!visible || document.hidden) { raf = 0; return; } if (t - last > 28) { last = t; frame(t); } raf = requestAnimationFrame(loop); }
    function start() { if (!reduce && !raf) raf = requestAnimationFrame(loop); }
    size();
    if ('ResizeObserver' in window) new ResizeObserver(size).observe(cv); else window.addEventListener('resize', size);
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; if (visible) start(); }).observe(cv);
    document.addEventListener('visibilitychange', start);
    var spot = $('.spot');
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      mx = (e.clientX - r.left) / r.width * 2 - 1; my = (e.clientY - r.top) / r.height * 2 - 1;
      spot.style.transform = 'translate3d(' + (e.clientX - r.left) + 'px,' + (e.clientY - r.top) + 'px,0)';
      hero.classList.add('hov');
    });
    hero.addEventListener('pointerleave', function () { hero.classList.remove('hov'); });
    start();
  })();

  document.addEventListener('pointermove', function (e) {
    var t = e.target.closest && e.target.closest('.thumb');
    if (!t) return;
    var r = t.getBoundingClientRect();
    t.style.setProperty('--mx', (e.clientX - r.left) + 'px'); t.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }, { passive: true });
  $$('.hero .btn, .contact .btn').forEach(function (b) {
    b.addEventListener('pointermove', function (e) {
      var r = b.getBoundingClientRect();
      b.style.setProperty('--tx', ((e.clientX - r.left - r.width / 2) * .18).toFixed(1) + 'px');
      b.style.setProperty('--ty', ((e.clientY - r.top - r.height / 2) * .28).toFixed(1) + 'px');
    });
    b.addEventListener('pointerleave', function () { b.style.setProperty('--tx', '0px'); b.style.setProperty('--ty', '0px'); });
  });

  if (lang === 'en') paint(); else root.lang = 'ms';
  moveInd();
  spy();
  onScroll();
  checkReveal();
})();