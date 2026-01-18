/* ===============================
   STATE
   =============================== */
const HOURS = {
  0: { label: {ru:"Воскресенье", en:"Sunday", de:"Sonntag"}, open:"09:00", close:"18:00" },
  1: { label: {ru:"Понедельник", en:"Monday", de:"Montag"}, open:"08:00", close:"18:00" },
  2: { label: {ru:"Вторник", en:"Tuesday", de:"Dienstag"}, open:"08:00", close:"18:00" },
  3: { label: {ru:"Среда", en:"Wednesday", de:"Mittwoch"}, open:"08:00", close:"18:00" },
  4: { label: {ru:"Четверг", en:"Thursday", de:"Donnerstag"}, open:"08:00", close:"18:00" },
  5: { label: {ru:"Пятница", en:"Friday", de:"Freitag"}, open:"08:00", close:"18:00" },
  6: { label: {ru:"Суббота", en:"Saturday", de:"Samstag"}, open:"09:00", close:"18:00" }
};

let LANG = localStorage.getItem("lang") || "ru";

/* ===============================
   I18N
   =============================== */
const I18N = {
  ru:{
    skip:"Перейти к содержимому",
    brand_sub:"Berlin · Rixdorf · ex Geschwister Nothaft",
    menu:"Меню",
    nav_about:"О месте",
    nav_menu:"Меню",
    nav_reviews:"Отзывы",
    nav_gallery:"Фото",
    nav_contacts:"Контакты",
    nav_visit:"Как зайти",

    hero_pill:"Specialty coffee · уютная точка встреч",
    hero_h1:"Розовое кафе, где хочется задержаться",
    hero_lead:"Кофе, выпечка и сэндвичи в атмосфере “cozy & minimal”. Wi-Fi, посадка внутри и на улице, можно взять с собой.",
    hero_cta_map:"Открыть карту",
    hero_cta_menu:"Посмотреть меню",
    hero_caption_left:"Coffee · pastries · sandwiches",
    hero_caption_right:"Takeaway · Outdoor seating",
    hero_note:"Ранее место было известно как Geschwister Nothaft.",

    meta_addr_k:"Адрес",
    meta_today_k:"Сегодня",
    meta_phone_k:"Телефон",

    dog_friendly:"Dog friendly",
    takeaway:"Takeaway",
    outdoor:"Outdoor",
    cards:"Cards",

    stat_rating:"оценка (Google)",
    stat_wifi:"удобно работать",
    stat_price:"ориентир по чеку",

    about_h2:"О месте",
    about_p:"Уютное кафе в Neukölln/Rixdorf: напитки (включая matcha), выпечка и сэндвичи. Формат laptop-friendly.",
    card1_h:"Кофе и напитки",
    card1_p:"Классика и любимые позиции гостей.",
    card2_h:"Еда",
    card2_p:"Сэндвичи, overnight oats и chia mango.",
    card3_h:"Комфорт",
    card3_p:"Wi-Fi, посадка внутри/снаружи, take away, dog friendly 🐾.",

    banner_h:"Зайти на кофе по пути",
    banner_p:"Скопируй адрес и открой маршрут в Google Maps.",
    copy_addr:"Скопировать адрес",
    open_maps:"Открыть в Google Maps",

    menu_h2:"Меню",
    menu_p:"Цены добавлены по фото меню. Для части напитков указаны два объёма (S/L).",
    m1_h:"Напитки",
    food_h:"Еда",
    food_sandwiches:"Sandwiches",
    food_sandwiches_sub:"выбери начинку",
    food_oats_hint:"холодная, сытная, идеально к кофе",
    food_chia_hint:"лёгкая и свежая",
    m3_h:"Фишки",
    menu_note:"Цены указаны в EUR. Для некоторых напитков есть размеры S/L.",

    rev_h2:"Отзывы",
    rev_p:"Короткие пересказы отзывов из открытых источников.",
    rev_hint:"Могу добавить кнопки «оставить отзыв».",

    gal_h2:"Фото",
    gal_p:"Изображения лежат в папке /assets.",

    loc_h2:"Контакты и как добраться",
    loc_card_h:"Контакты",
    loc_phone_k:"Телефон",
    loc_addr_k:"Адрес",
    loc_hours_k:"Часы",
    loc_feat_k:"Особенности",
    route:"Маршрут",
    copy_coords:"Скопировать координаты",

    faq1_q:"Можно ли работать с ноутбуком?",
    faq1_a:"Да — Wi-Fi и спокойная атмосфера подходят для работы.",
    faq2_q:"Dog friendly?",
    faq2_a:"Да — можно приходить с собакой 🐾.",
    faq3_q:"Можно ли взять с собой?",
    faq3_a:"Да — take away доступен.",

    footer_h:"Забежать на кофе сегодня?",
    footer_p:"Открой карту, скопируй адрес и приходи.",
    footer_btn1:"Контакты",
    footer_btn2:"Наверх",
    footer_note:"Статический лендинг · GitHub Pages",
    coords_label:"Координаты:"
  },

  en:{
    skip:"Skip to content",
    brand_sub:"Berlin · Rixdorf · ex Geschwister Nothaft",
    menu:"Menu",
    nav_about:"About",
    nav_menu:"Menu",
    nav_reviews:"Reviews",
    nav_gallery:"Gallery",
    nav_contacts:"Contacts",
    nav_visit:"Visit",

    hero_pill:"Specialty coffee · cozy meeting point",
    hero_h1:"A pink café you want to stay in",
    hero_lead:"Coffee, pastries & sandwiches in a cozy minimal vibe. Wi-Fi, indoor & outdoor seating, takeaway.",
    hero_cta_map:"Open map",
    hero_cta_menu:"View menu",
    hero_caption_left:"Coffee · pastries · sandwiches",
    hero_caption_right:"Takeaway · Outdoor seating",
    hero_note:"Previously known as Geschwister Nothaft.",

    meta_addr_k:"Address",
    meta_today_k:"Today",
    meta_phone_k:"Phone",

    dog_friendly:"Dog friendly",
    takeaway:"Takeaway",
    outdoor:"Outdoor",
    cards:"Cards",

    stat_rating:"rating (Google)",
    stat_wifi:"good for work",
    stat_price:"price range",

    about_h2:"About",
    about_p:"A cozy café in Neukölln/Rixdorf with drinks, pastries and sandwiches. Laptop-friendly format.",
    card1_h:"Coffee & drinks",
    card1_p:"Classics and guest favorites.",
    card2_h:"Food",
    card2_p:"Sandwiches, overnight oats and chia mango.",
    card3_h:"Comfort",
    card3_p:"Wi-Fi, indoor/outdoor seating, takeaway, dog friendly 🐾.",

    banner_h:"Grab a coffee on the way",
    banner_p:"Copy the address and open the route in Google Maps.",
    copy_addr:"Copy address",
    open_maps:"Open Google Maps",

    menu_h2:"Menu",
    menu_p:"Prices from menu photo. Some drinks have two sizes (S/L).",
    m1_h:"Drinks",
    food_h:"Food",
    food_sandwiches:"Sandwiches",
    food_sandwiches_sub:"choose one",
    food_oats_hint:"cold, filling, perfect with coffee",
    food_chia_hint:"light & fresh",
    m3_h:"Features",
    menu_note:"Prices in EUR. Some drinks have S/L sizes.",

    rev_h2:"Reviews",
    rev_p:"Short summaries from public reviews.",
    rev_hint:"Can add links to leave a review.",

    gal_h2:"Gallery",
    gal_p:"Images are stored in /assets.",

    loc_h2:"Contacts & directions",
    loc_card_h:"Contacts",
    loc_phone_k:"Phone",
    loc_addr_k:"Address",
    loc_hours_k:"Hours",
    loc_feat_k:"Features",
    route:"Route",
    copy_coords:"Copy coordinates",

    faq1_q:"Laptop friendly?",
    faq1_a:"Yes — Wi-Fi and calm atmosphere.",
    faq2_q:"Dog friendly?",
    faq2_a:"Yes 🐾.",
    faq3_q:"Takeaway available?",
    faq3_a:"Yes.",

    footer_h:"Coffee today?",
    footer_p:"Open the map, copy the address and come by.",
    footer_btn1:"Contacts",
    footer_btn2:"Top",
    footer_note:"Static landing · GitHub Pages",
    coords_label:"Coordinates:"
  },

  de:{
    skip:"Zum Inhalt springen",
    brand_sub:"Berlin · Rixdorf · ehem. Geschwister Nothaft",
    menu:"Menü",
    nav_about:"Über uns",
    nav_menu:"Menü",
    nav_reviews:"Bewertungen",
    nav_gallery:"Galerie",
    nav_contacts:"Kontakt",
    nav_visit:"Besuchen",

    hero_pill:"Specialty Coffee · gemütlicher Treffpunkt",
    hero_h1:"Ein pinkes Café zum Verweilen",
    hero_lead:"Kaffee, Gebäck & Sandwiches in gemütlich-minimalem Stil. WLAN, drinnen & draußen, Takeaway.",
    hero_cta_map:"Karte öffnen",
    hero_cta_menu:"Menü ansehen",
    hero_caption_left:"Coffee · pastries · sandwiches",
    hero_caption_right:"Takeaway · Outdoor seating",
    hero_note:"Früher bekannt als Geschwister Nothaft.",

    meta_addr_k:"Adresse",
    meta_today_k:"Heute",
    meta_phone_k:"Telefon",

    dog_friendly:"Hundefreundlich",
    takeaway:"Takeaway",
    outdoor:"Außenplätze",
    cards:"Kartenzahlung",

    stat_rating:"Bewertung (Google)",
    stat_wifi:"gut zum Arbeiten",
    stat_price:"Preisspanne",

    about_h2:"Über uns",
    about_p:"Gemütliches Café in Neukölln/Rixdorf mit Getränken, Gebäck und Sandwiches.",
    card1_h:"Kaffee & Getränke",
    card1_p:"Klassiker und Favoriten.",
    card2_h:"Essen",
    card2_p:"Sandwiches, Overnight Oats und Chia Mango.",
    card3_h:"Komfort",
    card3_p:"WLAN, innen & außen, Takeaway, hundefreundlich 🐾.",

    banner_h:"Kaffee unterwegs",
    banner_p:"Adresse kopieren und Route öffnen.",
    copy_addr:"Adresse kopieren",
    open_maps:"Google Maps öffnen",

    menu_h2:"Menü",
    menu_p:"Preise laut Menüfoto. Einige Getränke in zwei Größen (S/L).",
    m1_h:"Getränke",
    food_h:"Essen",
    food_sandwiches:"Sandwiches",
    food_sandwiches_sub:"bitte auswählen",
    food_oats_hint:"kalt, sättigend, perfekt zum Kaffee",
    food_chia_hint:"leicht & frisch",
    m3_h:"Highlights",
    menu_note:"Preise in EUR. Einige Getränke mit S/L.",

    rev_h2:"Bewertungen",
    rev_p:"Kurze Zusammenfassungen öffentlicher Bewertungen.",
    rev_hint:"Links zum Bewerten möglich.",

    gal_h2:"Galerie",
    gal_p:"Bilder liegen im Ordner /assets.",

    loc_h2:"Kontakt & Anfahrt",
    loc_card_h:"Kontakt",
    loc_phone_k:"Telefon",
    loc_addr_k:"Adresse",
    loc_hours_k:"Öffnungszeiten",
    loc_feat_k:"Features",
    route:"Route",
    copy_coords:"Koordinaten kopieren",

    faq1_q:"Laptop-freundlich?",
    faq1_a:"Ja — WLAN und ruhige Atmosphäre.",
    faq2_q:"Hundefreundlich?",
    faq2_a:"Ja 🐾.",
    faq3_q:"Takeaway?",
    faq3_a:"Ja.",

    footer_h:"Heute einen Kaffee?",
    footer_p:"Karte öffnen, Adresse kopieren und vorbeikommen.",
    footer_btn1:"Kontakt",
    footer_btn2:"Nach oben",
    footer_note:"Statische Seite · GitHub Pages",
    coords_label:"Koordinaten:"
  }
};

