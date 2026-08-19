window.CHACARA_LINKS = {
  pousada: 'https://links.corecast.com.br/chacara-paraiso-do-sol/hmMtK9',
  dayUse: 'https://links.corecast.com.br/chacara-paraiso-do-sol/qywrSk',
  whatsapp: 'https://wa.me/5541984822828'
};

document.addEventListener('DOMContentLoaded', function () {
  var links = window.CHACARA_LINKS;
  document.querySelectorAll('[data-cta="pousada"]').forEach(function (el) {
    el.setAttribute('href', links.pousada);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
  document.querySelectorAll('[data-cta="dayuse"]').forEach(function (el) {
    el.setAttribute('href', links.dayUse);
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
});
