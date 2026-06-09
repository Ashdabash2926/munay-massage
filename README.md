# Munay · Holistic Massage — Sacred Valley

**Live:** https://ashdabash2926.github.io/munay-massage/

A warm, calming, trilingual (English / Español / فارسی) four-page website for a holistic
massage practice in Písac, Sacred Valley (Cusco), Peru. Flat static site — no build step.

- **Design system:** "Earthen Sanctuary" — terracotta / cream / cocoa palette,
  Fraunces + Barlow + Vazirmatn type, parallax scrolling, scroll-reveal motion.
- **Stack:** HTML + Tailwind (CDN) + CSS custom properties + vanilla JS.
- **i18n:** EN / ES / FA with true RTL flip for Farsi; choice persists in `localStorage`.

## Structure

| File | Purpose |
|------|---------|
| `index.html` | Home |
| `about.html` | About (philosophy + oils/aromatherapy + Sacred Valley) |
| `treatments.html` | Treatments menu |
| `contact.html` | Contact + form + map |
| `css/styles.css` | Design tokens, parallax/reveal, RTL overrides |
| `js/i18n.js` | Translation dictionary + language switcher |
| `js/site.js` | Injects shared nav/footer; wires scroll-reveal + parallax |
| `assets/` | Images, favicon |

## ⚠️ Placeholders to replace before launch

- [ ] **Brand name** — "Munay" is a placeholder (Quechua: *love / heart-energy*).
- [ ] **Treatment names, durations & prices** — currently illustrative ("S/ XXX").
- [ ] **WhatsApp / booking number** — `https://wa.me/XXXXXXXXX`.
- [ ] **Opening hours** — placeholder values on Contact.
- [ ] **Map location** — Contact map points to a Písac placeholder query; set real coords.
- [ ] **Photography** — hero/treatment images are curated Unsplash placeholders; swap for
      real photos of the studio/practitioner.
- [ ] **Contact form action** — `action="#"`; wire to a real handler (Formspree, Worker, etc.).
- [ ] **Practitioner story** on About — placeholder copy.

## Local preview

Open `index.html` in a browser (no server needed). For map/iframe testing a local server
helps: `python3 -m http.server`.

## Deploy

GitHub Pages from `main` (root), repo `Ashdabash2926/munay-massage`.
