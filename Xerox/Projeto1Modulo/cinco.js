document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.botao-track');
  const slides = document.querySelectorAll('.botao-slide');
  const btnPrev = document.querySelector('.botao-btn.prev');
  const btnNext = document.querySelector('.botao-btn.next');
  const slideWidth = slides[0].offsetWidth + 30; // 30 = margin dos slides (15px em cada lado)
  let currentIndex = 0;

  function updateSlidePosition() {
    const newTransform = -slideWidth * currentIndex;
    track.style.transform = `translateX(${newTransform}px)`;
  }

  btnNext.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  btnPrev.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });

  const menu = document.querySelector('.menu');
  const navLinks = document.querySelector('.nav-links');

  menu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  menu.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navLinks.classList.toggle('active');
    }
  });
});
