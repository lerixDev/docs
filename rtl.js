// Forces `dir="rtl"` (and `lang="ar"`) on <html> whenever the current page
// lives under the /ar/ locale, and `dir="ltr"` everywhere else. Mintlify
// includes any .js file in the content directory on every page automatically
// (see docs/customize/custom-scripts) — this runs after each page becomes
// interactive AND on every client-side route change, since this is a
// single-page app and a plain page-load check alone would miss in-app
// navigation between locales.
(function () {
  function applyDirection() {
    var firstSegment = window.location.pathname.split("/").filter(Boolean)[0];
    var isArabic = firstSegment === "ar";

    document.documentElement.dir = isArabic ? "rtl" : "ltr";
    document.documentElement.lang = isArabic ? "ar" : "en";
  }

  applyDirection();

  var pushState = history.pushState;
  history.pushState = function () {
    pushState.apply(history, arguments);
    applyDirection();
  };

  var replaceState = history.replaceState;
  history.replaceState = function () {
    replaceState.apply(history, arguments);
    applyDirection();
  };

  window.addEventListener("popstate", applyDirection);
})();
