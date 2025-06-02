import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

let victorySwiper = null;

function initVictorySwiper() {
  const breakpoint = 1200;
  const isMobile = window.innerWidth < breakpoint;

  if (isMobile && !victorySwiper) {
    victorySwiper = new Swiper('.victory-swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 12,
      mousewheel: true,
      initialSlide: 1,
      loop: true,
    });
  }

  if (!isMobile && victorySwiper) {
    victorySwiper.destroy(true, true);
    victorySwiper = null;
  }
}

window.addEventListener('load', initVictorySwiper);
window.addEventListener('resize', () => {
  initVictorySwiper();
});
