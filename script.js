const HOURS = {
  0: { label: {ru:"Воскресенье", en:"Sunday", de:"Sonntag"}, open: "09:00", close: "18:00" },
  1: { label: {ru:"Понедельник", en:"Monday", de:"Montag"}, open: "08:00", close: "18:00" },
  2: { label: {ru:"Вторник", en:"Tuesday", de:"Dienstag"}, open: "08:00", close: "18:00" },
  3: { label: {ru:"Среда", en:"Wednesday", de:"Mittwoch"}, open: "08:00", close: "18:00" },
  4: { label: {ru:"Четверг", en:"Thursday", de:"Donnerstag"}, open: "08:00", close: "18:00" },
  5: { label: {ru:"Пятница", en:"Friday", de:"Freitag"}, open: "08:00", close: "18:00" },
  6: { label: {ru:"Суббота", en:"Saturday", de:"Samstag"}, open: "09:00", close: "18:00" }
};

const I18N = {
  ru: {
    skip:"Перейти к содержимому",
    menu:"Меню",
    brand_sub:"Berlin · Rixdorf · ex Geschwister Nothaft",
    nav_about:"О месте",
    nav_menu:"Меню",
    nav_reviews:"Отзывы",
    nav_gallery:"Фото",
    nav_contacts:"Контакты",
    nav_visit:"Как зайти",
    hero_pill:"Specialty coffee · cozy meeting point",
    hero_h1:"Розовое кафе, где хочется задержаться",
    hero_lead:"Кофе, выпечка и сэндвичи в атмосфере “cozy & minimal”. Wi-Fi, посадка внутри и на улице, можно взять с собой.",
    hero_cta_map:"Открыть карту",
    hero_cta_menu:"Посмотреть меню",
    meta_addr_k:"Адрес",
    meta_today_k:"Сегодня",
    meta_phone_k:"Телефон",
    hero_note:"Ранее место было известно как <em>Geschwister Nothaft</em>.",
    hero_caption_left:"Coffee · pastries · sandwiches",
    hero_caption_right:"Takeaway · Outdoor seating",
    stat_rating:"оценка (Google)",
    stat_wifi:"удобно работать",
    stat_price:"ориентир по чеку",
    about_h2:"О месте",
    about_p:"Уютное кафе в Neukölln/Rixdorf: напитки (включая matcha), выпечка и сэндвичи. Часто отмечают дружелюбный сервис и “laptop-friendly” формат.",
    card1_h:"Кофе и напитки",
    card1_p:"Классика + любимые позиции гостей: капучино, matcha, соки.",
    card2_h:"Еда",
    card2_p:"Выпечка, круассаны, берлинеры и сэндвичи (в т.ч. grilled).",
    card3_h:"Комфорт",
    card3_p:"Wi-Fi, можно сидеть внутри/снаружи, take away, карты.",
    banner_h:"Зайти на кофе по пути",
    banner_p:"Скопируй адрес и открой маршрут в Google Maps. Отлично подходит для встречи или работы.",
    copy_addr:"Скопировать адрес",
    open_maps:"Открыть в Google Maps",
    menu_h2:"Меню (тизер)",
    menu_p:"Ниже — аккуратная витрина направлений. Точные цены/позиции можно добавить, если пришлёшь меню/скрин.",
    m1_h:"Кофе",
    m2_h:"Любимое",
    m2_item2:"Домашняя выпечка",
    m2_item3:"Сэндвичи / grilled",
    m3_h:"Опции",
    m3_item1:"Вегетарианские варианты",
    m3_item2:"Десерты и выпечка",
    m3_item3:"To-go формат",
    menu_note:"Упоминания в обзорах: grilled sandwiches, croissants/berliner, cappuccino, matcha, juice.",
    rev_h2:"Отзывы",
    rev_p:"Короткие пересказы реальных отзывов из открытых источников (чтобы без копипаста).",
    rev_hint:"Хочешь — добавлю блок “оставить отзыв” с кнопками Google/Tripadvisor и UTM.",
    gal_h2:"Фото",
    gal_p:"Положи изображения в папку /assets (имена файлов — как ниже).",
    loc_h2:"Контакты и как добраться",
    loc_card_h:"Контакты",
    loc_phone_k:"Телефон",
    loc_addr_k:"Адрес",
    loc_hours_k:"Часы",
    loc_feat_k:"Особенности",
    route:"Маршрут",
    copy_coords:"Скопировать координаты",
    faq1_q:"Можно ли работать с ноутбуком?",
    faq1_a:"Да — часто упоминают Wi-Fi и “laptop-friendly” формат.",
    faq2_q:"Есть ли вегетарианские опции?",
    faq2_a:"Да — в обзорах отмечают варианты для вегетарианцев.",
    faq3_q:"Можно ли взять с собой?",
    faq3_a:"Да — take away доступен.",
    coords_label:"Координаты:",
    footer_h:"Забежать на кофе сегодня?",
    footer_p:"Открой карту, скопируй адрес и приходи.",
    footer_btn1:"Контакты",
    footer_btn2:"Наверх",
    footer_note:"Статический лендинг · GitHub Pages"
  },
  en: {
    skip:"Skip to content",
    menu:"Menu",
    brand_sub:"Berlin · Rixdorf · ex Geschwister Nothaft",
    nav_about:"About",
    nav_menu:"Menu",
    nav_reviews:"Reviews",
    nav_gallery:"Photos",
    nav_contacts:"Contacts",
    nav_visit:"Visit",
    hero_pill:"Specialty coffee · cozy meeting point",
    hero_h1:"A pink café you’ll want to linger in",
    hero_lead:"Coffee, pastries and sandwiches with cozy minimal vibes. Wi-Fi, indoor & outdoor seating, takeaway available.",
    hero_cta_map:"Open map",
    hero_cta_menu:"See menu",
    meta_addr_k:"Address",
    meta_today_k:"Today",
    meta_phone_k:"Phone",
    hero_note:"Previously known as <em>Geschwister Nothaft</em>.",
    hero_caption_left:"Coffee · pastries · sandwiches",
    hero_caption_right:"Takeaway · Outdoor seating",
    stat_rating:"rating (Google)",
    stat_wifi:"work-friendly",
    stat_price:"price hint",
    about_h2:"About",
    about_p:"Cozy café in Neukölln/Rixdorf: drinks (including matcha), pastries and sandwiches. People often mention friendly staff and a laptop-friendly setup.",
    card1_h:"Coffee & drinks",
    card1_p:"Classics plus favorites: cappuccino, matcha, juices.",
    card2_h:"Food",
    card2_p:"Pastries, croissants/berliners and grilled sandwiches.",
    card3_h:"Comfort",
    card3_p:"Wi-Fi, indoor/outdoor seating, takeaway, cards accepted.",
    banner_h:"Pop in for a quick coffee",
    banner_p:"Copy the address and open directions in Google Maps. Great for meeting up or working.",
    copy_addr:"Copy address",
    open_maps:"Open in Google Maps",
    menu_h2:"Menu (teaser)",
    menu_p:"A neat overview of categories. Send a menu screenshot if you want exact items & prices.",
    m1_h:"Coffee",
    m2_h:"Popular",
    m2_item2:"House pastries",
    m2_item3:"Sandwiches / grilled",
    m3_h:"Options",
    m3_item1:"Vegetarian options",
    m3_item2:"Desserts & pastries",
    m3_item3:"To-go format",
    menu_note:"Often mentioned: grilled sandwiches, croissants/berliner, cappuccino, matcha, juice.",
    rev_h2:"Reviews",
    rev_p:"Short paraphrases of public reviews (no copy-paste).",
    rev_hint:"Want a “Leave a review” block with Google/Tripadvisor buttons + UTM? I can add it.",
    gal_h2:"Photos",
    gal_p:"Put images into /assets (use the filenames shown).",
    loc_h2:"Contacts & directions",
    loc_card_h:"Contacts",
    loc_phone_k:"Phone",
    loc_addr_k:"Address",
    loc_hours_k:"Hours",
    loc_feat_k:"Features",
    route:"Directions",
    copy_coords:"Copy coordinates",
    faq1_q:"Can I work with a laptop?",
    faq1_a:"Yes — Wi-Fi and laptop-friendly vibes are often mentioned.",
    faq2_q:"Vegetarian options?",
    faq2_a:"Yes — vegetarian options are mentioned in reviews.",
    faq3_q:"Takeaway available?",
    faq3_a:"Yes — takeaway is available.",
    coords_label:"Coordinates:",
    footer_h:"Coffee today?",
    footer_p:"Open the map, copy the address, and drop by.",
    footer_btn1:"Contacts",
    footer_btn2:"Top",
    footer_note:"Static landing · GitHub Pages"
  },
  de: {
    skip:"Zum Inhalt springen",
    menu:"Menü",
    brand_sub:"Berlin · Rixdorf · ehem. Geschwister Nothaft",
    nav_about:"Über uns",
    nav_menu:"Menü",
    nav_reviews:"Bewertungen",
    nav_gallery:"Fotos",
    nav_contacts:"Kontakt",
    nav_visit:"Besuch",
    hero_pill:"Specialty Coffee · Cozy Meeting Point",
    hero_h1:"Ein pinkes Café zum Verweilen",
    hero_lead:"Kaffee, Gebäck und Sandwiches mit cozy-minimal Vibes. Wi-Fi, drinnen & draußen sitzen, Takeaway möglich.",
    hero_cta_map:"Karte öffnen",
    hero_cta_menu:"Menü ansehen",
    meta_addr_k:"Adresse",
    meta_today_k:"Heute",
    meta_phone_k:"Telefon",
    hero_note:"Früher bekannt als <em>Geschwister Nothaft</em>.",
    hero_caption_left:"Coffee · pastries · sandwiches",
    hero_caption_right:"Takeaway · Outdoor seating",
    stat_rating:"Bewertung (Google)",
    stat_wifi:"arbeitsfreundlich",
    stat_price:"Preis-Hinweis",
    about_h2:"Über das Café",
    about_p:"Gemütliches Café in Neukölln/Rixdorf: Drinks (inkl. Matcha), Gebäck und Sandwiches. Oft genannt: freundlicher Service und laptop-freundlich.",
    card1_h:"Kaffee & Drinks",
    card1_p:"Klassiker plus Favoriten: Cappuccino, Matcha, Säfte.",
    card2_h:"Essen",
    card2_p:"Gebäck, Croissants/Berliner und (grilled) Sandwiches.",
    card3_h:"Komfort",
    card3_p:"Wi-Fi, drinnen/draußen, Takeaway, Kartenzahlung.",
    banner_h:"Kurz auf einen Kaffee",
    banner_p:"Adresse kopieren und Route in Google Maps öffnen. Perfekt zum Treffen oder Arbeiten.",
    copy_addr:"Adresse kopieren",
    open_maps:"In Google Maps öffnen",
    menu_h2:"Menü (Teaser)",
    menu_p:"Eine saubere Übersicht. Für exakte Preise/Items: Menü-Screenshot schicken.",
    m1_h:"Kaffee",
    m2_h:"Beliebt",
    m2_item2:"Hausgemachtes Gebäck",
    m2_item3:"Sandwiches / grilled",
    m3_h:"Optionen",
    m3_item1:"Vegetarische Optionen",
    m3_item2:"Desserts & Gebäck",
    m3_item3:"To-go",
    menu_note:"Oft erwähnt: grilled sandwiches, croissants/berliner, cappuccino, matcha, juice.",
    rev_h2:"Bewertungen",
    rev_p:"Kurze Paraphrasen aus öffentlichen Reviews (kein Copy-Paste).",
    rev_hint:"Soll ich einen “Bewertung abgeben”-Block mit Google/Tripadvisor + UTM einbauen?",
    gal_h2:"Fotos",
    gal_p:"Bilder in /assets ablegen (Dateinamen wie gezeigt).",
    loc_h2:"Kontakt & Anfahrt",
    loc_card_h:"Kontakt",
    loc_phone_k:"Telefon",
    loc_addr_k:"Adresse",
    loc_hours_k:"Öffnungszeiten",
    loc_feat_k:"Features",
    route:"Route",
    copy_coords:"Koordinaten kopieren",
    faq1_q:"Kann man mit Laptop arbeiten?",
    faq1_a:"Ja — Wi-Fi und laptop-freundlich wird oft erwähnt.",
    faq2_q:"Vegetarische Optionen?",
    faq2_a:"Ja — vegetarische Optionen werden erwähnt.",
    faq3_q:"Takeaway möglich?",
    faq3_a:"Ja — Takeaway ist möglich.",
    coords_label:"Koordinaten:",
    footer_h:"Heute Kaffee?",
    footer_p:"Karte öffnen, Adresse kopieren und vorbeikommen.",
    footer_btn1:"Kontakt",
    footer_btn2:"Nach oben",
    footer_note:"Statische Landingpage · GitHub Pages"
  }
};