/* ===============================
   HELPERS
   =============================== */
function formatEuro(v, lang){
  const n = Number(v);
  if (Number.isNaN(n)) return "€—";
  const s = (lang === "ru" || lang === "de")
    ? n.toFixed(1).replace(".", ",")
    : n.toFixed(1);
  return `€${s}`;
}

function applyI18n(lang){
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    if (I18N[lang] && I18N[lang][k]) el.innerHTML = I18N[lang][k];
  });
  document.getElementById("langLabel").textContent = lang.toUpperCase();
}

function setTodayHours(lang){
  const el = document.getElementById("todayHours");
  if (!el) return;
  const d = new Date();
  const h = HOURS[d.getDay()];
  el.textContent = `${h.label[lang]}: ${h.open}–${h.close}`;
}

function renderPrices(lang){
  document.querySelectorAll(".price").forEach(el=>{
    const p1 = el.dataset.price;
    const p2 = el.dataset.price2;
    if (p2){
      el.innerHTML = `
        <span class="vol"><span class="vTag">S</span>${formatEuro(p1,lang)}</span>
        <span class="vol"><span class="vTag">L</span>${formatEuro(p2,lang)}</span>`;
    } else {
      el.innerHTML = `<span class="vol">${formatEuro(p1,lang)}</span>`;
    }
  });
  document.querySelectorAll(".priceInline").forEach(el=>{
    el.innerHTML = `+ ${el.dataset.label} ${formatEuro(el.dataset.price,lang)}`;
  });
}

