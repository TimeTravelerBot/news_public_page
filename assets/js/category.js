/* Renders a complete category archive from the canonical article manifest. */
(function () {
  "use strict";

  var root = document.getElementById("category-grid");
  var category = document.body.getAttribute("data-archive-category");
  var articles = (window.CS && window.CS.ARTICLES) || [];
  var labels = {cybersecurity:"Security","android-security":"Android Sec",tech:"AI & Tech",hardware:"Hardware",explainer:"Explainer"};

  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function localImage(path) {
    if (!path) return "";
    if (/^https:\/\//.test(path)) return path;
    return "../" + String(path).replace(/^\//, "");
  }

  function card(article) {
    var image = localImage(article.img);
    var art = image ? '<img src="' + esc(image) + '" alt="" loading="lazy" decoding="async">' : "";
    var read = article.read ? " · " + esc(article.read) + " min read" : "";
    return '<a class="card" href="../articles/' + esc(article.slug) + '.html">' +
      '<span class="card__art">' + art + '</span>' +
      '<span class="tag tag--' + esc(article.category) + '">' + esc(labels[article.category] || article.category) + '</span>' +
      '<h2 class="card__title">' + esc(article.title) + '</h2>' +
      '<p class="card__excerpt">' + esc(article.excerpt) + '</p>' +
      '<span class="card__meta"><time datetime="' + esc(article.date) + '">' + esc(article.date) + '</time>' + read + '</span>' +
      '</a>';
  }

  if (root && category) {
    var matches = articles.filter(function (article) { return article.category === category; });
    root.innerHTML = matches.length
      ? matches.map(card).join("")
      : '<p class="category-empty">No published articles in this category yet.</p>';
    var count = document.getElementById("category-count");
    if (count) count.textContent = matches.length + (matches.length === 1 ? " published article" : " published articles");
  }

  var header = document.querySelector(".site-header");
  var toggle = document.getElementById("nav-toggle");
  if (header && toggle) {
    toggle.addEventListener("click", function () {
      var open = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var year = document.getElementById("copyright-year");
  if (year) year.textContent = new Date().getFullYear();
})();
