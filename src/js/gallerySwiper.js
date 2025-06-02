import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let gallerySwiper = null;

function initGallerySwiper() {
    if (!gallerySwiper) {
      gallerySwiper = new Swiper('.confetti-swiper', {
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 18,
        mousewheel: true,
        initialSlide: 2,
        loop: true,
        navigation: {
          nextEl: '.confetti-swiper .confetti-swiper-btn-right',
          prevEl: '.confetti-swiper .confetti-swiper-btn-left',
        },
        breakpoints: {
          1440: {
            slidesPerView: 5,
            spaceBetween: 40,
            initialSlide: 2,
          },
        },
      });
  }
}


window.addEventListener('load', initGallerySwiper);
