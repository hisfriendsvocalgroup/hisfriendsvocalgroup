/* ==========================================================
   His Friends Vocal Group — site behaviour
   ========================================================== */
(function () {
  "use strict";

  const LANGS = ["en", "de", "fr", "it"];
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const page = document.body.dataset.page || "home";

  /* ---------- Icons (Lucide-style, inline SVG) ---------- */
  const I = {
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    chev: '<path d="m6 9 6 6 6-6"/>',
    left: '<path d="m15 18-6-6 6-6"/>',
    right: '<path d="m9 18 6-6-6-6"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    ticket: '<path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2M13 17v2M13 11v2"/>',
    image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/>',
    music: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    heart: '<path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z"/>',
    hands: '<path d="M12 3v4M8 7l4 4 4-4"/><path d="M5 21v-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6"/>',
    share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4"/>',
    church: '<path d="M12 2v4M10 4h4M18 22V10l-6-4-6 4v12"/><path d="M2 22h20M10 22v-4a2 2 0 0 1 4 0v4"/>',
    qr: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3"/>',
    rotate: '<path d="M21 12a9 9 0 1 1-3-6.7L21 8"/><path d="M21 3v5h-5"/>',
    play: '<polygon points="6 3 20 12 6 21 6 3"/>'
  };
  const icon = (n, cls = "") => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${I[n]}</svg>`;
  const brand = {
    spotify: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm5.5 17.3a.75.75 0 0 1-1 .25c-2.85-1.74-6.45-2.14-10.68-1.17a.75.75 0 1 1-.33-1.46c4.63-1.06 8.6-.6 11.77 1.34.36.22.47.68.25 1.04Zm1.47-3.27a.94.94 0 0 1-1.29.31c-3.26-2-8.23-2.58-12.09-1.41a.94.94 0 1 1-.54-1.8c4.4-1.33 9.88-.68 13.6 1.6.44.27.58.85.32 1.3Zm.13-3.4C15.18 8.3 8.73 8.08 5 9.21a1.12 1.12 0 1 1-.65-2.15c4.28-1.3 11.4-1.05 15.9 1.62a1.12 1.12 0 1 1-1.15 1.93Z"/></svg>',
    apple: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path fill-rule="evenodd" d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm4.6 5.62-6.9 1.42a.75.75 0 0 0-.6.73v7.1a2.3 2.3 0 1 0 1.5 2.15v-6.4l5.4-1.12v3.85a2.3 2.3 0 1 0 1.5 2.15V6.35a.75.75 0 0 0-.9-.73Z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm0 19.2a7.2 7.2 0 1 1 0-14.4 7.2 7.2 0 0 1 0 14.4Zm0-13.2a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm-2.1 9.3V8.7L15.6 12l-5.7 3.3Z"/></svg>'
  };

  /* ---------- Flags (inline SVG, render on every OS) ---------- */
  const FLAGS = {
    en: '<svg class="flag" viewBox="0 0 60 40" aria-hidden="true"><clipPath id="uk"><rect width="60" height="40"/></clipPath><g clip-path="url(#uk)"><rect width="60" height="40" fill="#012169"/><path d="M0 0l60 40M60 0L0 40" stroke="#fff" stroke-width="8"/><path d="M0 0l60 40M60 0L0 40" stroke="#C8102E" stroke-width="3"/><path d="M30 0v40M0 20h60" stroke="#fff" stroke-width="12"/><path d="M30 0v40M0 20h60" stroke="#C8102E" stroke-width="7"/></g></svg>',
    de: '<svg class="flag" viewBox="0 0 5 3" aria-hidden="true"><rect width="5" height="1" fill="#000"/><rect y="1" width="5" height="1" fill="#DD0000"/><rect y="2" width="5" height="1" fill="#FFCE00"/></svg>',
    fr: '<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#002654"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE1126"/></svg>',
    it: '<svg class="flag" viewBox="0 0 3 2" aria-hidden="true"><rect width="1" height="2" fill="#009246"/><rect x="1" width="1" height="2" fill="#fff"/><rect x="2" width="1" height="2" fill="#CE2B37"/></svg>'
  };

  const LOGO = (tag = "a", href = "index.html") =>
    `<${tag} class="logo" ${tag === "a" ? `href="${href}" aria-label="His Friends Vocal Group – Home"` : 'aria-hidden="true"'}>
      <span class="l1">H</span><span class="bar"></span><span class="r1">S</span>
      <span class="l2">fr</span><span class="r2">ends</span>
      <span class="l3">vocal</span><span class="r3">group</span>
    </${tag}>`;

  /* ---------- Language ---------- */
  function getLang() {
    let l = null;
    try { l = localStorage.getItem("hf-lang"); } catch (e) {}
    if (LANGS.includes(l)) return l;
    const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    return LANGS.includes(nav) ? nav : "en";
  }
  let lang = getLang();
  const t = (k) => (I18N[lang] && I18N[lang][k]) || I18N.en[k] || k;

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", t(el.dataset.i18nAria)));
    document.querySelectorAll("[data-i18n-title]").forEach((el) => el.setAttribute("title", t(el.dataset.i18nTitle)));
    const btn = document.querySelector(".lang-btn");
    if (btn) btn.innerHTML = `${FLAGS[lang]}<span class="lang-code">${lang.toUpperCase()}</span>${icon("chev", "chev")}<span class="sr-only">${t("nav.lang")}</span>`;
    document.querySelectorAll(".lang-menu button").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.lang === lang)));
    renderConcerts();
  }
  function setLang(l) {
    lang = l;
    try { localStorage.setItem("hf-lang", l); } catch (e) {}
    applyLang();
  }

  /* ---------- Header & footer ---------- */
  const NAV = [
    ["home", "index.html"], ["music", "music.html"], ["news", "news.html"],
    ["gallery", "gallery.html"], ["support", "support.html"], ["contact", "contact.html"]
  ];
  function buildChrome() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="container header-inner">
        ${LOGO()}
        <nav class="main-nav" id="main-nav" aria-label="Main">
          <ul>${NAV.map(([k, h]) => `<li><a href="${h}" ${k === page ? 'aria-current="page"' : ""} data-i18n="nav.${k}"></a></li>`).join("")}</ul>
        </nav>
        <div class="lang">
          <button class="lang-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-controls="lang-menu"></button>
          <ul class="lang-menu" id="lang-menu" role="menu">
            ${LANGS.map((l) => `<li role="none"><button type="button" role="menuitemradio" data-lang="${l}" lang="${l}">${FLAGS[l]}<span>${I18N[l]["lang.name"]}</span><span class="code">${l.toUpperCase()}</span></button></li>`).join("")}
          </ul>
        </div>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav" data-i18n-aria="nav.menu">${icon("menu")}</button>
      </div>`;
    document.body.prepend(header);
    const skip = document.createElement("a");
    skip.className = "skip"; skip.href = "#main"; skip.textContent = "Skip to content";
    document.body.prepend(skip);

    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>${LOGO()}<p data-i18n="footer.tag"></p>
            <p><a href="mailto:${SITE.email}">${icon("mail")} ${SITE.email}</a><br>
               <a href="tel:${SITE.phone.replace(/\s/g, "")}">${icon("phone")} ${SITE.phone}</a></p></div>
          <div><h4 data-i18n="footer.pages"></h4>
            <ul>${NAV.map(([k, h]) => `<li><a href="${h}" data-i18n="nav.${k}"></a></li>`).join("")}</ul></div>
          <div><h4 data-i18n="footer.follow"></h4>
            <ul>
              <li><a href="${SITE.spotify}" target="_blank" rel="noopener">${brand.spotify} Spotify</a></li>
              <li><a href="${SITE.appleMusic}" target="_blank" rel="noopener">${brand.apple} Apple Music</a></li>
              <li><a href="${SITE.youtube}" target="_blank" rel="noopener">${brand.youtube} YouTube Music</a></li>
            </ul></div>
        </div>
        <div class="footer-bottom"><span>© ${new Date().getFullYear()} <span data-i18n="footer.rights"></span></span><span>Basel · Switzerland</span></div>
      </div>`;
    document.body.append(footer);

    // language menu
    const lb = header.querySelector(".lang-btn"), lm = header.querySelector(".lang-menu");
    const closeLang = () => { lm.classList.remove("open"); lb.setAttribute("aria-expanded", "false"); };
    lb.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !lm.classList.contains("open");
      lm.classList.toggle("open", open); lb.setAttribute("aria-expanded", String(open));
      if (open) (lm.querySelector('[aria-checked="true"]') || lm.querySelector("button")).focus();
    });
    lm.addEventListener("click", (e) => {
      const b = e.target.closest("button[data-lang]"); if (!b) return;
      setLang(b.dataset.lang); closeLang(); lb.focus();
    });
    lm.addEventListener("keydown", (e) => {
      const items = [...lm.querySelectorAll("button")], i = items.indexOf(document.activeElement);
      if (e.key === "ArrowDown") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
      if (e.key === "ArrowUp") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
    });
    document.addEventListener("click", closeLang);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeLang(); toggleNav(false); } });

    // mobile nav
    const nt = header.querySelector(".nav-toggle"), nav = header.querySelector(".main-nav");
    function toggleNav(force) {
      const open = typeof force === "boolean" ? force : !nav.classList.contains("open");
      nav.classList.toggle("open", open); nt.setAttribute("aria-expanded", String(open));
      nt.innerHTML = icon(open ? "close" : "menu");
      header.classList.toggle("solid", open || window.scrollY > 40);
    }
    nt.addEventListener("click", () => toggleNav());

    // solid header on scroll
    const onScroll = () => header.classList.toggle("solid", window.scrollY > 40 || nav.classList.contains("open"));
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    els.forEach((e) => io.observe(e));
  }

  /* ---------- 3D CD ---------- */
  function initCD() {
    const stage = document.querySelector(".cd-stage"); if (!stage) return;
    const cd = stage.querySelector(".cd");
    const back = stage.querySelector(".case-back ol");
    if (back) back.innerHTML = TRACKS.map((tr) => `<li>${tr.t}</li>`).join("");
    setTimeout(() => cd.classList.add("open"), reduceMotion ? 0 : 1100);

    if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
      const hero = document.querySelector(".hero") || stage;
      hero.addEventListener("pointermove", (e) => {
        const r = stage.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width / 2)) / r.width;
        const y = (e.clientY - (r.top + r.height / 2)) / r.height;
        stage.style.setProperty("--ry", `${-18 + x * 22}deg`);
        stage.style.setProperty("--rx", `${6 - y * 14}deg`);
      });
      hero.addEventListener("pointerleave", () => { stage.style.setProperty("--ry", "-18deg"); stage.style.setProperty("--rx", "6deg"); });
    }
    const flip = document.querySelector("[data-flip]");
    if (flip) flip.addEventListener("click", () => {
      const f = cd.classList.toggle("flipped");
      flip.setAttribute("aria-pressed", String(f));
    });
  }

  /* ---------- Self-opening CD (digipak unfolds by itself) ---------- */
  function initUnfold() {
    const stage = document.querySelector(".hero-cd .dp-stage"); if (!stage) return;
    const dp = stage.querySelector(".dp"), left = stage.querySelector(".dp-left"), right = stage.querySelector(".dp-right");
    const disc = stage.querySelector(".dp-disc"), spin = stage.querySelector(".dp-disc-spin");
    const shadow = stage.querySelector(".dp-shadow");
    const clamp = (v) => Math.max(0, Math.min(1, v));
    const ease = (t) => t * t * (3 - 2 * t);
    const seg = (p, a, b) => ease(clamp((p - a) / (b - a)));
    const lerp = (a, b, t) => a + (b - a) * t;
    let tiltX = 0, tiltY = 0, curX = 0, curY = 0, spinDeg = 0;

    function render(p) {
      const W = dp.offsetWidth, H = dp.offsetHeight;
      const A = seg(p, 0.0, 0.2);    // turn from the back cover to the front
      const B = seg(p, 0.26, 0.5);   // front cover opens
      const C = seg(p, 0.54, 0.76);  // flap opens
      const D = seg(p, 0.8, 1.0);    // disc lifts out
      const ry = lerp(lerp(180, -18, A), 0, C) + 6 * D + curX;
      const rx = lerp(10, 5, C) + 12 * D + curY;
      const scale = lerp(lerp(1.7, 1.25, B), 1, C);
      const tx = (W / 2) * B * (1 - C);
      dp.style.transform = `translateX(${tx}px) scale(${scale}) rotateX(${rx}deg) rotateY(${ry}deg)`;
      left.style.transform = `translateZ(3px) rotateY(${180 * (1 - B)}deg)`;
      right.style.transform = `translateZ(1.5px) rotateY(${-180 * (1 - C)}deg)`;
      disc.style.transform = `translateZ(${1 + D * W * 0.32}px) translateY(${-D * H * 0.34}px) scale(${1 - D * 0.08})`;
      spin.style.transform = `rotate(${spinDeg}deg)`;
      shadow.style.transform = `translateX(${tx}px) scaleX(${lerp(lerp(1.5, 1.9, B), 2.9, C)})`;
    }

    if (reduceMotion) { render(1); return; }

    // Timeline (seconds): show back → turn → open → hold open → close to front → hold → open again …
    const DELAY = 0.6, FIRST = 6.5, HOLD_OPEN = 1.5, CLOSE = 3, HOLD_CLOSED = 2.5, REOPEN = 4.5;
    const FRONT = 0.24; // progress where the closed CD shows its front cover
    function progressAt(t) {
      t -= DELAY;
      if (t <= 0) return 0;
      if (t < FIRST) return t / FIRST;
      t -= FIRST;
      const cycle = HOLD_OPEN + CLOSE + HOLD_CLOSED + REOPEN;
      t %= cycle;
      if (t < HOLD_OPEN) return 1;
      t -= HOLD_OPEN;
      if (t < CLOSE) return lerp(1, FRONT, t / CLOSE);
      t -= CLOSE;
      if (t < HOLD_CLOSED) return FRONT;
      t -= HOLD_CLOSED;
      return lerp(FRONT, 1, t / REOPEN);
    }

    // gentle tilt following the mouse
    if (window.matchMedia("(hover: hover)").matches) {
      const hero = document.querySelector(".hero");
      hero.addEventListener("pointermove", (e) => {
        tiltX = (e.clientX / window.innerWidth - 0.5) * 14;
        tiltY = -(e.clientY / window.innerHeight - 0.5) * 10;
      });
      hero.addEventListener("pointerleave", () => { tiltX = 0; tiltY = 0; });
    }

    let start = null, last = null, visible = true;
    new IntersectionObserver(([en]) => { visible = en.isIntersecting; }).observe(stage);
    function frame(now) {
      if (start === null) { start = now; last = now; }
      const dt = (now - last) / 1000; last = now;
      if (visible) {
        curX += (tiltX - curX) * 0.06; curY += (tiltY - curY) * 0.06;
        spinDeg = (spinDeg + dt * 70) % 360;
        render(progressAt((now - start) / 1000));
      }
      requestAnimationFrame(frame);
    }
    render(0);
    requestAnimationFrame(frame);
  }

  /* ---------- Floating notes in hero ---------- */
  function initNotes() {
    const box = document.querySelector(".notes"); if (!box || reduceMotion) return;
    const glyphs = ["♪", "♫", "♩", "♬"];
    for (let i = 0; i < 14; i++) {
      const s = document.createElement("span");
      s.textContent = glyphs[i % glyphs.length];
      s.style.left = Math.random() * 100 + "%";
      s.style.fontSize = 14 + Math.random() * 22 + "px";
      s.style.animationDuration = 14 + Math.random() * 16 + "s";
      s.style.animationDelay = -Math.random() * 20 + "s";
      box.appendChild(s);
    }
  }

  /* ---------- Tracklists ---------- */
  function renderTracks() {
    document.querySelectorAll("[data-tracklist]").forEach((ol) => {
      ol.innerHTML = TRACKS.map((tr) => `<li><span class="tt">${tr.t}</span><span class="tc">${tr.c}</span></li>`).join("");
    });
    document.querySelectorAll("[data-members]").forEach((ul) => { ul.innerHTML = MEMBERS.map((m) => `<li>${m}</li>`).join(""); });
  }

  /* ---------- Concerts ---------- */
  const mapsUrl = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const locale = () => ({ en: "en-GB", de: "de-CH", fr: "fr-CH", it: "it-CH" }[lang]);
  function upcoming() {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    return (window.CONCERTS || [])
      .filter((c) => new Date(c.date + "T23:59:59") >= today)
      .sort((a, b) => a.date.localeCompare(b.date));
  }
  function concertCard(c) {
    const d = new Date(c.date + "T12:00:00");
    const loc = locale();
    const pick = (o) => (o && (o[lang] || o.en)) || "";
    const weekday = d.toLocaleDateString(loc, { weekday: "long" });
    return `
      <article class="concert ${c.image ? "has-img" : ""} reveal in">
        <div class="concert-date" aria-hidden="true">
          <span class="d">${d.getDate()}</span>
          <span class="m">${d.toLocaleDateString(loc, { month: "short" }).replace(".", "")}</span>
          <span class="y">${d.getFullYear()}</span>
        </div>
        ${c.image ? `<a href="${c.image}" target="_blank" rel="noopener" class="poster-link"><img src="${c.image}" alt="${pick(c.title)} – poster" loading="lazy" onerror="this.closest('.concert').classList.remove('has-img'); this.parentNode.remove();"></a>` : ""}
        <div class="concert-info">
          <h3>${pick(c.title)}</h3>
          <div class="meta">
            <span>${icon("calendar")}<time datetime="${c.date}T${c.time || "00:00"}">${weekday}, ${d.toLocaleDateString(loc, { day: "numeric", month: "long", year: "numeric" })}${c.time ? " · " + c.time : ""}</time></span>
          </div>
          <div class="meta">
            <span>${icon("pin")}${c.venue}${c.address && !c.address.startsWith(c.venue) ? " · " + c.address.replace(/, (Switzerland|Germany)$/, "") : ""}</span>
          </div>
          ${c.entry ? `<div class="meta"><span>${icon("ticket")}${pick(c.entry)}</span></div>` : ""}
          ${c.text ? `<p>${pick(c.text)}</p>` : ""}
        </div>
        <div class="actions">
          <a class="btn btn-outline" href="${mapsUrl(c.address || c.venue)}" target="_blank" rel="noopener">${icon("pin")}<span>${t("news.map")}</span></a>
          <a class="btn btn-dark" href="${calendarUrl(c)}" target="_blank" rel="noopener">${icon("calendar")}<span>${t("news.cal")}</span></a>
        </div>
      </article>`;
  }
  function calendarUrl(c) {
    const pick = (o) => (o && (o[lang] || o.en)) || "";
    const [y, mo, d] = c.date.split("-").map(Number);
    const [h, m] = (c.time || "18:00").split(":").map(Number);
    const start = new Date(Date.UTC(y, mo - 1, d, h, m));
    const end = new Date(start.getTime() + (c.duration || 90) * 60000);
    const fmt = (x) => x.toISOString().slice(0, 19).replace(/[-:]/g, "");
    const p = new URLSearchParams({
      action: "TEMPLATE",
      text: pick(c.title),
      dates: fmt(start) + "/" + fmt(end),
      ctz: c.timezone || "Europe/Zurich",
      location: c.address || c.venue,
      details: [pick(c.entry), "His Friends Vocal Group"].filter(Boolean).join("\n")
    });
    return "https://calendar.google.com/calendar/render?" + p.toString();
  }
  function renderConcerts() {
    document.querySelectorAll("[data-concerts]").forEach((box) => {
      const limit = parseInt(box.dataset.limit || "99", 10);
      const list = upcoming().slice(0, limit);
      box.innerHTML = list.length
        ? list.map(concertCard).join("")
        : `<div class="empty-state">
             <div class="icon-circle">${icon("calendar")}</div>
             <h3>${t("news.empty.title")}</h3>
             <p class="lead" style="margin:0 auto 20px">${t("news.empty.p")}</p>
             <a class="btn btn-dark" href="contact.html">${t("cta.btn")}</a>
           </div>`;
    });
  }

  /* ---------- Gallery + lightbox ---------- */
  function initGallery() {
    const g = document.querySelector("[data-gallery]"); if (!g) return;
    const items = window.GALLERY || [];
    const label = (it) => it.name ? `${it.name} – ${t(it.part)}${it.note ? " · " + t(it.note) : ""}` : t(it.cap);
    const capHTML = (it) => it.name
      ? `<span class="gallery-cap"><span class="gallery-cap__name">${it.name}</span><span class="gallery-cap__part" data-i18n="${it.part}"></span>${it.note ? `<span class="gallery-cap__note" data-i18n="${it.note}"></span>` : ""}</span>`
      : `<span class="gallery-cap"><span class="gallery-cap__name" data-i18n="${it.cap}"></span></span>`;
    const tile = (it, i) =>
      `<button class="gallery-item${it.wide ? " gallery-item--wide" : ""} reveal" type="button" data-i="${i}"><img src="${it.src}" alt="" loading="lazy">${capHTML(it)}</button>`;
    // Keep the photo order: each run of photos with the same "set" becomes its own row block.
    const blocks = [];
    items.forEach((it, i) => {
      const set = it.set || "moments", last = blocks[blocks.length - 1];
      if (last && last.set === set) last.html += tile(it, i); else blocks.push({ set, html: tile(it, i) });
    });
    g.innerHTML = blocks.map((b) => `<div class="gallery-row gallery-row--${b.set}">${b.html}</div>`).join("");

    const dlg = document.querySelector(".lightbox");
    const img = dlg.querySelector("img"), cap = dlg.querySelector(".lb-caption");
    let idx = 0;
    const show = (i) => { idx = (i + items.length) % items.length; img.src = items[idx].src; img.alt = label(items[idx]); cap.textContent = label(items[idx]); };
    g.addEventListener("click", (e) => {
      const b = e.target.closest(".gallery-item"); if (!b) return;
      show(+b.dataset.i); dlg.showModal();
    });
    dlg.querySelector(".lb-close").addEventListener("click", () => dlg.close());
    dlg.querySelector(".lb-prev").addEventListener("click", () => show(idx - 1));
    dlg.querySelector(".lb-next").addEventListener("click", () => show(idx + 1));
    dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.classList.contains("lightbox-inner")) dlg.close(); });
    dlg.addEventListener("keydown", (e) => { if (e.key === "ArrowLeft") show(idx - 1); if (e.key === "ArrowRight") show(idx + 1); });
  }

  /* ---------- Contact form → email via FormSubmit ---------- */
  function initForm() {
    const form = document.querySelector("#contact-form"); if (!form) return;
    const status = form.querySelector(".form-status");
    const btn = form.querySelector('button[type="submit"]');

    const validate = (field) => {
      const wrap = field.closest(".field"); if (!wrap) return true;
      const ok = field.checkValidity();
      wrap.classList.toggle("invalid", !ok);
      field.setAttribute("aria-invalid", String(!ok));
      return ok;
    };
    form.querySelectorAll("input, select, textarea").forEach((f) => {
      f.addEventListener("blur", () => { if (f.value) validate(f); });
      f.addEventListener("input", () => { if (f.closest(".field.invalid")) validate(f); });
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.className = "form-status";
      const fields = [...form.querySelectorAll("input:not(.hp), select, textarea")];
      const bad = fields.filter((f) => !validate(f));
      if (bad.length) { bad[0].focus(); return; }
      if (window.HF_PREVIEW) { status.textContent = t("preview.form"); status.className = "form-status ok"; status.focus(); return; }

      btn.disabled = true; btn.querySelector("span").textContent = t("form.sending");
      const data = Object.fromEntries(new FormData(form).entries());
      data._subject = `Website enquiry – ${data["Reason"] || ""} – ${data["Name"] || ""}`;
      data._template = "table";
      data._replyto = data.email;
      data["Language"] = lang.toUpperCase();
      try {
        const useScript = !!(window.SITE && SITE.formEndpoint);
        if (useScript) data.lang = lang;
        const res = useScript
          ? await fetch(SITE.formEndpoint, { method: "POST", body: new URLSearchParams(data) })
          : await fetch(form.action, {
              method: "POST",
              headers: { "Content-Type": "application/json", Accept: "application/json" },
              body: JSON.stringify(data)
            });
        const json = await res.json().catch(() => ({}));
        if (!res.ok || json.success === "false" || json.success === false) throw new Error(json.message || res.status);
        status.textContent = t("form.success"); status.className = "form-status ok";
        form.reset();
      } catch (err) {
        status.textContent = t("form.error"); status.className = "form-status bad";
      } finally {
        btn.disabled = false; btn.querySelector("span").textContent = t("form.submit");
        status.focus();
      }
    });
  }


  /* ---------- Scroll moments (scroll-craft engine) ---------- */
  function initScroll() {
    if (window.ScrollCraft && document.querySelector("[data-sc-act], [data-sc-progress]")) {
      try { ScrollCraft.mount(document.body); } catch (e) { console.warn("scrollcraft", e); }
    }
    initPlay();
  }

  /* Signature: scrolling moves through the album, track by track, while the disc turns. */
  function initPlay() {
    const sec = document.querySelector("[data-play]"); if (!sec) return;
    const items = [...sec.querySelectorAll(".tracklist li")]; if (!items.length) return;
    const list = sec.querySelector(".tracklist"), win = sec.querySelector(".play-window");
    const num = sec.querySelector("[data-play-num]"), title = sec.querySelector("[data-play-title]");
    const spin = sec.querySelector(".play-disc__spin");
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cur = -1, queued = false;
    const show = (i) => {
      if (i === cur) return; cur = i;
      items.forEach((li, k) => li.classList.toggle("is-current", k === i));
      num.textContent = String(i + 1).padStart(2, "0");
      title.textContent = TRACKS[i].t;
      const li = items[i];
      const shift = Math.min(0, Math.max(win.clientHeight - list.scrollHeight, (win.clientHeight - li.offsetHeight) / 2 - li.offsetTop));
      list.style.setProperty("--shift", shift + "px");
    };
    const tick = () => {
      queued = false;
      const r = sec.getBoundingClientRect();
      const travel = Math.max(1, r.height - innerHeight);
      const p = Math.min(1, Math.max(0, -r.top / travel));
      show(Math.min(items.length - 1, Math.max(0, Math.floor(((p - 0.04) / 0.9) * items.length))));
      if (!still && r.bottom > 0 && r.top < innerHeight) spin.style.transform = `rotate(${(p * 900).toFixed(1)}deg)`;
    };
    const ask = () => { if (!queued) { queued = true; requestAnimationFrame(tick); } };
    addEventListener("scroll", ask, { passive: true });
    addEventListener("resize", () => { cur = -1; ask(); });
    tick();
  }


  /* Statement lines arrive by themselves once the section is on screen. */
  function initStatement() {
    const sec = document.querySelector("[data-statement]"); if (!sec) return;
    if (!("IntersectionObserver" in window)) { sec.classList.add("is-in"); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { sec.classList.add("is-in"); io.disconnect(); }
    }), { threshold: 0.4 });
    io.observe(sec);
  }

  /* Listen page: the CD turns by itself; "Now playing" follows the Spotify player. */
  function initSpinCd() {
    const box = document.querySelector("[data-spin-cd]"); if (!box) return;
    const label = box.querySelector("[data-spin-label]"), num = box.querySelector("[data-spin-num]"), title = box.querySelector("[data-spin-title]");
    const items = [...document.querySelectorAll("[data-spin-list] li")];
    let state = { i: -1, paused: true };
    const paint = () => {
      const key = state.i < 0 ? "play.press" : state.paused ? "play.paused" : "play.nowplaying";
      label.setAttribute("data-i18n", key); label.textContent = t(key);
      num.hidden = state.i < 0;
      num.textContent = state.i < 0 ? "" : String(state.i + 1).padStart(2, "0");
      title.textContent = state.i < 0 ? "" : TRACKS[state.i].t;
      items.forEach((li, k) => li.classList.toggle("is-current", k === state.i));
    };
    paint();

    /* Shared review copy: play the album's 30-second previews in the page. */
    const list = document.querySelector(".sp-list");
    if (list) {
      const audio = new Audio(); audio.preload = "none";
      const rows = [...list.querySelectorAll("[data-sp-row]")];
      const playBtn = list.querySelector("[data-sp-play]"), ring = list.querySelector("[data-sp-ring]"), more = list.querySelector("[data-sp-more]");
      const C = 2 * Math.PI * 26; ring.style.strokeDasharray = C; ring.style.strokeDashoffset = C;
      const setRing = (f) => { ring.style.strokeDashoffset = C * (1 - Math.max(0, Math.min(1, f))); };
      const sync = () => {
        rows.forEach((b, k) => b.classList.toggle("is-current", k === state.i));
        list.classList.toggle("is-playing", !state.paused);
        playBtn.setAttribute("aria-label", state.paused ? "Play" : "Pause");
        paint();
      };
      const start = (i) => {
        if (i !== state.i || !audio.src) { audio.src = "assets/audio/" + String(i + 1).padStart(2, "0") + ".mp3"; }
        state = { i, paused: false }; more.hidden = true; setRing(0);
        audio.play().catch(() => { state.paused = true; sync(); });
        sync();
      };
      rows.forEach((b, k) => b.addEventListener("click", () => (k === state.i && !audio.paused ? audio.pause() : start(k))));
      playBtn.addEventListener("click", () => (audio.paused ? start(state.i < 0 ? 0 : state.i) : audio.pause()));
      list.querySelector("[data-sp-prev]").addEventListener("click", () => start(state.i <= 0 ? TRACKS.length - 1 : state.i - 1));
      list.querySelector("[data-sp-next]").addEventListener("click", () => start((state.i + 1) % TRACKS.length));
      audio.addEventListener("pause", () => { if (state.i >= 0) { state.paused = true; sync(); } });
      audio.addEventListener("play", () => { state.paused = false; sync(); });
      audio.addEventListener("timeupdate", () => setRing(audio.duration ? audio.currentTime / audio.duration : 0));
      audio.addEventListener("ended", () => { setRing(1); more.hidden = false; });
      list.querySelector("[data-sp-again]").addEventListener("click", () => { more.hidden = true; setRing(0); start(state.i < 0 ? 0 : state.i); });
    }

    const frame = document.querySelector("[data-spotify-api]"); if (!frame) return;
    const albumUri = "spotify:album:" + SITE.spotify.split("/album/")[1].split("?")[0];
    const find = (d) => {
      const uri = d.playingURI || d.uri || (d.track && d.track.uri) || "";
      let i = TRACKS.findIndex((tr) => uri.endsWith(":" + tr.sp));
      if (i < 0 && d.duration > 60000) i = TRACKS.findIndex((tr) => Math.abs(tr.ms - d.duration) < 1500);
      return i;
    };
    window.onSpotifyIframeApiReady = (API) => {
      const holder = document.createElement("div");
      holder.className = "spotify-api-holder";
      frame.replaceWith(holder);
      API.createController(holder, { uri: albumUri, width: "100%", height: 460 }, (ctl) => {
        ctl.addListener("playback_update", (e) => {
          const d = (e && e.data) || {};
          const i = find(d);
          if (i >= 0) state.i = i;
          state.paused = !!d.isPaused;
          paint();
        });
      });
    };
    const sc = document.createElement("script");
    sc.src = "https://open.spotify.com/embed/iframe-api/v1"; sc.async = true;
    document.head.appendChild(sc);
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    if (window.HF_PREVIEW) {
      /* Shared review copy: other sites' players can't be embedded, so draw the album's song list ourselves. */
      const mmss = (ms) => { const sec = Math.round(ms / 1000); return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0"); };
      document.querySelectorAll("[data-spotify-embed]").forEach((f) => {
        const box = document.createElement("div");
        box.className = "sp-list";
        box.innerHTML = `
          <div class="sp-list__head">
            <img src="assets/img/album-cover.jpg" alt="" width="640" height="640">
            <div class="sp-list__info"><strong>Around His Table</strong><span>His Friends Vocal Group</span>
              <a href="${SITE.spotify}" target="_blank" rel="noopener" data-i18n="preview.spotify"></a></div>
            <div class="sp-ctl">
              <button type="button" class="sp-ctl__skip" data-sp-prev aria-label="Previous song"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 5h2v14H6zM20 5v14L9 12z"/></svg></button>
              <button type="button" class="sp-ctl__play" data-sp-play aria-label="Play"><svg class="sp-ring" viewBox="0 0 56 56" aria-hidden="true"><circle class="sp-ring__bg" cx="28" cy="28" r="26"/><circle class="sp-ring__fg" data-sp-ring cx="28" cy="28" r="26"/></svg><svg class="i-play" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg><svg class="i-pause" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg></button>
              <button type="button" class="sp-ctl__skip" data-sp-next aria-label="Next song"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M16 5h2v14h-2zM4 5v14l11-7z"/></svg></button>
            </div>
          </div>
          <div class="sp-end" data-sp-more hidden>
            <img class="sp-end__bg" src="assets/img/album-cover.jpg" alt="">
            <div class="sp-end__box">
              <p class="sp-end__text" data-i18n="preview.more"></p>
              <a class="sp-end__btn" href="${SITE.spotify}" target="_blank" rel="noopener" data-i18n="preview.open"></a>
              <button type="button" class="sp-end__again" data-sp-again data-i18n="preview.again"></button>
            </div>
          </div>
          <ol class="sp-list__rows">${TRACKS.map((tr, i) => `
            <li><button type="button" class="sp-row" data-sp-row="${i}">
              <span class="sp-row__n">${i + 1}</span><span class="sp-row__t">${tr.t}<small>His Friends Vocal Group</small></span><span class="sp-row__d">${mmss(tr.ms)}</span>
            </button></li>`).join("")}
          </ol>`;
        f.replaceWith(box);
      });
    }
    buildChrome();
    renderTracks();
    initNotes();
    initCD();
    initUnfold();
    initGallery();
    initForm();
    applyLang();
    initReveal();
    initScroll();
    initStatement();
    initSpinCd();
    document.querySelectorAll("[data-spotify]").forEach((a) => (a.href = SITE.spotify));
    document.querySelectorAll("[data-youtube]").forEach((a) => (a.href = SITE.youtube));
    document.querySelectorAll("[data-apple]").forEach((a) => (a.href = SITE.appleMusic));
    document.querySelectorAll("[data-spotify-embed]").forEach((f) => (f.src = SITE.spotifyEmbed));
  });

  window.HF = { icon, brand };
})();
