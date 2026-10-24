/* Sai Prasanna & Sushmitha | Wedding invitation */

/* ============================================================
   EDIT HERE: add the venue name and a Google Maps link per event.
   - venue: shown on the page (leave "" to show only the city)
   - map:   paste a Google Maps share link. If empty, the button
            searches Maps for "venue, city" instead.
   ============================================================ */
const EVENTS = [
  { date: "2026-12-09", city: "Hanamkonda", icon: "kalash", items: [
    { name: "Pochamma Pooja", time: "8:30 AM onwards", start: "08:30", venue: "", map: "" },
    { name: "Cocktail Party", time: "Night", note: "Followed by a cocktail party at home", start: "19:30", venue: "", map: "" },
  ]},
  { date: "2026-12-10", city: "Hanamkonda", icon: "dhol", items: [
    { name: "Pelli Koduku Ceremony", time: "Ayirendlu · Kooralu · Mailapollu", start: "10:00", venue: "", map: "" },
    { name: "Departure to Vizag", time: "By 7:00 PM", note: "Gather at Warangal Railway Station by 7:00 PM and travel to Vizag", start: "19:00", venue: "Warangal Railway Station", map: "", travel: true },
  ]},
  { date: "2026-12-11", city: "Visakhapatnam", icon: "dancer", items: [
    { name: "Pelli Kuthuru Ceremony", time: "8:30 AM onwards", start: "08:30", venue: "", map: "" },
    { name: "Sangeet", time: "6:30 PM onwards", start: "18:30", venue: "", map: "" },
  ]},
  { date: "2026-12-12", city: "Visakhapatnam", icon: "bowl", items: [
    { name: "Haldi", time: "Morning", start: "09:00", venue: "", map: "" },
    { name: "Mehendi", time: "Night", start: "19:00", venue: "", map: "" },
  ]},
  { date: "2026-12-13", city: "Visakhapatnam", icon: "mangalsutra", items: [
    { name: "Pradhanam", time: "10:30 AM", start: "10:30", venue: "", map: "" },
    { name: "Wedding", time: "Muhurtham · 8:21 PM", note: "The auspicious moment", start: "20:21", venue: "", map: "", main: true },
  ]},
  { date: "2026-12-14", city: "Visakhapatnam", icon: "car", items: [
    { name: "Appagintalu", time: "6:30 AM onwards", start: "06:30", venue: "", map: "" },
    { name: "Travel to Hanamkonda", time: "7:00 AM from Vizag", start: "07:00", venue: "", map: "", travel: true },
    { name: "Baraat & Bride Arrival", time: "Night", start: "19:00", venue: "", map: "", city: "Hanamkonda" },
  ]},
  { date: "2026-12-15", city: "Hanamkonda", icon: "kalash", items: [
    { name: "Satyanarayana Vratam", time: "10:00 AM onwards", start: "10:00", venue: "", map: "" },
  ]},
  { date: "2026-12-16", city: "Hanamkonda", icon: "plate", items: [
    { name: "Reception", time: "Afternoon", start: "12:30", venue: "", map: "" },
  ]},
];

const WEDDING = "2026-12-13T20:21:00+05:30";
const SITE = "";  // e.g. "https://yourname.github.io/repo" once published
const REDUCE = matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Small icons for each day (original line art) ---------- */
const ICONS = {
  kalash: '<path d="M20 24h24l-3 26H23z" fill="#c9962f"/><path d="M18 24h28" stroke="#7a5a1d" stroke-width="3"/><circle cx="32" cy="16" r="9" fill="#e7b64c"/><path d="M25 12q7-9 14 0" fill="#2f6b3d"/>',
  dhol: '<path d="M10 40 L44 12" stroke="#7a5a1d" stroke-width="5" stroke-linecap="round"/><path d="M44 12l8-3-3 8z" fill="#c9962f"/><path d="M18 52 L52 24" stroke="#a3202e" stroke-width="5" stroke-linecap="round"/>',
  dancer: '<circle cx="32" cy="14" r="7" fill="#e6b07f"/><path d="M32 21v14M32 26l-14-6M32 26l14-8" stroke="#a3202e" stroke-width="4" stroke-linecap="round"/><path d="M22 36h20l8 18H14z" fill="#2f6b3d"/>',
  bowl: '<path d="M10 30h44c0 14-10 22-22 22S10 44 10 30z" fill="#c9962f"/><path d="M14 30q18-14 36 0" fill="#f2b630"/><circle cx="46" cy="50" r="5" fill="#e98aa5"/>',
  mangalsutra: '<path d="M12 8q20 40 40 0" fill="none" stroke="#c9962f" stroke-width="3" stroke-dasharray="1 5" stroke-linecap="round"/><circle cx="32" cy="42" r="10" fill="#a3202e" stroke="#c9962f" stroke-width="3"/><circle cx="32" cy="42" r="3.5" fill="#e7b64c"/>',
  car: '<path d="M8 40l6-14h30l8 14v8H8z" fill="#e7a53a"/><circle cx="18" cy="50" r="6" fill="#3b2318"/><circle cx="44" cy="50" r="6" fill="#3b2318"/><path d="M18 28h12v10H14z M34 28h10l5 10H34z" fill="#fbf1d9"/>',
  plate: '<ellipse cx="32" cy="40" rx="26" ry="12" fill="#2f6b3d"/><ellipse cx="32" cy="36" rx="12" ry="6" fill="#fbf1d9"/><circle cx="48" cy="34" r="4" fill="#f2b630"/><circle cx="16" cy="34" r="4" fill="#a3202e"/>',
};
const PIN = '<svg viewBox="0 0 24 24"><path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
const CAL = '<svg viewBox="0 0 24 24"><path d="M7 2v3M17 2v3M3.5 9h17M5 4.5h14A1.5 1.5 0 0 1 20.5 6v13A1.5 1.5 0 0 1 19 20.5H5A1.5 1.5 0 0 1 3.5 19V6A1.5 1.5 0 0 1 5 4.5Z"/></svg>';

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const dateParts = (iso) => {
  const d = new Date(iso + "T12:00:00+05:30");
  return {
    day: Number(iso.slice(8)),
    month: new Date(iso + "T00:00:00").toLocaleString("en-US", { month: "long" }),
    year: iso.slice(0, 4),
    dow: new Date(iso + "T00:00:00").toLocaleString("en-US", { weekday: "long" }),
  };
};
const mapsUrl = (it, city) =>
  it.map || "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent([it.venue, it.city || city].filter(Boolean).join(", "));