const REVIEWS = {
  ru: [
    { stars: 5, source: "RestaurantGuru", who: "Гости", when: "обобщение", text: "Часто хвалят grilled-сэндвичи и выпечку (круассаны/берлинеры), а из напитков — капучино и matcha." },
    { stars: 5, source: "LaptopFriendly", who: "Посетители", when: "обобщение", text: "Удобно поработать: Wi-Fi и достаточно места в будни. Атмосфера спокойная и “laptop-friendly”." },
    { stars: 4, source: "Tripadvisor", who: "Гость", when: "обзор", text: "Декор очень милый и локация классная, персонал внимательный. Но некоторые считают, что цены завышены." },
    { stars: 5, source: "Yelp", who: "Гость", when: "обзор", text: "Зашли случайно и остались довольны: приятный персонал, есть и indoor, и outdoor посадка." }
  ],
  en: [
    { stars: 5, source: "RestaurantGuru", who: "Visitors", when: "summary", text: "People often mention grilled sandwiches and pastries (croissants/berliners), plus cappuccino and matcha drinks." },
    { stars: 5, source: "LaptopFriendly", who: "Visitors", when: "summary", text: "Work-friendly on weekdays: stable Wi-Fi and enough space. Calm, laptop-friendly atmosphere." },
    { stars: 4, source: "Tripadvisor", who: "Guest", when: "review", text: "Super cute decor and great location, attentive staff. Some reviews feel it’s a bit pricey for the food." },
    { stars: 5, source: "Yelp", who: "Guest", when: "review", text: "A lovely find: pleasant staff and both indoor and outdoor seating." }
  ],
  de: [
    { stars: 5, source: "RestaurantGuru", who: "Gäste", when: "Zusammenfassung", text: "Oft genannt: grilled Sandwiches und Gebäck (Croissants/Berliner) sowie Cappuccino und Matcha." },
    { stars: 5, source: "LaptopFriendly", who: "Besucher", when: "Zusammenfassung", text: "Laptop-friendly: stabiles Wi-Fi und genug Platz unter der Woche. Ruhige Atmosphäre." },
    { stars: 4, source: "Tripadvisor", who: "Gast", when: "Review", text: "Sehr süßes Ambiente, top Lage, aufmerksames Team. Manche finden die Preise eher hoch." },
    { stars: 5, source: "Yelp", who: "Gast", when: "Review", text: "Ein schöner Fund: freundlicher Service und Sitzplätze drinnen wie draußen." }
  ]
};

function setYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = String(new Date().getFullYear());
}

function setTodayHours(lang) {
  const el = document.getElementById("todayHours");
  if (!el) return;

  const d = new Date();
  const day = d.getDay();
  const h = HOURS[day];
  const dayLabel = h.label[lang] || h.label.en;

  el.textContent = `${dayLabel}: ${h.open}–${h.close}`;
}

function wireNav() {
  const btn = document.getElementById("navBtn");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("isOpen");
    btn.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("isOpen");
      btn.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    const target = e.target;
    if (!(target instanceof Element)) return;
    if (!nav.classList.contains("isOpen")) return;
    if (nav.contains(target) || btn.contains(target)) return;
    nav.classList.remove("isOpen");
    btn.setAttribute("aria-expanded", "false");
  });
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    const ok = document.execCommand("copy");
    ta.remove();
    return ok;
  }
}

function wireCopyButtons(lang) {
  const copyAddress = document.getElementById("copyAddress");
  const copyCoords = document.getElementById("copyCoords");

  const labels = {
    ru: { addrOk:"Адрес скопирован ✓", addr:"Скопировать адрес", coordsOk:"Скопировано ✓", coords:"Скопировать координаты" },
    en: { addrOk:"Address copied ✓", addr:"Copy address", coordsOk:"Copied ✓", coords:"Copy coordinates" },
    de: { addrOk:"Adresse kopiert ✓", addr:"Adresse kopieren", coordsOk:"Kopiert ✓", coords:"Koordinaten kopieren" }
  };

  if (copyAddress) {
    copyAddress.addEventListener("click", async () => {
      const ok = await copyText("Schwarzastraße 9, 12055 Berlin");
      copyAddress.textContent = ok ? labels[lang].addrOk : "…";
      setTimeout(() => (copyAddress.textContent = labels[lang].addr), 1800);
    });
  }

  if (copyCoords) {
    copyCoords.addEventListener("click", async () => {
      const ok = await copyText("52.472729, 13.454635");
      copyCoords.textContent = ok ? labels[lang].coordsOk : "…";
      setTimeout(() => (copyCoords.textContent = labels[lang].coords), 1800);
    });
  }
}

