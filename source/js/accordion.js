const accordionElements = document.querySelectorAll('.accordion');

const removeNoJsClass = () => {
  const activeItemElement = document.querySelector('.accordion-item--no-js');
  activeItemElement.classList.remove('accordion-item--no-js');
};

const onAccordionClick = (evt) => {
  if (evt.target.matches('.accordion-item__button')) {
    const accordionItemElement = evt.target.closest('.accordion-item');
    accordionItemElement.querySelector('.accordion-item__content').classList.add('accordion-item__content--animation');
    accordionItemElement.classList.toggle('accordion-item--active');

    if (!accordionItemElement.classList.contains('accordion-item--active')) {
      accordionItemElement.querySelector('.accordion-item__content').style.height = 0;
    } else {
      const contentHeight = accordionItemElement.querySelector('.accordion-item__content-wrapper').offsetHeight;
      accordionItemElement.querySelector('.accordion-item__content').style.height = `${contentHeight}px`;
    }
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

const initActiveAccordionItemHeight = () => {
  const currentTabElement = document.querySelector('.faq-tabs__tab--current');
  const accordionItemsActiveElements = currentTabElement.querySelectorAll('.accordion-item--active');

  accordionItemsActiveElements.forEach((item) => {
    const contentActiveHeight = item.querySelector('.accordion-item__content-wrapper').offsetHeight;
    item.querySelector('.accordion-item__content').style.height = `${contentActiveHeight}px`;
  });
};

export { initAccordion, initActiveAccordionItemHeight };
