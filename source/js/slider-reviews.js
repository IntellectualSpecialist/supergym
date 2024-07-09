import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/bundle';

const swiperReviews = new Swiper('.slider--reviews .slider__swiper', {
  modules: [Navigation],
  spaceBetween: 20,
  slidesPerView: 1,
  loop: false,
  navigation: {
    nextEl: '.slider--reviews .swiper-button-next',
    prevEl: '.slider--reviews .swiper-button-prev',
  },
});
