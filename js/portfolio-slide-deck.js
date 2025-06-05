document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;

  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = index;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }

  document.querySelector('.next').addEventListener('click', () => {
    let nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  });

  document.querySelector('.prev').addEventListener('click', () => {
    let prevSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prevSlide);
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });
});
