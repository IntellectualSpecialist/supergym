import { initActiveAccordionItemHeight } from './accordion';

let currentTab = 1;
const faqTabsElement = document.querySelector('.faq-tabs');
let tabButtonsListElement;
let tabButtonsElements;
let tabsElements;

if (faqTabsElement) {
  tabButtonsListElement = faqTabsElement.querySelector('.faq-tabs__list');
  tabButtonsElements = tabButtonsListElement.querySelectorAll('.faq-tabs__button');
  tabsElements = faqTabsElement.querySelectorAll('.faq-tabs__tab');
}

const updateActiveButton = () => {
  tabButtonsElements.forEach((tab) => {
    if (Number(tab.dataset.tabId) === currentTab) {
      tab.classList.add('faq-tabs__button--active');
    } else {
      tab.classList.remove('faq-tabs__button--active');
    }
  });
};

const updateTab = () => {
  updateActiveButton();
  tabsElements.forEach((tab) => {
    if (Number(tab.id) === currentTab) {
      tab.classList.add('faq-tabs__tab--current');
    } else {
      tab.classList.remove('faq-tabs__tab--current');
    }
  });
  initActiveAccordionItemHeight();
};

const onTabButtonClick = (evt) => {
  if (evt.target.matches('.faq-tabs__button')) {
    currentTab = Number(evt.target.dataset.tabId);
    updateTab();
  }
};

const registerTabButtonEvents = () => {
  tabButtonsListElement.addEventListener('click', onTabButtonClick);
};

const initFaqTabs = () => {
  if (faqTabsElement) {
    updateTab();
    registerTabButtonEvents();
  }
};

export { initFaqTabs };