function wireLightbox() {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCap");
  const closeBtn = document.getElementById("lightboxClose");
  const closeX = document.getElementById("lightboxX");
  const items = document.querySelectorAll(".gItem");
  if (!lb || !img || !cap || !items.length) return;

  const open = (src, alt) => {
    img.src = src;
    img.alt = alt || "";
    cap.textContent = alt || "";
    lb.classList.add("isOpen");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    lb.classList.remove("isOpen");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    img.src = "";
  };

  items.forEach(btn => {
    btn.addEventListener("click", () => {
      const src = btn.getAttribute("data-img");
      const alt = btn.getAttribute("data-alt");
      if (src) open(src, alt || "");
    });
  });

  closeBtn?.addEventListener("click", close);
  closeX?.addEventListener("click", close);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lb.classList.contains("isOpen")) close();
  });
}

function renderI18n(lang) {
  document.documentElement.lang = lang;
  const dict = I18N[lang] || I18N.en;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (!val) return;
    el.innerHTML = val; // includes <em> in a couple strings
  });

  const langLabel = document.getElementById("langLabel");
  if (langLabel) langLabel.textContent = lang.toUpperCase();

  setTodayHours(lang);
}

function wireLang() {
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  if (!btn || !menu) return;

  const toggle = (force) => {
    const isOpen = typeof force === "boolean" ? force : !menu.classList.contains("isOpen");
    menu.classList.toggle("isOpen", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
  };

  btn.addEventListener("click", () => toggle());

  menu.querySelectorAll("button[data-lang]").forEach(b => {
    b.addEventListener("click", () => {
      const lang = b.getAttribute("data-lang");
      if (!lang) return;
      localStorage.setItem("lang", lang);
      applyLang(lang);
      toggle(false);
    });
  });

  document.addEventListener("click", (e) => {
    const t = e.target;
    if (!(t instanceof Element)) return;
    if (menu.contains(t) || btn.contains(t)) return;
    toggle(false);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggle(false);
  });
}

function stars(n){
  return "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5-n);
}

let revIndex = 0;
let revTimer = null;

function renderReviews(lang){
  const track = document.getElementById("revTrack");
  const dots = document.getElementById("revDots");
  if (!track || !dots) return;

  const list = REVIEWS[lang] || REVIEWS.en;
  track.innerHTML = "";
  dots.innerHTML = "";

  list.forEach((r, i) => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.innerHTML = `
      <div class="reviewTop">
        <div class="stars" aria-label="${r.stars} stars">${stars(r.stars)}</div>
        <div class="badge">${r.source}</div>
      </div>
      <div class="quote">“${r.text}”</div>
      <div class="reviewMeta">
        <span>${r.who}</span>
        <span>·</span>
        <span>${r.when}</span>
      </div>
    `;
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot" + (i === 0 ? " isActive" : "");
    dot.setAttribute("aria-label", `Slide ${i+1}`);
    dot.addEventListener("click", () => goToReview(i, true));
    dots.appendChild(dot);
  });

  revIndex = 0;
  updateReviewPosition();
}

