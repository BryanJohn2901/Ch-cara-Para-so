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

window.CHACARA_WHATS = {
  numero: '5541984822828',
  padrao: 'Olá! Vim pelo site da Chácara Paraíso do Sol e quero mais informações.',
  porPagina: {
    'casamentos': 'Olá! Vim pelo site e gostaria de informações sobre casamentos na Chácara Paraíso do Sol.',
    'aniversarios': 'Olá! Vim pelo site e gostaria de informações sobre festas de aniversário na Chácara Paraíso do Sol.',
    'batismos': 'Olá! Vim pelo site e gostaria de informações sobre batismos na Chácara Paraíso do Sol.',
    'festas-e-confraternizacoes': 'Olá! Vim pelo site e gostaria de informações sobre festas e confraternizações na Chácara Paraíso do Sol.',
    'eventos': 'Olá! Vim pelo site e gostaria de informações sobre eventos na Chácara Paraíso do Sol.',
    'restaurante': 'Olá! Vim pelo site e gostaria de informações sobre o Duetto Paraíso do Sol.',
    'pousada': 'Olá! Vim pelo site e gostaria de informações sobre hospedagem na pousada da Chácara Paraíso do Sol.',
    'wakeboard': 'Olá! Vim pelo site e quero saber sobre o wakeboard e o Day Use na Chácara Paraíso do Sol.',
    'paintball': 'Olá! Vim pelo site e quero saber sobre o paintball e o Day Use na Chácara Paraíso do Sol.',
    'floats': 'Olá! Vim pelo site e quero saber sobre o parque inflável e o Day Use na Chácara Paraíso do Sol.',
    'espaco-kids': 'Olá! Vim pelo site e quero saber sobre o Espaço Kids e o Day Use na Chácara Paraíso do Sol.',
    'beach-tennis': 'Olá! Vim pelo site e quero saber sobre as quadras de areia e o Day Use na Chácara Paraíso do Sol.',
    'futevolei': 'Olá! Vim pelo site e quero saber sobre as quadras de areia e o Day Use na Chácara Paraíso do Sol.',
    'volei-de-praia': 'Olá! Vim pelo site e quero saber sobre as quadras de areia e o Day Use na Chácara Paraíso do Sol.'
  }
};

document.addEventListener('DOMContentLoaded', function () {
  var w = window.CHACARA_WHATS;
  var seg = location.pathname.split('/').filter(Boolean).pop() || '';
  var msg = w.porPagina[seg] || w.padrao;
  document.querySelectorAll('a[href^="https://wa.me"]').forEach(function (el) {
    el.setAttribute('href', 'https://wa.me/' + w.numero + '?text=' + encodeURIComponent(msg));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');
  });
});
