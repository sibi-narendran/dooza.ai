// ZIOSIS preview: menu toggle, Buy 1 / Buy 2 selector, preview checkout note.
(function () {
  var fmt = function (n) { return '$' + (n % 1 ? n.toFixed(2) : n); };

  // Mobile menu
  var menuBtn = document.querySelector('.header__menu');
  var nav = document.getElementById('nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', String(open));
      menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
      }
    });
  }

  // Offer selector keeps the button total in sync
  var cards = document.querySelectorAll('.card[data-p1]');
  cards.forEach(function (card) {
    var total = card.querySelector('.js-total');
    card.querySelectorAll('input[type=radio]').forEach(function (r) {
      r.addEventListener('change', function () {
        total.textContent = fmt(Number(r.value === '2' ? card.dataset.p2 : card.dataset.p1));
      });
    });
  });

  // Preview checkout note
  var dlg = document.getElementById('preview-note');
  var line = document.querySelector('.js-note-line');
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.js-add');
    if (!btn) return;
    var card = btn.closest('.card');
    var picked = card.querySelector('input:checked');
    var two = picked && picked.value === '2';
    var text = (two ? 'Buy 2' : 'Buy 1') + ' · ' + card.dataset.name + ' · ' +
      fmt(Number(two ? card.dataset.p2 : card.dataset.p1)) +
      (two ? ' with free shipping + free mystery gift' : '');
    if (dlg && typeof dlg.showModal === 'function') {
      line.textContent = text;
      dlg.showModal();
    } else {
      alert('Preview: ' + text + '. Checkout will run on your Shopify.');
    }
  });
  if (dlg) {
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }

  var y = document.querySelector('.js-year');
  if (y) y.textContent = new Date().getFullYear();
})();
