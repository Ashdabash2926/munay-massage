/* ============================================================
   Munay · trilingual layer  —  EN / ES / FA (RTL)
   - elements with data-i18n        -> textContent
   - elements with data-i18n-ph     -> placeholder
   - elements with data-i18n-aria   -> aria-label
   Language choice persists in localStorage ("munay-lang").
   ============================================================ */

const I18N = {
  en: {
    "lang.label": "EN",
    "a11y.skip": "Skip to content",
    "nav.home": "Home", "nav.about": "About", "nav.treatments": "Treatments", "nav.contact": "Contact",
    "nav.menu": "Open menu",
    "cta.book": "Book Now",
    "brand.tagline": "Holistic Massage · Sacred Valley",

    /* home */
    "home.hero.kicker": "Your escape · Valle Sagrado",
    "home.hero.t1": "Come home to",
    "home.hero.t2": "yourself",
    "home.hero.sub": "Holistic massage in the heart of Písac — where Andean stillness meets the body's own rhythm.",
    "home.hero.cta2": "Explore treatments",
    "home.hero.scroll": "Scroll",
    "mission.eyebrow": "Our intention",
    "mission.title": "Rest is a kind of medicine",
    "mission.body": "We create an unhurried space to release the noise of travel and the weight of the day — and to restore you in body, mind and spirit.",
    "mission.link": "Read our story",
    "featured.eyebrow": "Signature treatments",
    "featured.title": "Chosen with care",
    "featured.link": "See all treatments",
    "escape.eyebrow": "2,972 m · Valle Sagrado",
    "escape.title": "Breathe with the mountains",
    "escape.body": "High in the Sacred Valley, the air itself feels different. Let the altitude slow you down.",
    "testimonial.quote": "I arrived carrying weeks of travel and left feeling like myself again. The most grounding hour I spent in Peru.",
    "testimonial.name": "— Sofía, traveller",
    "cta.title": "Begin your ritual",
    "cta.body": "Reserve a session and give yourself an hour of true rest.",

    /* treatments (shared names + descriptions) */
    "t.stone.name": "Andean Hot Stone",
    "t.stone.desc": "Warm volcanic stones melt deep tension and ground the nervous system.",
    "t.holistic.name": "Holistic Full-Body",
    "t.holistic.desc": "A flowing, head-to-toe ritual to quiet the mind and soften the whole body.",
    "t.aroma.name": "Aromatherapy Oil",
    "t.aroma.desc": "Plant oils and slow strokes carry you into deep, fragrant calm.",
    "t.deep.name": "Deep Tissue · Therapeutic",
    "t.deep.desc": "Focused, firmer work to release stubborn knots and chronic tension.",
    "t.energy.name": "Chakra & Energy Balancing",
    "t.energy.desc": "Gentle energetic bodywork to rebalance and restore your natural flow.",

    /* about */
    "about.hero.eyebrow": "About Munay",
    "about.hero.title": "Healing, the slow way",
    "about.hero.sub": "Munay means love — the open heart — in the Andean way of seeing the world. It is the spirit we bring to every session.",
    "philosophy.eyebrow": "Our philosophy",
    "philosophy.title": "The body remembers how to rest",
    "philosophy.body1": "We believe massage is less about fixing and more about listening — to breath, to tension, to the quiet signals the body has been ignoring. Every session is shaped around the person on the table, never a fixed routine.",
    "philosophy.body2": "We work without rush, in a warm and unhurried room, so your nervous system has time to truly let go.",
    "oils.eyebrow": "Oils & aromatherapy",
    "oils.title": "Scent as a doorway",
    "oils.body": "We blend cold-pressed plant oils with essential oils chosen for the moment — palo santo and muña from the valley, lavender, rose, eucalyptus. Each blend is mixed fresh, never synthetic, so the aroma carries you somewhere deeper than touch alone.",
    "valley.eyebrow": "The setting",
    "valley.title": "Rooted in Písac",
    "valley.body": "Our studio sits in Písac, in the Sacred Valley of the Incas at nearly 3,000 metres. Surrounded by terraces, mountains and the Vilcanota river, it is a place that has drawn seekers and healers for generations. We feel lucky to practise here.",

    /* treatments page */
    "tr.hero.eyebrow": "The menu",
    "tr.hero.title": "Treatments",
    "tr.hero.sub": "Each session is tailored to you. Durations and prices below are a guide — tell us what your body needs.",
    "tr.from": "from",
    "tr.book": "Book this",
    "tr.cta.title": "Not sure which to choose?",
    "tr.cta.body": "Message us and we'll help you find the right session for how you feel.",

    /* contact */
    "ct.hero.eyebrow": "Get in touch",
    "ct.hero.title": "Come and rest",
    "ct.hero.sub": "Reserve a session or ask us anything — we usually reply the same day.",
    "ct.location": "Location",
    "ct.hours": "Hours",
    "ct.hours.val": "Mon – Sat · 9:00 – 19:00",
    "ct.whatsapp": "WhatsApp",
    "ct.whatsapp.cta": "Message on WhatsApp",
    "ct.form.title": "Send a message",
    "ct.form.name": "Name",
    "ct.form.name.ph": "Your name",
    "ct.form.email": "Email",
    "ct.form.email.ph": "you@email.com",
    "ct.form.msg": "Message",
    "ct.form.msg.ph": "Tell us what you're looking for…",
    "ct.form.submit": "Send message",
    "ct.map.title": "Find us",

    /* footer */
    "footer.explore": "Explore",
    "footer.connect": "Connect",
    "footer.location": "Písac, Sacred Valley, Cusco — Peru",
    "footer.rights": "All rights reserved."
  },

  es: {
    "lang.label": "ES",
    "a11y.skip": "Saltar al contenido",
    "nav.home": "Inicio", "nav.about": "Nosotros", "nav.treatments": "Tratamientos", "nav.contact": "Contacto",
    "nav.menu": "Abrir menú",
    "cta.book": "Reservar",
    "brand.tagline": "Masaje Holístico · Valle Sagrado",

    "home.hero.kicker": "Tu refugio · Valle Sagrado",
    "home.hero.t1": "Vuelve a tu",
    "home.hero.t2": "centro",
    "home.hero.sub": "Masaje holístico en el corazón de Písac, donde la calma andina se encuentra con el ritmo del cuerpo.",
    "home.hero.cta2": "Ver tratamientos",
    "home.hero.scroll": "Desliza",
    "mission.eyebrow": "Nuestra intención",
    "mission.title": "El descanso también es medicina",
    "mission.body": "Creamos un espacio sin prisa para soltar el ruido del viaje y el peso del día, y restaurarte en cuerpo, mente y espíritu.",
    "mission.link": "Conoce nuestra historia",
    "featured.eyebrow": "Tratamientos destacados",
    "featured.title": "Elegidos con cuidado",
    "featured.link": "Ver todos los tratamientos",
    "escape.eyebrow": "2.972 m · Valle Sagrado",
    "escape.title": "Respira con las montañas",
    "escape.body": "En lo alto del Valle Sagrado, el aire se siente distinto. Deja que la altura te haga ir más despacio.",
    "testimonial.quote": "Llegué cargando semanas de viaje y me fui sintiéndome yo de nuevo. La hora más reparadora que pasé en Perú.",
    "testimonial.name": "— Sofía, viajera",
    "cta.title": "Comienza tu ritual",
    "cta.body": "Reserva una sesión y regálate una hora de verdadero descanso.",

    "t.stone.name": "Piedras Calientes Andinas",
    "t.stone.desc": "Piedras volcánicas tibias derriten la tensión profunda y calman el sistema nervioso.",
    "t.holistic.name": "Holístico de Cuerpo Completo",
    "t.holistic.desc": "Un ritual fluido de pies a cabeza para calmar la mente y relajar todo el cuerpo.",
    "t.aroma.name": "Aromaterapia con Aceites",
    "t.aroma.desc": "Aceites vegetales y movimientos lentos te llevan a una calma profunda y aromática.",
    "t.deep.name": "Tejido Profundo · Terapéutico",
    "t.deep.desc": "Trabajo firme y enfocado para liberar nudos persistentes y tensión crónica.",
    "t.energy.name": "Equilibrio de Chakras y Energía",
    "t.energy.desc": "Trabajo energético suave para reequilibrar y restaurar tu flujo natural.",

    "about.hero.eyebrow": "Sobre Munay",
    "about.hero.title": "Sanar, sin prisa",
    "about.hero.sub": "Munay significa amor —el corazón abierto— en la cosmovisión andina. Es el espíritu que llevamos a cada sesión.",
    "philosophy.eyebrow": "Nuestra filosofía",
    "philosophy.title": "El cuerpo recuerda cómo descansar",
    "philosophy.body1": "Creemos que el masaje no se trata tanto de arreglar como de escuchar: la respiración, la tensión, las señales silenciosas que el cuerpo ha ignorado. Cada sesión se adapta a la persona en la camilla, nunca a una rutina fija.",
    "philosophy.body2": "Trabajamos sin prisa, en una sala cálida y tranquila, para que tu sistema nervioso tenga tiempo de soltar de verdad.",
    "oils.eyebrow": "Aceites y aromaterapia",
    "oils.title": "El aroma como umbral",
    "oils.body": "Mezclamos aceites vegetales prensados en frío con aceites esenciales elegidos para el momento: palo santo y muña del valle, lavanda, rosa, eucalipto. Cada mezcla se prepara fresca, nunca sintética, para que el aroma te lleve más profundo que el tacto.",
    "valley.eyebrow": "El entorno",
    "valley.title": "Con raíces en Písac",
    "valley.body": "Nuestro estudio está en Písac, en el Valle Sagrado de los Incas, a casi 3.000 metros. Rodeado de andenes, montañas y el río Vilcanota, es un lugar que ha atraído a buscadores y sanadores por generaciones. Nos sentimos afortunados de ejercer aquí.",

    "tr.hero.eyebrow": "La carta",
    "tr.hero.title": "Tratamientos",
    "tr.hero.sub": "Cada sesión se adapta a ti. Las duraciones y precios son una guía; cuéntanos qué necesita tu cuerpo.",
    "tr.from": "desde",
    "tr.book": "Reservar",
    "tr.cta.title": "¿No sabes cuál elegir?",
    "tr.cta.body": "Escríbenos y te ayudamos a encontrar la sesión ideal para cómo te sientes.",

    "ct.hero.eyebrow": "Contáctanos",
    "ct.hero.title": "Ven a descansar",
    "ct.hero.sub": "Reserva una sesión o pregúntanos lo que quieras; solemos responder el mismo día.",
    "ct.location": "Ubicación",
    "ct.hours": "Horario",
    "ct.hours.val": "Lun – Sáb · 9:00 – 19:00",
    "ct.whatsapp": "WhatsApp",
    "ct.whatsapp.cta": "Escríbenos por WhatsApp",
    "ct.form.title": "Envíanos un mensaje",
    "ct.form.name": "Nombre",
    "ct.form.name.ph": "Tu nombre",
    "ct.form.email": "Correo",
    "ct.form.email.ph": "tu@correo.com",
    "ct.form.msg": "Mensaje",
    "ct.form.msg.ph": "Cuéntanos qué buscas…",
    "ct.form.submit": "Enviar mensaje",
    "ct.map.title": "Encuéntranos",

    "footer.explore": "Explorar",
    "footer.connect": "Conecta",
    "footer.location": "Písac, Valle Sagrado, Cusco — Perú",
    "footer.rights": "Todos los derechos reservados."
  },

  fa: {
    "lang.label": "فا",
    "a11y.skip": "پرش به محتوا",
    "nav.home": "خانه", "nav.about": "درباره", "nav.treatments": "خدمات", "nav.contact": "تماس",
    "nav.menu": "باز کردن منو",
    "cta.book": "رزرو",
    "brand.tagline": "ماساژ هولیستیک · درهٔ مقدس",

    "home.hero.kicker": "پناهگاه تو · درهٔ مقدس",
    "home.hero.t1": "بازگشت به",
    "home.hero.t2": "آرامشِ خود",
    "home.hero.sub": "ماساژ هولیستیک در قلب پیساک؛ جایی که آرامشِ کوه‌های آند با ریتمِ بدن تو هم‌نوا می‌شود.",
    "home.hero.cta2": "مشاهدهٔ خدمات",
    "home.hero.scroll": "اسکرول",
    "mission.eyebrow": "نیّتِ ما",
    "mission.title": "آرامش، خود نوعی درمان است",
    "mission.body": "فضایی آرام و بی‌شتاب می‌سازیم تا هیاهوی سفر و سنگینیِ روز را رها کنی و در تن، ذهن و جان دوباره جان بگیری.",
    "mission.link": "داستان ما را بخوانید",
    "featured.eyebrow": "خدماتِ ویژه",
    "featured.title": "با دقت برگزیده",
    "featured.link": "مشاهدهٔ همهٔ خدمات",
    "escape.eyebrow": "۲٬۹۷۲ متر · درهٔ مقدس",
    "escape.title": "با کوه‌ها نفس بکش",
    "escape.body": "در بلندای درهٔ مقدس، هوا حال‌وهوای دیگری دارد. بگذار ارتفاع، تو را آهسته‌تر کند.",
    "testimonial.quote": "با خستگیِ هفته‌ها سفر آمدم و با احساسِ دوبارهٔ خودم بیرون رفتم؛ آرام‌بخش‌ترین ساعتی که در پرو گذراندم.",
    "testimonial.name": "— سوفیا، مسافر",
    "cta.title": "آیینِ خود را آغاز کن",
    "cta.body": "یک جلسه رزرو کن و یک ساعت آرامشِ واقعی به خودت هدیه بده.",

    "t.stone.name": "ماساژ با سنگِ داغِ آند",
    "t.stone.desc": "سنگ‌های گرمِ آتشفشانی تنشِ عمیق را آب می‌کنند و سیستم عصبی را آرام می‌سازند.",
    "t.holistic.name": "ماساژ هولیستیکِ تمام‌بدن",
    "t.holistic.desc": "آیینی پیوسته از سر تا پا برای آرام‌کردنِ ذهن و نرم‌کردنِ همهٔ بدن.",
    "t.aroma.name": "آروماتراپی با روغن",
    "t.aroma.desc": "روغن‌های گیاهی و حرکاتِ آهسته تو را به آرامشی عمیق و خوش‌بو می‌برند.",
    "t.deep.name": "ماساژ عمقی · درمانی",
    "t.deep.desc": "کاری متمرکز و محکم برای رهاسازیِ گره‌های سرسخت و تنش‌های مزمن.",
    "t.energy.name": "تعادلِ چاکرا و انرژی",
    "t.energy.desc": "کارِ انرژیاییِ ملایم برای بازگرداندنِ تعادل و جریانِ طبیعیِ بدن.",

    "about.hero.eyebrow": "دربارهٔ مونای",
    "about.hero.title": "شفا، به‌آرامی",
    "about.hero.sub": "مونای در جهان‌بینیِ آند به‌معنای عشق است؛ قلبِ گشوده. این همان روحی است که به هر جلسه می‌آوریم.",
    "philosophy.eyebrow": "فلسفهٔ ما",
    "philosophy.title": "بدن، به‌یاد می‌آورد چگونه بیاساید",
    "philosophy.body1": "باور داریم ماساژ بیش از آنکه «درست‌کردن» باشد، «شنیدن» است؛ شنیدنِ نفس، تنش و نشانه‌های خاموشی که بدن نادیده گرفته است. هر جلسه بر اساسِ همان فردی که روی تخت است شکل می‌گیرد، نه یک روالِ ثابت.",
    "philosophy.body2": "بی‌شتاب کار می‌کنیم، در اتاقی گرم و آرام، تا سیستم عصبی‌ات فرصت کند به‌راستی رها شود.",
    "oils.eyebrow": "روغن‌ها و آروماتراپی",
    "oils.title": "رایحه، دروازه‌ای به آرامش",
    "oils.body": "روغن‌های گیاهیِ سردفشرده را با اسانس‌هایی که برای همان لحظه برمی‌گزینیم می‌آمیزیم: پالو سانتو و مونیا از این دره، اسطوخودوس، گلِ سرخ و اکالیپتوس. هر ترکیب تازه ساخته می‌شود و هرگز مصنوعی نیست، تا رایحه تو را ژرف‌تر از لمس ببرد.",
    "valley.eyebrow": "این مکان",
    "valley.title": "ریشه‌دار در پیساک",
    "valley.body": "استودیوی ما در پیساک است، در درهٔ مقدسِ اینکاها و در ارتفاعِ نزدیک به ۳۰۰۰ متر. در میانِ تراس‌های کشاورزی، کوه‌ها و رودِ ویلکانوتا؛ مکانی که نسل‌هاست جوینده‌گان و شفادهنده‌گان را به‌خود خوانده است. خوشبختیم که اینجا کار می‌کنیم.",

    "tr.hero.eyebrow": "فهرستِ خدمات",
    "tr.hero.title": "خدمات",
    "tr.hero.sub": "هر جلسه برای تو تنظیم می‌شود. مدت‌زمان‌ها و قیمت‌های زیر راهنما هستند؛ به ما بگو بدنت به چه نیاز دارد.",
    "tr.from": "از",
    "tr.book": "رزرو این جلسه",
    "tr.cta.title": "مطمئن نیستی کدام را انتخاب کنی؟",
    "tr.cta.body": "به ما پیام بده تا کمک کنیم جلسهٔ مناسبِ حال‌وهوای امروزت را پیدا کنی.",

    "ct.hero.eyebrow": "تماس با ما",
    "ct.hero.title": "بیا و بیاسای",
    "ct.hero.sub": "یک جلسه رزرو کن یا هر پرسشی داری بپرس؛ معمولاً همان روز پاسخ می‌دهیم.",
    "ct.location": "نشانی",
    "ct.hours": "ساعاتِ کاری",
    "ct.hours.val": "شنبه تا جمعه · ۹:۰۰ – ۱۹:۰۰",
    "ct.whatsapp": "واتساپ",
    "ct.whatsapp.cta": "پیام در واتساپ",
    "ct.form.title": "ارسالِ پیام",
    "ct.form.name": "نام",
    "ct.form.name.ph": "نامِ شما",
    "ct.form.email": "ایمیل",
    "ct.form.email.ph": "you@email.com",
    "ct.form.msg": "پیام",
    "ct.form.msg.ph": "بگو به‌دنبالِ چه هستی…",
    "ct.form.submit": "ارسالِ پیام",
    "ct.map.title": "ما را بیابید",

    "footer.explore": "پیوندها",
    "footer.connect": "ارتباط",
    "footer.location": "پیساک، درهٔ مقدس، کوسکو — پرو",
    "footer.rights": "تمام حقوق محفوظ است."
  }
};

const RTL_LANGS = new Set(["fa"]);
const STORAGE_KEY = "munay-lang";

function t(lang, key) {
  return (I18N[lang] && I18N[lang][key] != null) ? I18N[lang][key] : (I18N.en[key] != null ? I18N.en[key] : key);
}

function applyLang(lang) {
  if (!I18N[lang]) lang = "en";
  const html = document.documentElement;
  html.lang = lang;
  html.dir = RTL_LANGS.has(lang) ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(lang, el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => {
    el.setAttribute("placeholder", t(lang, el.getAttribute("data-i18n-ph")));
  });
  document.querySelectorAll("[data-i18n-aria]").forEach(el => {
    el.setAttribute("aria-label", t(lang, el.getAttribute("data-i18n-aria")));
  });
  document.querySelectorAll(".lang-btn").forEach(b => {
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang));
  });

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
}

function initLang() {
  let saved = "en";
  try { saved = localStorage.getItem(STORAGE_KEY) || "en"; } catch (e) {}
  applyLang(saved);
}

window.MunayI18N = { applyLang, initLang, t, I18N };
