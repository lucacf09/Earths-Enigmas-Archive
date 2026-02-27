// =============================
// CONFIG (assets paths)
// =============================
const ASSETS_BASE = "./assets";
const VIDEO_SRC = `${ASSETS_BASE}/nemo.mp4`;
const INTRO_SVG_SRC = `${ASSETS_BASE}/EEC-logo.svg`;

// =============================
// DEV MODE
// =============================
function isDevMode(){
  const params = new URLSearchParams(window.location.search);
  return params.get("dev") === DEV_TOKEN;
}

// =============================
// HELPERS
// =============================
function glitch(text, intensity = 0.4){
  const glyphs = ["█","▓","▒","░","#","/","_"];
  let out = "";
  const s = String(text);
  for (let i = 0; i < s.length; i++){
    const ch = s[i];
    if (ch === " " || ch === "\n" || ch === "\t"){ out += ch; continue; }
    if (Math.random() < intensity && ch !== "-") out += glyphs[Math.floor(Math.random() * glyphs.length)];
    else out += ch;
  }
  return out;
}
function fullyCorruptLabel(label){ return String(label).replace(/[^\s]/g, "█"); }
function sleep(ms){ return new Promise(r => setTimeout(r, ms)); }

function stashAndClear(el){
  if (!el) return;
  el.dataset.full = el.textContent;
  el.textContent = "";
}
function reveal(el){
  if (!el) return;
  el.classList.remove("prehide");
}

let SKIP_BOOT = false;
function hideSkipButton(){
  const btn = document.getElementById("skipBootBtn");
  if (btn) btn.style.display = "none";
}

function typeFromData(el, speed = 10){
  if (!el) return Promise.resolve();
  const full = el.dataset.full ?? "";
  el.textContent = "";

  if (SKIP_BOOT){
    el.textContent = full;
    el.classList.remove("typeCursor");
    return Promise.resolve();
  }

  el.classList.add("typeCursor");
  return new Promise(resolve => {
    let i = 0;
    const tick = () => {
      if (SKIP_BOOT){
        el.textContent = full;
        el.classList.remove("typeCursor");
        resolve();
        return;
      }

      el.textContent += full[i] || "";
      i++;

      if (i >= full.length){
        el.classList.remove("typeCursor");
        resolve();
        return;
      }
      setTimeout(tick, speed);
    };
    tick();
  });
}

async function typeLineWithDate(dateEl, sepEl, msgEl, dateSpeed = 8, msgSpeed = 8){
  await typeFromData(dateEl, dateSpeed);
  if (sepEl) sepEl.textContent = " · ";
  await typeFromData(msgEl, msgSpeed);
}

// =============================
// MODALS
// =============================
function setFileActions({ showEnterKey = false } = {}){
  const actions = document.getElementById("fileActions");
  if (!actions) return;
  actions.setAttribute("aria-hidden", showEnterKey ? "false" : "true");
}

function openNemoModal(){
  const overlay = document.getElementById("videoModal");
  const video = document.getElementById("nemoVideo");
  if (!overlay || !video) return;

  overlay.setAttribute("aria-hidden","false");
  video.muted = false;
  video.volume = 1;

  if (!video.currentSrc) video.src = VIDEO_SRC;
  try{ video.currentTime = 0; }catch(_e){}

  const p = video.play();
  if (p && typeof p.catch === "function") p.catch(() => {});
}

function closeNemoModal(){
  const overlay = document.getElementById("videoModal");
  const video = document.getElementById("nemoVideo");
  if (!overlay || !video) return;

  overlay.setAttribute("aria-hidden","true");
  try{ video.pause(); }catch(_e){}
}

function openFileModal(title, body, { showEnterKey = false } = {}){
  const overlay = document.getElementById("fileModal");
  const t = document.getElementById("fileTitle");
  const b = document.getElementById("fileBody");
  if (!overlay || !t || !b) return;

  t.textContent = title;
  b.textContent = body;
  setFileActions({ showEnterKey });
  overlay.setAttribute("aria-hidden","false");
}

function closeFileModal(){
  const overlay = document.getElementById("fileModal");
  if (!overlay) return;
  overlay.setAttribute("aria-hidden","true");
  setFileActions({ showEnterKey:false });
}

