(function () {
  var btn = document.getElementById('exp-more-btn');
  var label = document.getElementById('exp-more-btn-label');
  var panel = document.getElementById('exp-more');
  if (!btn || !panel) return;

  btn.addEventListener('click', function () {
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    panel.hidden = expanded;
    label.textContent = expanded ? 'ver experiências anteriores' : 'ocultar experiências anteriores';
  });
})();
