/* =========================================
   STATE
   ========================================= */
let LANG = localStorage.getItem("lang") || "ru";

/* =========================================
   I18N (минимально под текущий index)
   ========================================= */
const I18N = {
  ru: {
    skip: "Перейти к содержимому",
    brand_sub: "Berlin · Rixdorf · ex Geschwister Nothaft",
    nav_about: "О месте",
    nav_menu: "Меню",
    nav_reviews: "Отзывы",
    nav_gallery: "Фото",
    nav_contacts: "Контакты",

    hero_pill: "Specialty coffee · уютная точка встреч",
    hero_h1: "Розовое кафе, где хочется задержаться",
    hero_lead: "Кофе, сэндвичи и атмосфера уюта. Можно с собакой 🐾",

    dog_friendly: "Dog friendly",
    takeaway: "Takeaway",
    outdoor: "Outdoor",

    about_h2: "О месте",
    about_p: "Уютное кафе в Neukölln / Rixdorf. Отлично подходит для встреч и работы.",

    menu_h2: "Меню",
    menu_p: "Цены по фото меню, размеры S / L",
    m1_h: "Напитки",
    food_h: "Еда",

    rev_h2: "Отзывы",
    rev_p: "Что говорят гости",

    leave_h: "Оставить отзыв",
    leave_p: "Это помогает кафе расти 🐾",

    gal_h2: "Фото",
    loc_h2: "Контакты"
  },

  en: {
    skip: "Skip to content",
    brand_sub: "Berlin · Rixdorf · ex Geschwister Nothaft",
    nav_about: "About",
    nav_menu: "Menu",
    nav_reviews: "Reviews",
    nav_gallery: "Gallery",
    nav_contacts: "Contacts",

    hero_pill: "Specialty coffee · cozy meeting point",
    hero_h1: "A pink café you want to stay in",
    hero_lead: "Coffee, sandwiches and cozy vibes. Dogs are welcome 🐾",

    dog_friendly: "Dog friendly",
    takeaway: "Takeaway",
    outdoor: "Outdoor",

    about_h2: "About",
    about_p: "A cozy café in Neukölln / Rixdorf. Great for meetings and laptop time.",

    menu_h2: "Menu",
    menu_p: "Prices from menu photo, S / L sizes",
    m1_h: "Drinks",
    food_h: "Food",

    rev_h2: "Reviews",
    rev_p: "What guests say",

    leave_h: "Leave a review",
    leave_p: "It helps the café grow 🐾",

    gal_h2: "Gallery",
    loc_h2: "Contacts"
  },

  de: {
    skip: "Zum Inhalt springen",
    brand_sub: "Berlin · Rixdorf · ehem. Geschwister Nothaft",
    nav_about: "Über uns",
    nav_menu: "Menü",
    nav_reviews: "Bewertungen",
    nav_gallery: "Galerie",
    nav_contacts: "Kontakt",

    hero_pill: "Specialty Coffee · gemütlicher Treffpunkt",
    hero_h1: "Ein pinkes Café zum Verweilen",
    hero_lead: "Kaffee, Sandwiches und gemütliche Stimmung. Hunde willkommen 🐾",

    dog_friendly: "Hundefreundlich",
    takeaway: "Takeaway",
    outdoor: "Außenplätze",

    about_h2: "Über uns",
    about_p: "Gemütliches Café in Neukölln / Rixdorf. Perfekt für Treffen und Laptop-Zeit.",

    menu_h2: "Menü",
    menu_p: "Preise laut Menüfoto, Größen S / L",
    m1_h: "Getränke",
    food_h: "Essen",

    rev_h2: "Bewertungen",
    rev_p: "Was Gäste sagen",

    leave_h: "Bewertung hinterlassen",
    leave_p: "Das hilft dem Café zu wachsen 🐾",

    gal_h2: "Galerie",
    loc_h2: "Kontakt"
  }
};

/* =========================================
   HELPERS
   ========================================= */
function flagForLang(lang){
  if (lang === "ru") return "🇷🇺";
  if (lang === "en") return "🇬🇧";
  return "🇩🇪";
}

