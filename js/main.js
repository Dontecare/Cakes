document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.fade-in');
  const options = {
      threshold: 0.5
  };

  const observer = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});




const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;

  if (prevSlide) {
    moveToSlide(track, currentSlide, prevSlide);
  }
});

// Click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;

  if (nextSlide) {
    moveToSlide(track, currentSlide, nextSlide);
  }
});

// simple-carousel.js
document.addEventListener('DOMContentLoaded', function () {
  const track = document.querySelector('.simple-carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.simple-next');
  const prevButton = document.querySelector('.simple-prev');
  const slideWidth = slides[0].getBoundingClientRect().width;

  // Arrange slides next to one another
  slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  });

  const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('simple-current-slide');
    targetSlide.classList.add('simple-current-slide');
  };

  // Click left, move slides to the left
  prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.simple-current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    if (prevSlide) {
      moveToSlide(track, currentSlide, prevSlide);
    }
  });

  // Click right, move slides to the right
  nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.simple-current-slide');
    const nextSlide = currentSlide.nextElementSibling;

    if (nextSlide) {
      moveToSlide(track, currentSlide, nextSlide);
    }
  });
});


// script.js
function toggleMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  mobileMenu.classList.toggle('menu-visible');
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('js/service-worker.js')
      .then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch(function(error) {
        console.log('ServiceWorker registration failed: ', error);
      });
  });
}
