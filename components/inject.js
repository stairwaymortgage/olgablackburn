// inject.js — Loads header.html and footer.html into every page automatically.
// To edit header or footer: open components/header.html or components/footer.html only.
// Changes apply to ALL pages instantly.

(function () {
  // ── Inject Header ──────────────────────────────────────────
  fetch('/components/header.html')
    .then(function(r) { return r.text(); })
    .then(function(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      document.body.insertBefore(div, document.body.firstChild);

      // Highlight active nav link
      var path = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('.global-nav-links a').forEach(function(a) {
        if (a.getAttribute('href') === '/' + path) {
          a.classList.add('active');
        }
      });
    });

  // ── Inject Footer ──────────────────────────────────────────
  fetch('/components/footer.html')
    .then(function(r) { return r.text(); })
    .then(function(html) {
      var div = document.createElement('div');
      div.innerHTML = html;
      document.body.appendChild(div);
    });
})();