function applyI18n(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    const value = I18N?.[lang]?.[key];
    if (value) el.textContent = value;
  });

  const label = document.getElementById("langLabel");
  const flag = document.getElementById("langFlag");
  if (label) label.textContent = lang.toUpperCase();
  if (flag) flag.textContent = flagForLang(lang);
}

function formatEuro(v, lang){
  const n = Number(v);
  if (Number.isNaN(n)) return "€—";
  const s = (lang === "ru" || lang === "de")
    ? n.toFixed(1).replace(".", ",")
    : n.toFixed(1);
  return `€${s}`;
}

function renderPrices(lang){
  document.querySelectorAll(".price").forEach(el=>{
    const p1 = el.dataset.price;
    const p2 = el.dataset.price2;
    if (!p1) return;

    if (p2){
      el.innerHTML = `
        <span class="vol"><span class="vTag">S</span>${formatEuro(p1,lang)}</span>
        <span class="vol"><span class="vTag">L</span>${formatEuro(p2,lang)}</span>
      `;
    } else {
      el.innerHTML = `<span class="vol">${formatEuro(p1,lang)}</span>`;
    }
  });
}

/* =========================================
   LANG SWITCH (FIXED)
   ========================================= */
function wireLang(){
  const wrap = document.querySelector(".lang");
  const btn = document.getElementById("langBtn");
  const menu = document.getElementById("langMenu");

  if (!wrap || !btn || !menu) return;

  const close = ()=>{
    wrap.classList.remove("isOpen");
    btn.setAttribute("aria-expanded","false");
  };
  const open = ()=>{
    wrap.classList.add("isOpen");
    btn.setAttribute("aria-expanded","true");
  };

  btn.addEventListener("click",(e)=>{
    e.preventDefault();
    e.stopPropagation();
    wrap.classList.contains("isOpen") ? close() : open();
  });

  menu.querySelectorAll("button[data-lang]").forEach(item=>{
    item.addEventListener("click",(e)=>{
      e.preventDefault();
      e.stopPropagation();
      const newLang = item.getAttribute("data-lang");
      if (!newLang) return;

      LANG = newLang;
      localStorage.setItem("lang", LANG);

      applyAll(LANG);
      close();
    });
  });

  document.addEventListener("click", close);
  document.addEventListener("keydown", (e)=>{ if (e.key === "Escape") close(); });
}

/* =========================================
   MOBILE NAV
   ========================================= */
function wireNav(){
  const btn = document.getElementById("navBtn");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", ()=>{
    nav.classList.toggle("isOpen");
  });

  nav.querySelectorAll("a").forEach(a=>{
    a.addEventListener("click", ()=>nav.classList.remove("isOpen"));
  });
}

/* =========================================
   REVIEWS CAROUSEL (FIXED)
   ========================================= */
const REVIEWS = [
  {
    text:{
      ru:"Очень уютно: спокойно, красиво, приятно посидеть с кофе.",
      en:"Very cozy: calm, pretty, perfect to sit with a coffee.",
      de:"Sehr gemütlich: ruhig, schön, perfekt für einen Kaffee."
    },
    author:"Google",
    meta:{ru:"атмосфера", en:"vibe", de:"Atmosphäre"}
  },
  {
    text:{
      ru:"Хорошее место для ноутбука: Wi-Fi и много воздуха.",
      en:"Great for laptop time: Wi-Fi and plenty of space.",
      de:"Gut zum Arbeiten: WLAN und viel Platz."
    },
    author:"Restaurant Guru",
    meta:{ru:"laptop-friendly", en:"laptop-friendly", de:"laptop-friendly"}
  },
  {
    text:{
      ru:"Капучино и сэндвичи — популярный выбор гостей: быстро и вкусно.",
      en:"Cappuccino and sandwiches are a popular pick — quick and tasty.",
      de:"Cappuccino und Sandwiches sind beliebt — schnell und lecker."
    },
    author:"Local",
    meta:{ru:"кофе + еда", en:"coffee + food", de:"Kaffee + Essen"}
  },
  {
    text:{
      ru:"Место “про детали”: свет, растения, ощущение домашнего уюта.",
      en:"All about the details: light, plants, and a homey vibe.",
      de:"Es geht um Details: Licht, Pflanzen und gemütliche Stimmung."
    },
    author:"Google",
    meta:{ru:"детали", en:"details", de:"Details"}
  }
];

