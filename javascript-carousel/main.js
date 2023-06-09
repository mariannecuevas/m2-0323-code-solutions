
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const prevBtn = document.querySelector('.btn.left');
const nextBtn = document.querySelector('.btn.right');
let currentSlideIndex = 0;
let timer;

function updateCarousel() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.add('hidden');
  }

  slides[currentSlideIndex].classList.remove('hidden');

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('current');
  }

  indicators[currentSlideIndex].classList.add('current');
}

function nextSlide() {
  clearInterval(timer);
  currentSlideIndex++;
  if (currentSlideIndex === slides.length) {
    currentSlideIndex = 0;
  }
  updateCarousel();
  startCarousel();
}

function prevSlide() {
  clearInterval(timer);
  currentSlideIndex--;
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }
  updateCarousel();
  startCarousel();
}

function goToSlide(index) {
  clearInterval(timer);
  currentSlideIndex = index;
  updateCarousel();
  startCarousel();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

for (let i = 0; i < indicators.length; i++) {
  indicators[i].addEventListener('click', () => {
    goToSlide(i);
  });
}

function startCarousel() {
  timer = setInterval(() => {
    nextSlide();
  }, 3000);
}

startCarousel();
