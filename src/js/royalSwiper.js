import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let swiperInstance = null;

function initRoyalSwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !swiperInstance) {
    swiperInstance = new Swiper('.royal-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 20,
      mousewheel: true,
      initialSlide: 1,
      loop: true,
    });
  }

  if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}


window.addEventListener('load', initRoyalSwiper);
window.addEventListener('resize', () => {
  initRoyalSwiper();
});
