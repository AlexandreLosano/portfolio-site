(function () {
  var overlay = document.getElementById('exp-modal');
  var meta = document.getElementById('exp-modal-meta');
  var body = document.getElementById('exp-modal-body');
  var closeBtn = document.getElementById('exp-modal-close');
  if (!overlay || !body) return;

  var lastTrigger = null;

  function openModal(role) {
    var company = role.closest('.exp-company');
    var companyName = company ? company.querySelector('.company-name').textContent : '';
    var period = role.querySelector('.period');
    meta.textContent = companyName + (period ? ' · ' + period.textContent : '');
    body.innerHTML = '';
    body.appendChild(role.querySelector('.role-body').cloneNode(true));
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    lastTrigger = role;
    closeBtn.focus();
  }

  function closeModal() {
    overlay.hidden = true;
    document.body.style.overflow = '';
    body.innerHTML = '';
    if (lastTrigger) lastTrigger.focus();
  }

  document.querySelectorAll('.exp-role').forEach(function (role) {
    role.addEventListener('click', function () { openModal(role); });
    role.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(role);
      }
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !overlay.hidden) closeModal();
  });
})();
