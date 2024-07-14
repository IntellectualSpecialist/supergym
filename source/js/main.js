import { initPlayer } from './player';
import { initPriceTabs } from './price-tabs';
import { initJuriSlider } from './slider-juri';
import { initReviewsSlider } from './slider-reviews';
import { initFaqTabs } from './faq-tabs';
import { initAccordion } from './accordion';
import { initFormValidate } from './validate-form';

const bootstrap = () => {
  initPlayer();
  initPriceTabs();
  initJuriSlider();
  initReviewsSlider();
  initFaqTabs();
  initAccordion();
  initFormValidate();
};

window.addEventListener('load', () => {
  bootstrap();
});