// =============================
// NEMO UNLOCK (dev bypass)
// =============================
function isNemoUnlocked(){
  if (isDevMode()) return true;
  try{
    return localStorage.getItem(NEMO_UNLOCK_STORAGE_KEY) === "1";
  }catch(_e){
    return false;
  }
}
function unlockNemo(){
  try{ localStorage.setItem(NEMO_UNLOCK_STORAGE_KEY, "1"); }catch(_e){}
}
function relockNemo(){
  try{ localStorage.removeItem(NEMO_UNLOCK_STORAGE_KEY); }catch(_e){}
}

function openEncryptedNemoFile(){
  if (isNemoUnlocked()){
    openFileModal("NEMO_03 · DECRYPTED FILE", NEMO_FILE_TEXT, { showEnterKey:false });
    return;
  }
  openFileModal("NEMO_03 · RESTRICTED FILE", NEMO_PREVIEW_TEXT, { showEnterKey:true });
}

function revealOperatorKey(){
  openFileModal("SYSTEM CACHE RECOVERY", [
    "LOCAL HEADER CACHE RESTORED",
    "—",
    "RECOVERED CREDENTIAL:",
    "DECRYPTION KEY: " + NEMO_KEY,
    "—",
    "NOTICE:",
    "  This action has been logged.",
  ].join("\n"), { showEnterKey:false });
}

// =============================
// ENTITY LIST
// =============================
function getEntitiesInDevOrder(){
  const byName = new Map(ENTITIES.map(e => [e.name, e]));
  return DEV_ENTITY_ORDER.map(name => byName.get(name)).filter(Boolean);
}

function renderEntitiesWithLed(){
  const entityList = document.getElementById("entityList");
  if (!entityList) return;

  entityList.innerHTML = "";
  const ordered = getEntitiesInDevOrder();

  ordered.forEach((e, idx) => {
    const li = document.createElement("li");
    li.className = "entityItem ledOn";
    li.style.animationDelay = `${120 + idx*80}ms`;

    const isNemo = e.name === "NEMO_03";
    const dev = isDevMode();

    const displayName = dev ? e.name : (isNemo ? e.name : fullyCorruptLabel(e.name));
    const dotClass = isNemo ? "dotGreen" : "dotRed";

    li.innerHTML = `
      <div class="entityNameLine">
        <span class="entityDot ${dotClass}" aria-hidden="true"></span>
        <div>
          <div><span class="entityId">${e.id}</span> · ${displayName}</div>
          <div class="entityStatus">STATUS: ${e.status}</div>
        </div>
      </div>
    `;

    const clickable = dev || isNemo;
    li.style.cursor = clickable ? "pointer" : "default";

    if (clickable){
      li.addEventListener("click", () => {
        if (isNemo){
          openEncryptedNemoFile();
          return;
        }
        if (!dev) return;
        const text = ENTITY_FILES[e.name] || WIP_FILE_TEXT(e.name);
        openFileModal(`${e.name} · ENTITY FILE`, text, { showEnterKey:false });
      });
    }

    // IMPORTANT: append to DOM
    entityList.appendChild(li);
  });
}

// =============================
// INTRO (SVG DRAW) -> BOOT
// =============================
async function loadInlineSVG(url, { timeoutMs = 1200 } = {}){
  const wrap = document.getElementById("introGlobeWrap");
  if (!wrap) return null;

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try{
    const res = await fetch(url, { signal: controller.signal, cache: "no-store" });
    clearTimeout(timer);

    if (!res.ok) throw new Error("HTTP " + res.status);
    const svgText = await res.text();

    wrap.innerHTML = svgText;

    const svg = wrap.querySelector("svg");
    if (!svg) return null;

    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.style.width = "100%";
    svg.style.height = "auto";
    svg.style.display = "block";
    svg.style.overflow = "visible";

    return svg;
  }catch(_e){
    clearTimeout(timer);
    return null;
  }
}

