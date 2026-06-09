/* ============================================================
   Munay · shared chrome + motion
   - injects nav + footer on every page
   - language switcher, mobile menu, navbar scroll state
   - scroll-reveal (IntersectionObserver)
   - parallax fallback for browsers without CSS scroll timelines
   ============================================================ */
(function () {
  "use strict";

  const PAGE = document.body.dataset.page || "home";
  const WHATSAPP = "https://wa.me/XXXXXXXXX"; // TODO: real number
  const NAV = [
    ["home", "index.html"],
    ["about", "about.html"],
    ["treatments", "treatments.html"],
    ["contact", "contact.html"]
  ];

  const navLinks = (extra = "") =>
    NAV.map(([k, href]) =>
      `<a href="${href}" data-i18n="nav.${k}" class="nav-link ${extra} ${k === PAGE ? "active" : ""}">${k}</a>`
    ).join("");

  const LABELS = { en: "EN", es: "ES", fa: "فا" };
  const langButtons = ["en", "es", "fa"]
    .map(l => `<button class="lang-btn px-3 py-1 text-xs font-semibold uppercase tracking-wide" data-lang="${l}" lang="${l}" aria-label="${l}">${LABELS[l]}</button>`)
    .join("");

  /* ---------- skip link ---------- */
  const skip = document.createElement("a");
  skip.href = "#main";
  skip.className = "sr-skip";
  skip.setAttribute("data-i18n", "a11y.skip");
  skip.textContent = "Skip to content";
  skip.style.cssText =
    "position:absolute;left:-9999px;top:0;z-index:2000;background:var(--clay);color:#fff;padding:.6rem 1rem;border-radius:0 0 8px 0;";
  skip.addEventListener("focus", () => (skip.style.left = "0"));
  skip.addEventListener("blur", () => (skip.style.left = "-9999px"));
  document.body.prepend(skip);

  /* ---------- nav ---------- */
  document.getElementById("site-nav").innerHTML = `
    <nav id="navbar">
      <div class="wrap flex items-center justify-between" style="height:var(--nav-h)">
        <a href="index.html" class="brand flex items-center gap-2" aria-label="Munay home">
          <img src="assets/favicon.svg" alt="" width="34" height="34" />
          <span style="font-family:var(--serif);font-size:1.55rem;letter-spacing:.01em">Munay</span>
        </a>

        <div class="hidden md:flex items-center gap-7 text-sm uppercase tracking-wider">
          ${navLinks()}
        </div>

        <div class="flex items-center gap-3">
          <div class="lang-wrap flex items-center rounded-full border p-0.5">
            ${langButtons}
          </div>
          <a href="contact.html" data-i18n="cta.book" class="btn btn-primary hidden sm:inline-flex" style="padding:.6rem 1.2rem">Book Now</a>
          <button id="navToggle" class="md:hidden text-2xl leading-none px-2" data-i18n-aria="nav.menu" aria-label="Open menu" aria-expanded="false">☰</button>
        </div>
      </div>

      <div id="mobileMenu" class="md:hidden hidden bg-[color:var(--cream)] border-t border-[color:var(--border)]">
        <div class="wrap flex flex-col py-3 text-sm uppercase tracking-wider">
          ${navLinks("py-3")}
          <a href="contact.html" data-i18n="cta.book" class="btn btn-primary mt-3 self-start">Book Now</a>
        </div>
      </div>
    </nav>`;

  /* ---------- footer ---------- */
  document.getElementById("site-footer").innerHTML = `
    <footer class="bg-cocoa grain">
      <div class="wrap section relative" style="z-index:2;padding-block:clamp(3rem,7vw,5rem)">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div class="lg:col-span-2 max-w-xs">
            <div class="flex items-center gap-2">
              <img src="assets/favicon.svg" alt="" width="34" height="34" />
              <span style="font-family:var(--serif);font-size:1.7rem;color:var(--text-inv)">Munay</span>
            </div>
            <p class="mt-3 text-sm" style="color:var(--muted-inv)" data-i18n="brand.tagline">Holistic Massage · Sacred Valley</p>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-[0.25em] mb-4" style="color:var(--gold-soft)" data-i18n="footer.explore">Explore</h4>
            <ul class="space-y-2 text-sm" style="color:var(--muted-inv)">
              ${NAV.map(([k, href]) => `<li><a href="${href}" class="hover:text-[color:var(--text-inv)] transition" data-i18n="nav.${k}">${k}</a></li>`).join("")}
            </ul>
          </div>
          <div>
            <h4 class="text-xs uppercase tracking-[0.25em] mb-4" style="color:var(--gold-soft)" data-i18n="footer.connect">Connect</h4>
            <p class="text-sm mb-3" style="color:var(--muted-inv)" data-i18n="footer.location">Písac, Sacred Valley, Cusco — Peru</p>
            <a href="${WHATSAPP}" target="_blank" rel="noopener" class="btn btn-on-dark" style="padding:.55rem 1.1rem" data-i18n="ct.whatsapp.cta">Message on WhatsApp</a>
          </div>
        </div>
        <div class="mt-12 pt-6 border-t text-xs flex flex-wrap gap-2 justify-between" style="border-color:var(--border-inv);color:var(--muted-inv)">
          <span>© Munay · <span data-i18n="footer.rights">All rights reserved.</span></span>
          <span>Písac · Valle Sagrado · Cusco</span>
        </div>
      </div>
    </footer>`;

  /* ---------- interactions ---------- */
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.addEventListener("click", () => window.MunayI18N.applyLang(b.dataset.lang))
  );

  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(open));
    });
    menu.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        menu.classList.add("hidden");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  const nav = document.getElementById("navbar");
  const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- scroll reveal ---------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if ("IntersectionObserver" in window && !prefersReduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(el => io.observe(el));
  } else {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("is-visible"));
  }

  /* ---------- parallax fallback ---------- */
  const hasScrollTimeline = window.CSS && CSS.supports && CSS.supports("animation-timeline: view()");
  if (!hasScrollTimeline && !prefersReduced) {
    const imgs = Array.from(document.querySelectorAll(".parallax__img"));
    if (imgs.length) {
      let ticking = false;
      const update = () => {
        const vh = window.innerHeight;
        imgs.forEach(img => {
          const r = img.parentElement.getBoundingClientRect();
          const progress = (r.top + r.height / 2 - vh / 2) / vh; // -1..1 ish
          img.style.transform = `translateY(${(-progress * 9).toFixed(2)}%)`;
        });
        ticking = false;
      };
      const onMove = () => {
        if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
      };
      update();
      window.addEventListener("scroll", onMove, { passive: true });
      window.addEventListener("resize", onMove, { passive: true });
    }
  }

  /* ---------- apply saved language (after chrome + content exist) ---------- */
  window.MunayI18N.initLang();
})();
