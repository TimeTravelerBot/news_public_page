/* ============================================================
   WireShaman — render.js
   Renders EVERY story card from window.CS.ARTICLES. One card
   builder, reused for the trending grid, each category row and
   the explainer cards. The pipeline only edits articles.js —
   this file never changes.
   ============================================================ */
(function () {
  "use strict";
  var articles = (window.CS && window.CS.ARTICLES) || [];
  var CAT_LABEL = {
    cybersecurity: "Security",
    tech: "AI & Tech",
    hardware: "Hardware",
    explainer: "Explainer"
  };

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // ---- single card builder (the only place card markup lives) ----
  function cardMarkup(a, feature) {
    if (!a) {
      // graceful placeholder if a section has fewer than 3 items
      return (
        '<a class="card card--empty" href="#subscribe" aria-disabled="true">' +
        '<span class="card__art"></span>' +
        '<span class="tag">More coming</span>' +
        '<h3 class="card__title">New story landing soon.</h3>' +
        '<p class="card__excerpt">Fresh analysis drops daily — subscribe so you never miss one.</p>' +
        "</a>"
      );
    }
    var tag = '<span class="tag tag--' + esc(a.category) + '">' + esc(CAT_LABEL[a.category] || a.category) + "</span>";
    var cls = "card" + (feature ? " card--feature" : "");
    var excerpt = feature ? "" : '<p class="card__excerpt">' + esc(a.excerpt) + "</p>";
    return (
      '<a class="' + cls + '" href="articles/' + esc(a.slug) + '.html" data-category="' + esc(a.category) + '">' +
      '<span class="card__art" style="--art:' + esc(a.art) + '"></span>' +
      tag +
      '<h3 class="card__title">' + esc(a.title) + "</h3>" +
      (feature ? '<p class="card__excerpt">' + esc(a.excerpt) + "</p>" : excerpt) +
      '<span class="card__meta"><time datetime="' + esc(a.date) + '">' + esc(a.date) + "</time> · " + esc(a.read || "") + " min read · " + (CAT_LABEL[a.category] || "") + "</span>" +
      "</a>"
    );
  }

  function take(list, n) {
    var out = [];
    for (var i = 0; i < n && i < list.length; i++) out.push(list[i]);
    return out;
  }

  // ---- trending grid: first is the big feature, rest are tiles ----
  var gridEl = document.getElementById("trending-grid");
  if (gridEl) {
    var n = parseInt(gridEl.dataset.limit || "6", 10);
    var feature = gridEl.dataset.feature !== "false";
    var list = take(articles, n);
    if (list.length === 0) list = [null, null, null];
    var html = cardMarkup(list[0], feature);
    for (var i = 1; i < 3; i++) html += cardMarkup(list[i], false);
    gridEl.innerHTML = html;
  }

  // ---- per-category rows (data-category) ----
  document.querySelectorAll("[data-category]").forEach(function (row) {
    var cat = row.dataset.category;
    var items = articles.filter(function (a) { return a.category === cat; });
    var slots = take(items, 3);
    while (slots.length < 3) slots.push(null); // fill empty slots gracefully
    row.innerHTML = slots.map(function (a) { return cardMarkup(a, false); }).join("");
  });

  // ---- explainer card grid ----
  document.querySelectorAll(".cards").forEach(function (cardsEl) {
    var cat = cardsEl.dataset.category || "explainer";
    var items = articles.filter(function (a) { return a.category === cat; });
    var slots = take(items, 3);
    while (slots.length < 3) slots.push(null);
    cardsEl.innerHTML = slots.map(function (a) { return cardMarkup(a, false); }).join("");
  });

  // ---- tiny date/year chrome ----
  var d = new Date();
  var dateEl = document.getElementById("today-date");
  if (dateEl) {
    dateEl.textContent = d.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
  }
  var yr = document.getElementById("copyright-year");
  if (yr) yr.textContent = d.getFullYear();

  // ---- mobile nav toggle ----
  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    header.querySelectorAll(".nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        header.classList.remove("menu-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // ---- subscribe form (fake for now) ----
  var form = document.getElementById("subscribe-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var note = document.getElementById("subscribe-note");
      var val = (input.value || "").trim();
      if (!val || val.indexOf("@") === -1) {
        if (note) { note.style.color = "var(--danger)"; note.textContent = "Please enter a valid email."; }
        return;
      }
      if (note) { note.style.color = "var(--accent-3)"; note.textContent = "You're on the list — see you in your inbox."; }
      input.value = "";
    });
  }

  // ---- hero "live wire" feed: type-scramble the sample headlines ----
  var log = document.getElementById("wire-log");
  var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (log) {
    var GLYPHS = "abcdefghijklmnopqrstuvwxyz0123456789#/\|-_";
    var lines = Array.prototype.slice.call(log.querySelectorAll(".term__line"));
    lines.forEach(function (line, i) {
      var el = line.querySelector(".term__copy");
      var full = el ? (el.getAttribute("data-t") || "") : "";
      if (!el || !full) return;
      if (reduce) { el.textContent = full; return; }
      function type() {
        var n = 0;
        var iv = setInterval(function () {
          var s = "";
          for (var j = 0; j < full.length; j++) {
            if (j < n) s += full[j];
            else if (j < n + 6) s += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
          el.textContent = s;
          n++;
          if (n > full.length) { clearInterval(iv); el.textContent = full; }
        }, 20);
      }
      var delay = parseFloat(line.dataset.d || "0") * 1000 + i * 250;
      el.textContent = "";
      setTimeout(type, delay);
      setInterval(type, delay + 8500 + i * 2200);
    });
  }
})();
