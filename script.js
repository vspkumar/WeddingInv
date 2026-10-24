/* Sai Prasanna & Sushmitha — wedding invitation interactions */
(function () {
  const wedding = new Date("2026-12-13T20:22:00+05:30").getTime();
  const nodes = {d:document.getElementById("cd-d"),h:document.getElementById("cd-h"),m:document.getElementById("cd-m"),s:document.getElementById("cd-s")};
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const remaining = Math.max(0, Math.floor((wedding - Date.now()) / 1000));
    if (!nodes.d) return;
    nodes.d.textContent = pad(Math.floor(remaining / 86400));
    nodes.h.textContent = pad(Math.floor((remaining % 86400) / 3600));
    nodes.m.textContent = pad(Math.floor((remaining % 3600) / 60));
    nodes.s.textContent = pad(remaining % 60);
  }
  tick(); window.setInterval(tick, 1000);

  const toggle = document.getElementById("music-toggle");
  const panel = document.getElementById("music-panel");
  const frame = document.getElementById("music-frame");
  const close = document.getElementById("music-close");
  const action = document.getElementById("music-action");
  function openMusic() {
    panel.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
    action.textContent = "♫";
    if (frame.getAttribute("src") === "about:blank") frame.setAttribute("src", frame.dataset.src);
  }
  function closeMusic() {
    panel.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
    action.textContent = "▶";
    frame.setAttribute("src", "about:blank");
  }
  toggle.addEventListener("click", () => panel.hidden ? openMusic() : closeMusic());
  close.addEventListener("click", closeMusic);
  document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !panel.hidden) closeMusic(); });
})();