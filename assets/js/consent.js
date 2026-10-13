/* WireShaman privacy preference notice. No advertising code is loaded here. */
(function () {
  "use strict";

  var STORAGE_KEY = "wireshaman-privacy-choice-v1";
  var nested = /^\/(?:articles|categories)\//.test(window.location.pathname);
  var prefix = nested ? "../" : "";

  function readChoice() {
    try { return window.localStorage.getItem(STORAGE_KEY) || ""; }
    catch (error) { return ""; }
  }

  function saveChoice(choice) {
    try { window.localStorage.setItem(STORAGE_KEY, choice); }
    catch (error) { /* The notice still works for this page when storage is unavailable. */ }
    window.dispatchEvent(new CustomEvent("wireshaman:privacy-choice", { detail: { choice: choice } }));
  }

  var banner = document.createElement("section");
  banner.className = "consent-banner";
  banner.id = "privacy-notice";
  banner.setAttribute("role", "region");
  banner.setAttribute("aria-labelledby", "privacy-notice-title");
  banner.innerHTML =
    '<div class="consent-banner__copy">' +
      '<strong id="privacy-notice-title">Your privacy choices</strong>' +
      '<p>WireShaman uses essential browser storage to remember this choice. Advertising partners may use cookies or similar technologies only as described in our <a href="' + prefix + 'privacy.html">Privacy Policy</a>.</p>' +
    '</div>' +
    '<div class="consent-banner__actions">' +
      '<button class="btn btn--ghost" type="button" data-privacy-choice="rejected">Reject optional</button>' +
      '<button class="btn btn--primary" type="button" data-privacy-choice="accepted">Accept optional</button>' +
    '</div>';
  banner.hidden = Boolean(readChoice());
  document.body.appendChild(banner);

  function showNotice() {
    banner.hidden = false;
    var firstButton = banner.querySelector("button");
    if (firstButton) firstButton.focus();
  }

  banner.querySelectorAll("[data-privacy-choice]").forEach(function (button) {
    button.addEventListener("click", function () {
      saveChoice(button.getAttribute("data-privacy-choice"));
      banner.hidden = true;
    });
  });

  var settings = document.querySelectorAll(".js-cookie-settings");
  settings.forEach(function (button) { button.addEventListener("click", showNotice); });
  if (settings.length === 0) {
    var floatingSettings = document.createElement("button");
    floatingSettings.type = "button";
    floatingSettings.className = "privacy-settings js-cookie-settings";
    floatingSettings.textContent = "Privacy choices";
    floatingSettings.addEventListener("click", showNotice);
    document.body.appendChild(floatingSettings);
  }

  window.WireShamanPrivacy = { getChoice: readChoice, show: showNotice };
})();