async function runIntroThenBoot(){
  const intro = document.getElementById("introOverlay");
  const wordmark = document.querySelector(".introWordmark");
  const typeEl = document.getElementById("introType");
  const skip = document.getElementById("introSkip");

  if (!intro || !wordmark || !typeEl){
    await runBootSequence();
    return;
  }

  let skipped = false;
  const endNow = async () => {
    if (skipped) return;
    skipped = true;
    intro.setAttribute("aria-hidden","true");
    await sleep(20);
    await runBootSequence();
  };

  if (skip) skip.addEventListener("click", endNow, { once:true });

  // CHANGED: SVG now inside /assets
  const svg = await loadInlineSVG(INTRO_SVG_SRC, { timeoutMs: 1400 });

  if (!svg){
    await sleep(120);
    await endNow();
    return;
  }

  // Safer set: skip rect (getTotalLength can be inconsistent)
  const candidates = Array.from(svg.querySelectorAll("path, line, polyline, polygon, circle, ellipse"));

  const animEls = candidates.filter(el => {
    const tag = el.tagName.toLowerCase();
    return ["path","line","polyline","polygon","circle","ellipse"].includes(tag);
  });

  if (!animEls.length){
    await sleep(180);
    intro.setAttribute("aria-hidden","true");
    await sleep(220);
    await runBootSequence();
    return;
  }

  animEls.forEach(el => {
    el.classList.add("eecIntroGlow");
    el.style.fill = "none";
    el.style.stroke = "rgba(232,238,247,.92)";
    el.style.strokeWidth = "2.2";
    el.style.strokeLinecap = "round";
    el.style.strokeLinejoin = "round";
    el.style.vectorEffect = "non-scaling-stroke";

    try{
      const len = el.getTotalLength();
      const dash = Math.ceil(len + 2);
      el.style.strokeDasharray = String(dash);
      el.style.strokeDashoffset = String(dash);
      el.style.opacity = ".95";
    }catch(_e){
      // ignore
    }
  });

  const DRAW_MS = 520;
  const STAGGER_MS = 38;

  animEls.forEach((el, i) => {
    if (!el.style.strokeDashoffset) return;
    el.style.transition = "none";
    el.getBoundingClientRect();
    el.style.transition = `stroke-dashoffset ${DRAW_MS}ms ease ${i*STAGGER_MS}ms`;
    el.style.strokeDashoffset = "0";
  });

  await sleep(DRAW_MS + (animEls.length - 1) * STAGGER_MS + 90);
  if (skipped) return;

  const globeWrap = document.getElementById("introGlobeWrap");
  if (globeWrap){
    globeWrap.style.animation = "introSlideLeft 520ms cubic-bezier(.2,.9,.25,1) forwards";
  }
  wordmark.style.animation = "introWordmarkIn 420ms ease 220ms forwards";

  await sleep(620);
  if (skipped) return;

  const fullText = "EARTH’S ENIGMAS CO.";
  typeEl.textContent = "";
  typeEl.classList.add("typeCursor");

  for (let i = 0; i < fullText.length; i++){
    if (skipped) return;
    typeEl.textContent += fullText[i];
    await sleep(26);
  }
  typeEl.classList.remove("typeCursor");

  await sleep(220);
  if (skipped) return;

  intro.setAttribute("aria-hidden","true");
  await sleep(260);
  await runBootSequence();
}

