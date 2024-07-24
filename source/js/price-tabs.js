const pricePerMonth = {
  'withCoach': 5000,
  'day': 1700,
  'fullDay': 2700
};
let tabIndex = 0;
const priceTabsElement = document.querySelector('.price-tabs');
let tabButtonsListElement;
let tabButtonsElements;
let priceCardsElements;

if (priceTabsElement) {
  tabButtonsListElement = priceTabsElement.querySelector('.price-tabs__list');
  tabButtonsElements = tabButtonsListElement.querySelectorAll('.price-tabs__button');
  priceCardsElements = priceTabsElement.querySelectorAll('.price-card');
}

const updateTabButtons = () => {
  tabButtonsElements.forEach((tab) => {
    tab.classList.remove('price-tabs__button--active');
  });
  tabButtonsElements[tabIndex].classList.add('price-tabs__button--active');
};

const updatePriceTabs = () => {
  updateTabButtons();
  priceCardsElements.forEach((card) => {
    const priceCardType = card.dataset.type;
    const priceWrapper = card.querySelector('.price-card__price');
    const priceValue = priceWrapper.querySelector('.price-card__value');

    const currentTab = tabButtonsElements[tabIndex];
    const currentMonthCount = Number(currentTab.dataset.monthCount);
    const currentPrice = pricePerMonth[priceCardType] * currentMonthCount;

    priceWrapper.dataset.value = currentPrice;
    priceValue.textContent = currentPrice;
  });
};

const onTabButtonClick = (evt) => {
  if (evt.target.matches('.price-tabs__button')) {
    tabIndex = Number(evt.target.dataset.id);
    updatePriceTabs();
  }
};

const registerTabButtonsEvents = () => {
  tabButtonsListElement.addEventListener('click', onTabButtonClick);
};

const initPriceTabs = () => {
  if (priceTabsElement) {
    updatePriceTabs();
    registerTabButtonsEvents();
  }
};

export { initPriceTabs };
