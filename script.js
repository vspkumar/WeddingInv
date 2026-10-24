/* Sai Prasanna & Sushmitha — small, accessible wedding-page interactions */
(function () {
  const wedding = new Date("2026-12-13T20:22:00+05:30").getTime();
  const nodes = {
    d: document.getElementById("cd-d"),
    h: document.getElementById("cd-h"),
    m: document.getElementById("cd-m"),
    s: document.getElementById("cd-s")
  };
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const remaining = Math.max(0, Math.floor((wedding - Date.now()) / 1000));
    if (!nodes.d) return;
    nodes.d.textContent = pad(Math.floor(remaining / 86400));
    nodes.h.textContent = pad(Math.floor((remaining % 86400) / 3600));
    nodes.m.textContent = pad(Math.floor((remaining % 3600) / 60));
    nodes.s.textContent = pad(remaining % 60);
  }
  tick();
  window.setInterval(tick, 1000);

  // Add a subtle entrance as sections enter the viewport; content remains visible without JS.
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const sections = document.querySelectorAll(".blessing, .event, .interlude, .closing");
    sections.forEach((section) => section.classList.add("reveal-ready"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    sections.forEach((section) => observer.observe(section));
  }
})();