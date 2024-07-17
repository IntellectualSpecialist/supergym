import './vendor/swiper-bundle.min';
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
  init: false,
  navigation: {
    nextEl: '.slider--reviews .swiper-button-next',
    prevEl: '.slider--reviews .swiper-button-prev',
  },
});

const initReviewsSlider = () => {
  const reviewsSliderElement = document.querySelector('.slider--reviews');

  if (reviewsSliderElement) {
    swiperReviews.init();
  }
};

export { initReviewsSlider };