function updateReviewPosition(){
  const track = document.getElementById("revTrack");
  const dots = document.getElementById("revDots");
  if (!track || !dots) return;
  track.style.transform = `translateX(${-100 * revIndex}%)`;

  [...dots.children].forEach((d, i) => {
    d.classList.toggle("isActive", i === revIndex);
  });
}

function goToReview(i, userAction=false){
  const track = document.getElementById("revTrack");
  if (!track) return;
  const count = track.children.length || 1;
  revIndex = (i + count) % count;
  updateReviewPosition();

  if (userAction) restartAuto();
}

function nextReview(){ goToReview(revIndex + 1); }
function prevReview(){ goToReview(revIndex - 1); }

function restartAuto(){
  if (revTimer) clearInterval(revTimer);
  revTimer = setInterval(nextReview, 5500);
}

function wireReviews(){
  const prev = document.getElementById("revPrev");
  const next = document.getElementById("revNext");
  prev?.addEventListener("click", () => { prevReview(); restartAuto(); });
  next?.addEventListener("click", () => { nextReview(); restartAuto(); });

  // swipe on mobile
  const track = document.getElementById("revTrack");
  if (!track) return;
  let x0 = null;
  track.addEventListener("touchstart", (e) => { x0 = e.touches?.[0]?.clientX ?? null; }, {passive:true});
  track.addEventListener("touchend", (e) => {
    const x1 = e.changedTouches?.[0]?.clientX ?? null;
    if (x0 === null || x1 === null) return;
    const dx = x1 - x0;
    if (Math.abs(dx) < 40) return;
    if (dx < 0) nextReview(); else prevReview();
    restartAuto();
  }, {passive:true});
}

function applyLang(lang){
  renderI18n(lang);
  renderReviews(lang);
  // re-wire copy button labels for chosen lang
  // (listeners remain; text updates on click)
}

function init(){
  setYear();
  wireNav();
  wireLang();
  wireLightbox();
  wireReviews();

  const lang = localStorage.getItem("lang") || "ru";
  applyLang(lang);
  wireCopyButtons(lang);
  restartAuto();
}

init();
