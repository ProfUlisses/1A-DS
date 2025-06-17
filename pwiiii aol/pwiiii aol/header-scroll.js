// Script para esconder/mostrar o header ao rolar a página
let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (header) {
    if (scrollTop > lastScrollTop) {
      // Rolando para baixo
      header.style.transform = 'translateY(-100%)';
      header.style.transition = 'transform 0.7s'; // desacelerado
    } else {
      // Rolando para cima
      header.style.transform = 'translateY(0)';
      header.style.transition = 'transform 0.7s'; // desacelerado
    }
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