/* ---------- Build event pages ---------- */
const pages = document.getElementById("pages");
EVENTS.forEach((day, di) => {
  const p = dateParts(day.date);
  const sec = document.createElement("section");
  sec.className = "page page--day";
  sec.id = "day-" + day.date;
  sec.innerHTML = `
    <div class="frame">
      <div class="day">
        <svg class="day__icon" viewBox="0 0 64 64" aria-hidden="true">${ICONS[day.icon] || ""}</svg>
        <div><p class="day__date">${esc(p.month)} ${p.day}, ${p.year}</p><p class="day__dow">${esc(p.dow)}</p></div>
      </div>
      <div class="rule"></div>
      ${day.items.map((it, ii) => `
        <article class="ev">
          <h3 class="ev__name">${esc(it.name)}</h3>
          <p class="ev__time">${esc(it.time)}</p>
          ${it.note ? `<p class="ev__note">${esc(it.note)}</p>` : ""}
          <p class="ev__venue"><small>${it.travel ? "Travel" : "Venue"}</small>${esc(it.venue || (it.city || day.city))}</p>
          <div class="ev__actions">
            <a class="chip" href="${esc(mapsUrl(it, day.city))}" target="_blank" rel="noopener">${PIN} Location</a>
            <button class="chip" type="button" data-ics="${di}-${ii}">${CAL} Add to calendar</button>
          </div>
        </article>`).join("")}
    </div>`;
  pages.appendChild(sec);
});

/* ---------- Calendar (.ics download, works on iPhone, Android, desktop) ---------- */
document.addEventListener("click", (e) => {
  const b = e.target.closest("[data-ics]");
  if (!b) return;
  const [di, ii] = b.dataset.ics.split("-").map(Number);
  const day = EVENTS[di], it = day.items[ii];
  const start = new Date(`${day.date}T${it.start}:00+05:30`);
  const end = new Date(start.getTime() + (it.main ? 3 : 2) * 3600e3);
  const f = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
  const loc = [it.venue, it.city || day.city].filter(Boolean).join(", ");
  const ics = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//SaiSushmitha//Wedding//EN", "BEGIN:VEVENT",
    `UID:${day.date}-${ii}@sai-sushmitha-wedding`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
    `SUMMARY:${it.name} | Sai Prasanna & Sushmitha`, `LOCATION:${loc}`,
    `DESCRIPTION:${(it.note || it.time).replace(/\n/g, " ")}${SITE ? "\\n" + SITE : ""}`, "END:VEVENT", "END:VCALENDAR"].join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
  a.download = it.name.toLowerCase().replace(/[^a-z0-9]+/g, "-") + ".ics";
  document.body.appendChild(a); a.click(); a.remove();
});

/* ---------- Countdown to the Muhurtham ---------- */
(function () {
  const t = new Date(WEDDING).getTime();
  const ids = { d: "cd-d", h: "cd-h", m: "cd-m", s: "cd-s" };
  const el = Object.fromEntries(Object.entries(ids).map(([k, v]) => [k, document.getElementById(v)]));
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

/* ---------- Petals ---------- */
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

/* ---------- Music (starts on the "Open Invitation" tap) ---------- */
const MUSIC = (function () {
  const audio = document.getElementById("bgm"), btn = document.getElementById("music-toggle");
  const store = { get() { try { return localStorage.getItem("sw-music"); } catch { return null; } }, set(v) { try { localStorage.setItem("sw-music", v); } catch {} } };
  const show = (on) => { btn.setAttribute("aria-pressed", String(on)); btn.setAttribute("aria-label", on ? "Pause music" : "Play music"); };
  let fade;
  const ramp = (to, ms, done) => { cancelAnimationFrame(fade); const from = audio.volume, t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / ms); audio.volume = from + (to - from) * k; if (k < 1) fade = requestAnimationFrame(step); else done && done(); };
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
    document.getElementById("cover").classList.add("is-in");
  }, { once: true });
})();

/* ---------- Page reveal + dots + scroll snap on larger screens ---------- */
(function () {
  const all = [...document.querySelectorAll(".page")];
  const dots = document.getElementById("dots");
  all.forEach((pg, i) => {
    const b = document.createElement("button");
    b.type = "button"; b.setAttribute("aria-label", "Go to page " + (i + 1));
    b.addEventListener("click", () => pg.scrollIntoView({ behavior: REDUCE ? "auto" : "smooth" }));
    dots.appendChild(b);
  });
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("is-in");
        [...dots.children].forEach((d, i) => d.setAttribute("aria-current", String(all[i] === en.target)));
      }
    });
  }, { threshold: 0.35 });
  all.forEach((p) => io.observe(p));
})();
