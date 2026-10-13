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
    var artStyle = a.art ? ' style="--art:' + esc(a.art) + '"' : "";
    var artImage = a.img
      ? '<img src="' + esc(a.img) + '" alt="" loading="lazy" decoding="async">'
      : "";
    return (
      '<a class="' + cls + '" href="articles/' + esc(a.slug) + '.html" data-category="' + esc(a.category) + '">' +
      '<span class="card__art"' + artStyle + ">" + artImage + "</span>" +
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

  // ---- latest grid: honor the configured limit; feature layout is optional ----
  var gridEl = document.getElementById("trending-grid");
  if (gridEl) {
    var n = parseInt(gridEl.dataset.limit || "6", 10);
    var feature = gridEl.dataset.feature !== "false";
    var list = take(articles, n);
    if (list.length === 0) list = [null, null, null];
    gridEl.innerHTML = list.map(function (a, i) {
      return cardMarkup(a, feature && i === 0);
    }).join("");
  }

  // ---- per-category rows (data-category) ----
  document.querySelectorAll(".row[data-category]").forEach(function (row) {
    var cat = row.dataset.category;
    var items = articles.filter(function (a) { return a.category === cat; });
    var slots = take(items, 3);
    while (slots.length < 3) slots.push(null); // fill empty slots gracefully
    row.innerHTML = slots.map(function (a) { return cardMarkup(a, false); }).join("");
  });

  // ---- Coverage section: what each desk covers + live article count ----
  var covGrid = document.getElementById("coverage-grid");
  var cats = (window.CS && window.CS.CATEGORIES) || [];
  var COV_ICON = {
    cyber: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 4.3-3 7.8-7 9-4-1.2-7-4.7-7-9V6l7-3z"/></svg>',
    ai:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/></svg>',
    hardware: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx="0.5"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/></svg>',
    explainers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="6.5"/><path d="M20 20l-4.3-4.3"/><path d="M11 8.2v5.6M8.2 11h5.6"/></svg>'
  };
  if (covGrid) {
    covGrid.innerHTML = cats.map(function (c) {
      var count = articles.filter(function (a) { return a.category === c.slug; }).length;
      var countLabel = count === 1 ? "1 story" : (count + " stories");
      var icon = COV_ICON[c.id] || COV_ICON.explainers;
      return (
        '<a class="cov__card" href="' + (c.href || "#trending") + '">' +
          '<span class="cov__icon">' + icon + '</span>' +
          '<h3 class="cov__title">' + esc(c.label) + '</h3>' +
          '<p class="cov__blurb">' + esc(c.blurb) + '</p>' +
          '<span class="cov__meta">' + countLabel + ' on the wire \u00b7 see all \u2192</span>' +
        '</a>'
      );
    }).join("");
  }

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
  var storyCount = document.getElementById("published-story-count");
  if (storyCount) storyCount.textContent = articles.length;
  var deskCount = document.getElementById("coverage-desk-count");
  if (deskCount) deskCount.textContent = cats.length;

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
