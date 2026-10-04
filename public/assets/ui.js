(function () {
  var hdr = document.querySelector('[data-hdr]');
  var menu = document.querySelector('[data-menu]');
  var nav = document.querySelector('[data-nav]');
  var dds = [].slice.call(document.querySelectorAll('.dd'));
  function setDd(dd, open) { dd.classList.toggle('open', open); var b = dd.querySelector('button'); if (b) b.setAttribute('aria-expanded', String(open)); }
  if (menu && nav) menu.addEventListener('click', function () { var o = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(o)); if (!o) dds.forEach(function (d) { setDd(d, false); }); });
  dds.forEach(function (dd) { dd.querySelector('button').addEventListener('click', function () { var o = !dd.classList.contains('open'); dds.forEach(function (x) { setDd(x, x === dd ? o : false); }); }); });
  document.addEventListener('click', function (e) { dds.forEach(function (d) { if (!d.contains(e.target)) setDd(d, false); }); });
  if (nav) nav.addEventListener('click', function (e) { if (e.target.closest('a')) { nav.classList.remove('open'); if (menu) menu.setAttribute('aria-expanded', 'false'); } });
  function onScroll() { if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 20); }
  onScroll(); window.addEventListener('scroll', onScroll, { passive: true });
})();
