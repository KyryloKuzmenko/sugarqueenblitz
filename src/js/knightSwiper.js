
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let reviewsSwiper = null;

function initKnightSwiper() {
  if (!reviewsSwiper) {
    reviewsSwiper = new Swiper('.reviews-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40,
      mousewheel: true,
      initialSlide: 3,
      loop: true,
      navigation: {
        nextEl: '.reviews-swiper .swiper-btn-right',
        prevEl: '.reviews-swiper .swiper-btn-left',
      },
      breakpoints: {
        1440: {
          slidesPerView: 2,
          centeredSlides: false,
        },
      },
    });
  }
}

window.addEventListener('load', initKnightSwiper);
