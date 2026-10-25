/* Sai Prasanna & Sushmitha | Wedding invitation */

/* ============================================================
   EDIT HERE: add the venue name and a Google Maps link per event.
   - venue: shown on the card (leave "" to show only the city)
   - map:   paste a Google Maps share link. If empty, the Location
            button searches Maps for "venue, city" instead.
   ============================================================ */
const EVENTS = [
  { key: "wedding", label: "The Wedding", date: "2026-12-13", start: "20:21", hours: 3,
    time: "Muhurtham · 8:21 PM", note: "The auspicious moment",
    city: "Visakhapatnam", venue: "", map: "", icon: "rings" },
  { key: "reception", label: "The Reception", date: "2026-12-16", start: "12:30", hours: 3,
    time: "Afternoon · 12:30 PM", note: "",
    city: "Hanamkonda", venue: "", map: "", icon: "lotus" },
];

const WEDDING = "2026-12-13T20:21:00+05:30";
const SITE = ""; // e.g. "https://vspkumar.github.io/WeddingInv/" once published
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

const PIN = '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
const CAL = '<svg viewBox="0 0 24 24"><path d="M7 2v3M17 2v3M3.5 9h17M5 4.5h14A1.5 1.5 0 0 1 20.5 6v13A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"/></svg>';
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const ordinal = (n) => (n % 10 === 1 && n !== 11 ? "st" : n % 10 === 2 && n !== 12 ? "nd" : n % 10 === 3 && n !== 13 ? "rd" : "th");
const mapsUrl = (e) => e.map || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent([e.venue, e.city].filter(Boolean).join(", "));

/* ---------- Event cards ---------- */
document.getElementById("events").innerHTML = EVENTS.map((e, i) => {
  const d = new Date(e.date + "T00:00:00");
  const day = d.getDate();
  return `
    <article class="card" data-reveal>
      <img class="card__corner card__corner--l" src="assets/filigree.webp" alt="" aria-hidden="true">
      <img class="card__corner card__corner--r" src="assets/filigree.webp" alt="" aria-hidden="true">
      <img class="card__icon" src="assets/${e.icon}.webp" alt="" loading="lazy">
      <p class="card__label">${esc(e.label)}</p>
      <p class="card__big">${d.toLocaleString("en-US", { weekday: "long" })}</p>
      <p class="card__text">${day}<sup>${ordinal(day)}</sup> ${d.toLocaleString("en-US", { month: "long" })} ${d.getFullYear()}</p>
      <p class="card__time">${esc(e.time)}</p>
      <p class="card__venue"><small>Venue</small>${esc(e.venue || e.city)}${e.venue ? ", " + esc(e.city) : ""}</p>
      <div class="card__actions">
        <a class="chip" href="${esc(mapsUrl(e))}" target="_blank" rel="noopener">${PIN} Location</a>
        <button class="chip" type="button" data-ics="${i}">${CAL} Add to calendar</button>
      </div>
    </article>`;
}).join("");