// =============================
// BOOT SEQUENCE
// =============================
async function runBootSequence(){
  await sleep(120);

  const skipBtn = document.getElementById("skipBootBtn");
  if (skipBtn){
    skipBtn.addEventListener("click", () => {
      SKIP_BOOT = true;
      hideSkipButton();
    }, { once:true });
  }

  // STASH TEXT FOR TYPEWRITER (needs DOM ready)
  const phoneEl         = document.getElementById("t_phone");
  const directiveTitle  = document.getElementById("t_directive");
  const directiveBody   = document.getElementById("t_console");
  const directiveNotice = document.getElementById("t_notice");
  const eventTitle      = document.getElementById("t_eventTitle");
  const registryTitle   = document.getElementById("t_registryTitle");
  const mapTitle        = document.getElementById("t_mapTitle");
  const mapWrap         = document.getElementById("mapWrap");

  stashAndClear(directiveTitle);
  stashAndClear(directiveBody);
  stashAndClear(directiveNotice);

  if (phoneEl){
    phoneEl.dataset.full = glitch("+1-800-772-3419", 0.5);
    phoneEl.textContent = "";
  }

  stashAndClear(eventTitle);
  stashAndClear(registryTitle);
  stashAndClear(mapTitle);

  // Build event log DOM rows
  const eventLogEl = document.getElementById("eventLog");
  const eventRows = [];
  if (eventLogEl){
    eventLogEl.innerHTML = "";

    for (const row of EVENT_LOG){
      if (row.spacer){
        const spacer = document.createElement("div");
        spacer.style.height = "10px";
        eventLogEl.appendChild(spacer);
        continue;
      }

      if (row.alert){
        const div = document.createElement("div");
        div.className = "alertLine";
        const span = document.createElement("span");
        span.textContent = row.text;
        stashAndClear(span);
        div.appendChild(span);
        eventLogEl.appendChild(div);
        eventRows.push({ type:"alert", el: span });
        continue;
      }

      const div = document.createElement("div");
      div.className = "logRow";

      const date = document.createElement("span");
      date.className = "logDate";
      date.textContent = row.date;
      stashAndClear(date);

      const sep = document.createElement("span");
      sep.textContent = "";

      const msg = document.createElement("span");
      msg.textContent = row.text;
      stashAndClear(msg);

      div.appendChild(date);
      div.appendChild(sep);
      div.appendChild(msg);
      eventLogEl.appendChild(div);

      eventRows.push({ type:"dated", dateEl: date, sepEl: sep, msgEl: msg });
    }
  }

  // Directive
  reveal(directiveTitle);
  await typeFromData(directiveTitle, 9);

  reveal(directiveBody);
  await typeFromData(directiveBody, 7);

  reveal(directiveNotice);
  await typeFromData(directiveNotice, 9);

  reveal(phoneEl);
  await typeFromData(phoneEl, 12);

  // Event log
  await sleep(110);
  reveal(eventTitle);
  await typeFromData(eventTitle, 9);

  reveal(eventLogEl);
  for (const row of eventRows){
    if (row.type === "alert") await typeFromData(row.el, 8);
    else await typeLineWithDate(row.dateEl, row.sepEl, row.msgEl, 8, 8);
  }

  // Registry title + entities
  await sleep(140);
  reveal(registryTitle);
  await typeFromData(registryTitle, 9);
  renderEntitiesWithLed();

  // Map
  await sleep(140);
  reveal(mapTitle);
  await typeFromData(mapTitle, 9);
  reveal(mapWrap);
  if (mapWrap) mapWrap.classList.add("ledOn");

  // Green dot opens VIDEO
  const nemoDot = document.getElementById("nemoDot");
  if (nemoDot) nemoDot.addEventListener("click", openNemoModal);

  // Modal handlers
  const vClose = document.getElementById("videoClose");
  const vOverlay = document.getElementById("videoModal");
  if (vClose) vClose.addEventListener("click", closeNemoModal);
  if (vOverlay) vOverlay.addEventListener("click", (e) => { if (e.target === vOverlay) closeNemoModal(); });

  const fClose = document.getElementById("fileClose");
  const fOverlay = document.getElementById("fileModal");
  if (fClose) fClose.addEventListener("click", closeFileModal);
  if (fOverlay) fOverlay.addEventListener("click", (e) => { if (e.target === fOverlay) closeFileModal(); });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape"){
      closeNemoModal();
      closeFileModal();
    }
  });

  // Enter key button
  const enterKeyBtn = document.getElementById("enterKeyBtn");
  if (enterKeyBtn){
    enterKeyBtn.addEventListener("click", () => {
      const key = prompt("DECRYPTION KEY REQUIRED:");
      if (key === null) return;

      if (key.trim() === NEMO_KEY){
        unlockNemo();
        openFileModal("NEMO_03 · DECRYPTED FILE", NEMO_FILE_TEXT, { showEnterKey:false });
      } else {
        openFileModal("NEMO_03 · ACCESS DENIED", [
          "CLEARANCE: FAILED",
          "KEY STATUS: INVALID",
          "NOTICE:",
          "  Repeated attempts will be logged."
        ].join("\n"), { showEnterKey:true });
      }
    });
  }

  // Operator key reveal (tap threshold = 3)
  const prodLogo = document.getElementById("logoProd");
  if (prodLogo){
    prodLogo.addEventListener("click", (e) => {
      if (e.shiftKey) revealOperatorKey();
    });

    let tapCount = 0;
    let tapTimer = null;
    const TAP_THRESHOLD = 3;
    const TAP_WINDOW_MS = 3000;

    const registerTap = () => {
      tapCount++;

      if (tapCount === 1){
        tapTimer = setTimeout(() => {
          tapCount = 0;
          tapTimer = null;
        }, TAP_WINDOW_MS);
      }

      if (tapCount >= TAP_THRESHOLD){
        if (tapTimer) clearTimeout(tapTimer);
        tapCount = 0;
        tapTimer = null;
        revealOperatorKey();
      }
    };

    prodLogo.addEventListener("touchend", (e) => {
      e.preventDefault();
      registerTap();
    }, { passive:false });
  }

  hideSkipButton();

  if (isDevMode()){
    document.title = "DEV — " + document.title;
  }
}

window.addEventListener("DOMContentLoaded", () => {
  runIntroThenBoot();
});
