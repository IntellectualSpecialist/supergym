import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

const swiperJuri = new Swiper('.slider--juri .slider__swiper', {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 1,
  loop: true,
  init: false,
  navigation: {
    nextEl: '.slider--juri .swiper-button-next',
    prevEl: '.slider--juri .swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
      slidesPerGroup: 2
    },
    1366: {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 4
    }
  }
});

const initJuriSlider = () => {
  if (document.querySelector('.slider--juri')) {
    swiperJuri.init();
  }
};

export { initJuriSlider };
