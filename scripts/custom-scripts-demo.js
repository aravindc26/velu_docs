// Live demo for /docs/configuration/custom-scripts.
// Any .js file in the project runs on every page after it hydrates; this one
// only does something on the page that has the status element.
(function () {
  var el = document.getElementById('custom-scripts-js-status');
  if (!el) return;
  el.textContent = 'Custom JavaScript ran after the page loaded.';
})();