let revIndex = 0;

function renderReviews(lang){
  const track = document.getElementById("revTrack");
  const dotsWrap = document.getElementById("revDots");
  if (!track || !dotsWrap) return;

  track.innerHTML = "";
  dotsWrap.innerHTML = "";

  REVIEWS.forEach((r,i)=>{
    const slide = document.createElement("article");
    slide.className = "review";
    slide.innerHTML = `
      <p>${r.text[lang]}</p>
      <div class="review__author">— ${r.author}</div>
      <div class="review__meta">${r.meta[lang]}</div>
    `;
    track.appendChild(slide);

    const dot = document.createElement("button");
    dot.className = "dot";
    dot.type = "button";
    dot.addEventListener("click", ()=>{revIndex=i; updateCarousel();});
    dotsWrap.appendChild(dot);
  });

  updateCarousel();
  wireCarouselButtons();
  wireCarouselSwipe();
}

function updateCarousel(){
  const track = document.getElementById("revTrack");
  const dots = document.querySelectorAll("#revDots .dot");
  if (!track) return;

  track.style.transform = `translateX(-${revIndex * 100}%)`;
  dots.forEach((d,i)=>d.classList.toggle("active", i===revIndex));
}

function prevReview(){
  revIndex = (revIndex + REVIEWS.length - 1) % REVIEWS.length;
  updateCarousel();
}
function nextReview(){
  revIndex = (revIndex + 1) % REVIEWS.length;
  updateCarousel();
}

function wireCarouselButtons(){
  const prev = document.getElementById("revPrev");
  const next = document.getElementById("revNext");
  if (prev) prev.onclick = prevReview;
  if (next) next.onclick = nextReview;
}

function wireCarouselSwipe(){
  const viewport = document.getElementById("revViewport");
  if (!viewport) return;

  let startX = 0;
  let dx = 0;
  let down = false;

  viewport.onpointerdown = (e)=>{
    down = true;
    startX = e.clientX;
    dx = 0;
    viewport.setPointerCapture?.(e.pointerId);
  };

  viewport.onpointermove = (e)=>{
    if (!down) return;
    dx = e.clientX - startX;
  };

  viewport.onpointerup = ()=>{
    if (!down) return;
    down = false;
    if (Math.abs(dx) > 50){
      dx < 0 ? nextReview() : prevReview();
    }
  };
}

/* =========================================
   LIGHTBOX (gallery)
   ========================================= */
function ensureLightbox(){
  if (document.getElementById("lightbox")) return;

  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.id = "lightbox";
  lb.innerHTML = `
    <button class="lightbox__backdrop" id="lightboxClose" aria-label="Close"></button>
    <figure class="lightbox__panel">
      <img id="lightboxImg" alt="" />
      <figcaption id="lightboxCap"></figcaption>
      <button class="lightbox__x" id="lightboxX" aria-label="Close">×</button>
    </figure>
  `;
  document.body.appendChild(lb);
}

function wireLightbox(){
  ensureLightbox();

  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lightboxImg");
  const cap = document.getElementById("lightboxCap");

  document.querySelectorAll(".gItem").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const src = btn.dataset.img;
      if (!src) return;
      img.src = src;
      cap.textContent = btn.getAttribute("data-alt") || "";
      lb.classList.add("isOpen");
    });
  });

  const close = ()=>{
    lb.classList.remove("isOpen");
    img.src = "";
  };

  document.getElementById("lightboxClose").onclick = close;
  document.getElementById("lightboxX").onclick = close;
  document.addEventListener("keydown",(e)=>{ if(e.key==="Escape") close(); });
}

/* =========================================
   APPLY ALL
   ========================================= */
function applyAll(lang){
  applyI18n(lang);
  renderPrices(lang);
  renderReviews(lang);
}

/* =========================================
   INIT
   ========================================= */
document.getElementById("year").textContent = new Date().getFullYear();

wireLang();
wireNav();
wireLightbox();

applyAll(LANG);