/* ===============================
   REVIEWS (carousel)
   =============================== */
const REVIEWS = [
  {text:{ru:"Очень уютно, вкусный кофе и приятная атмосфера.",
         en:"Very cozy place with great coffee and vibe.",
         de:"Sehr gemütlich, toller Kaffee und Atmosphäre."},
   author:"Google"},
  {text:{ru:"Отличное место поработать с ноутбуком.",
         en:"Perfect spot to work with a laptop.",
         de:"Perfekt zum Arbeiten mit Laptop."},
   author:"Restaurant Guru"},
  {text:{ru:"Люблю их капучино и сэндвичи.",
         en:"Love their cappuccino and sandwiches.",
         de:"Ich liebe Cappuccino und Sandwiches."},
   author:"Local review"}
];

let revIndex = 0;

function renderReviews(lang){
  const track = document.getElementById("revTrack");
  const dots = document.getElementById("revDots");
  if (!track || !dots) return;

  track.innerHTML = "";
  dots.innerHTML = "";

  REVIEWS.forEach((r,i)=>{
    const div = document.createElement("div");
    div.className = "review";
    div.innerHTML = `<p>${r.text[lang]}</p><div class="review__author">— ${r.author}</div>`;
    track.appendChild(div);

    const d = document.createElement("button");
    d.className = "dot";
    d.onclick = ()=>{revIndex=i; updateCarousel()};
    dots.appendChild(d);
  });

  updateCarousel();
}

