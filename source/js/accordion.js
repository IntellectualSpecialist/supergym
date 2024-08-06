const accordionElements = document.querySelectorAll('.accordion');

const removeNoJsClass = () => {
  const activeItemElement = document.querySelector('.accordion-item--no-js');
  activeItemElement.classList.remove('accordion-item--no-js');
};

const onAccordionClick = (evt) => {
  if (evt.target.closest('.accordion-item__button')) {
    const accordionItemElement = evt.target.closest('.accordion-item');
    const accordionItemIndex = Array.from(evt.target.closest('.accordion').querySelectorAll('.accordion-item')).indexOf(accordionItemElement);

    accordionItemElement.querySelector('.accordion-item__content').classList.add('accordion-item__content--animation');

    accordionElements.forEach((accordion) => {
      const currentAccordionItemElement = accordion.children[accordionItemIndex];
      currentAccordionItemElement.classList.toggle('accordion-item--active');

      if (!currentAccordionItemElement.classList.contains('accordion-item--active')) {
        currentAccordionItemElement.querySelector('.accordion-item__content').style.height = 0;
      } else {
        const contentHeight = currentAccordionItemElement.querySelector('.accordion-item__content-wrapper').offsetHeight;
        currentAccordionItemElement.querySelector('.accordion-item__content').style.height = `${contentHeight}px`;
      }
    });
  }
};

const registerAccordionEvents = () => {
  accordionElements.forEach((accordion) => {
    accordion.addEventListener('click', onAccordionClick);
  });
};

const initAccordion = () => {
  if (accordionElements.length >= 1) {
    removeNoJsClass();
    registerAccordionEvents();
  }
};

const initActiveAccordionItemHeight = (currentTab) => {
  const accordionItemsActiveElements = currentTab.querySelectorAll('.accordion-item--active');

  accordionItemsActiveElements.forEach((item) => {
    const contentActiveHeight = item.querySelector('.accordion-item__content-wrapper').offsetHeight;
    item.querySelector('.accordion-item__content').style.height = `${contentActiveHeight}px`;
  });
};

const removeContentAnimation = (currentTab) => {
  const accordionContentElements = currentTab.querySelectorAll('.accordion-item__content');

  accordionContentElements.forEach((accordionItem) => {
    accordionItem.classList.remove('accordion-item__content--animation');
  });
};

const onTabChange = () => {
  const currentTabElement = document.querySelector('.faq-tabs__tab--current');

  initActiveAccordionItemHeight(currentTabElement);
  removeContentAnimation(currentTabElement);
};

export { initAccordion, onTabChange };