/* Add to calendar: downloads an .ics file (iPhone, Android and desktop all open it) */
document.addEventListener("click", (ev) => {
  const b = ev.target.closest("[data-ics]");
  if (!b) return;
  const e = EVENTS[Number(b.dataset.ics)];
  const start = new Date(`${e.date}T${e.start}:00+05:30`);
  const end = new Date(start.getTime() + e.hours * 3600e3);
  const f = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const loc = [e.venue, e.city].filter(Boolean).join(", ");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SaiSushmitha//Wedding//EN", "BEGIN:VEVENT",
    `UID:${e.key}-${e.date}@sai-sushmitha-wedding`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
    `SUMMARY:${e.label.replace("The ", "")} | Sai Prasanna & Sushmitha`, `LOCATION:${loc}`,
    `DESCRIPTION:${e.time}${SITE ? "\\n" + SITE : ""}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = `${e.key}-sai-sushmitha.ics`;
  document.body.appendChild(a); a.click(); a.remove();
});

/* ---------- Countdown ---------- */
(function () {
  const t = new Date(WEDDING).getTime();
  const el = { d: "cd-d", h: "cd-h", m: "cd-m", s: "cd-s" };
  Object.keys(el).forEach((k) => (el[k] = document.getElementById(el[k])));
  const pad = (n) => String(n).padStart(2, "0");
  const tick = () => {
    const s = Math.floor(Math.max(0, t - Date.now()) / 1000);
    el.d.textContent = pad(Math.floor(s / 86400));
    el.h.textContent = pad(Math.floor((s % 86400) / 3600));
    el.m.textContent = pad(Math.floor((s % 3600) / 60));
    el.s.textContent = pad(s % 60);
  };
  tick(); setInterval(tick, 1000);
})();

/* ---------- Falling petals (rose, jasmine, marigold) ---------- */
(function () {
  const host = document.querySelector(".petals");
  if (!host || REDUCE) return;
  const n = innerWidth < 720 ? 7 : 12;
  for (let i = 0; i < n; i++) {
    const p = document.createElement("i"), s = 8 + Math.random() * 8;
    p.className = "petal";
    p.style.cssText = `left:${Math.random() * 100}%;width:${s}px;height:${s * 1.4}px;--drift:${(Math.random() * 2 - 1) * 120}px;--spin:${(Math.random() * 2 - 1) * 540}deg;animation-duration:${13 + Math.random() * 12}s;animation-delay:${-Math.random() * 22}s`;
    host.appendChild(p);
  }
})();

/* ---------- Music (starts from the "Open Invitation" tap) ---------- */
const MUSIC = (function () {
  const audio = document.getElementById("bgm"), btn = document.getElementById("music-toggle");
  const store = { get() { try { return localStorage.getItem("sw-music"); } catch { return null; } }, set(v) { try { localStorage.setItem("sw-music", v); } catch {} } };
  const show = (on) => { btn.setAttribute("aria-pressed", String(on)); btn.setAttribute("aria-label", on ? "Pause music" : "Play music"); };
  let fade;
  const ramp = (to, ms, done) => { cancelAnimationFrame(fade); const from = audio.volume, t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / ms); audio.volume = from + (to - from) * k; if (k < 1) fade = requestAnimationFrame(step); else if (done) done(); };
    fade = requestAnimationFrame(step); };
  const play = () => { if (!audio.paused) return; audio.volume = 0; audio.play().then(() => { show(true); ramp(0.5, 3000); }).catch(() => show(false)); };
  const pause = () => { show(false); ramp(0, 500, () => audio.pause()); };
  btn.addEventListener("click", () => { if (audio.paused) { store.set("on"); play(); } else { store.set("off"); pause(); } });
  document.addEventListener("visibilitychange", () => { if (document.hidden) audio.pause(); else if (btn.getAttribute("aria-pressed") === "true") audio.play().catch(() => {}); });
  return { play, wanted: () => store.get() !== "off" };
})();

/* ---------- Opening screen ---------- */
(function () {
  const gate = document.getElementById("gate"), open = document.getElementById("gate-open");
  if (!gate || !open) return;
  document.documentElement.classList.add("gate-lock");
  open.focus({ preventScroll: true });
  open.addEventListener("click", () => {
    if (MUSIC.wanted()) MUSIC.play();
    document.documentElement.classList.remove("gate-lock");
    gate.classList.add("is-leaving");
    setTimeout(() => gate.remove(), REDUCE ? 0 : 1300);
  }, { once: true });
})();

/* ---------- Reveal on scroll ---------- */
(function () {
  const items = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) { items.forEach((i) => i.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const sibs = [...en.target.parentElement.children].filter((c) => c.hasAttribute("data-reveal"));
      en.target.style.transitionDelay = Math.max(0, sibs.indexOf(en.target)) * 0.12 + "s";
      en.target.classList.add("in");
      io.unobserve(en.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" });
  items.forEach((i) => io.observe(i));
})();