function updateCarousel(){
  const track = document.getElementById("revTrack");
  const dots = document.querySelectorAll(".dot");
  track.style.transform = `translateX(-${revIndex*100}%)`;
  dots.forEach((d,i)=>d.classList.toggle("active", i===revIndex));
}

/* ===============================
   UI WIRING
   =============================== */
function wireLang(){
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");
  btn.onclick = ()=>btn.parentElement.classList.toggle("isOpen");
  menu.querySelectorAll("button").forEach(b=>{
    b.onclick = ()=>{
      LANG = b.dataset.lang;
      localStorage.setItem("lang", LANG);
      applyLang(LANG);
      btn.parentElement.classList.remove("isOpen");
    };
  });
}

function wireNav(){
  const btn = document.getElementById("navBtn");
  const nav = document.getElementById("nav");
  btn.onclick = ()=>nav.classList.toggle("isOpen");
}

function wireCopy(){
  const addrBtn = document.getElementById("copyAddress");
  const coordBtn = document.getElementById("copyCoords");

  if (addrBtn){
    addrBtn.onclick = ()=>{
      navigator.clipboard.writeText("Schwarzastraße 9, 12055 Berlin");
      addrBtn.textContent = "✓";
      setTimeout(()=>applyI18n(LANG),1200);
    };
  }
  if (coordBtn){
    coordBtn.onclick = ()=>{
      navigator.clipboard.writeText("52.472729, 13.454635");
      coordBtn.textContent = "✓";
      setTimeout(()=>applyI18n(LANG),1200);
    };
  }
}

function wireLightbox(){
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCap");

  document.querySelectorAll(".gItem").forEach(b=>{
    b.onclick = ()=>{
      img.src = b.dataset.img;
      cap.textContent = b.dataset.alt || "";
      lb.classList.add("isOpen");
    };
  });
  document.getElementById("lightboxClose").onclick =
  document.getElementById("lightboxX").onclick = ()=>lb.classList.remove("isOpen");
}

/* ===============================
   INIT
   =============================== */
function applyLang(lang){
  applyI18n(lang);
  setTodayHours(lang);
  renderPrices(lang);
  renderReviews(lang);
}

document.getElementById("year").textContent = new Date().getFullYear();

wireLang();
wireNav();
wireCopy();
wireLightbox();
applyLang(LANG);

/* carousel buttons */
document.getElementById("revPrev").onclick = ()=>{revIndex=(revIndex+REVIEWS.length-1)%REVIEWS.length;updateCarousel()};
document.getElementById("revNext").onclick = ()=>{revIndex=(revIndex+1)%REVIEWS.length;updateCarousel()};
