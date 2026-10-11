(function () {
  var key = "home";
  function currentKey() {
    var path = location.pathname;
    return /\/about\/?$/.test(path) ? "about" : /\/resume\/?$/.test(path) ? "resume" : /\/work\//.test(path) ? "work" : /\/contact\/?$/.test(path) ? "" : "home";
  }
  // Highlight the current page in the pill nav.
  function set(k) {
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      var on = a.getAttribute("data-nav") === k;
      a.classList.toggle("is-active", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
  }
  // On the homepage, switch to "Work" while the work section is on screen.
  function onScroll() {
    if (key !== "home") return;
    var work = document.getElementById("work");
    if (!work) return;
    var r = work.getBoundingClientRect(), mid = window.innerHeight * 0.4;
    set(r.top < mid && r.bottom > mid ? "work" : "home");
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  // Reveal sections as they enter the viewport. If anything fails, everything stays visible.
  var io = null;
  function reveal() {
    var items = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window) || !items.length) return;
    document.documentElement.classList.add("reveal-ready");
    if (!io) io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.08, rootMargin: "0px 0px -5% 0px" });
    items.forEach(function (el) { io.observe(el); });
    setTimeout(function () { items.forEach(function (el) { el.classList.add("in"); }); }, 6000);
  }

  function init() {
    key = currentKey();
    set(key);
    onScroll();
    reveal();
  }
  init();
  // Next.js navigates without reloading the page, so re-run on every route change.
  window.addEventListener("site:route", function () { requestAnimationFrame(init); });
})();
