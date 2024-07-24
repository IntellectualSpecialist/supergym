const alertMessages = {
  empty: 'Заполните поле',
  name: 'Только буквы и пробелы',
  phone: 'Только цифры: +7XXXXXXXXXXX',
  lessLetters: 'Укажите минимум 2 буквы'
};
const formElement = document.querySelector('.form form');
let nameInputElement;
let phoneInputElement;
let nameFieldElement;
let phoneFieldElement;

if (formElement) {
  nameInputElement = formElement.querySelector('#name');
  phoneInputElement = formElement.querySelector('#tel');
  nameFieldElement = nameInputElement.closest('.field');
  phoneFieldElement = phoneInputElement.closest('.field');
}

const createAlert = (message) => {
  const alertElement = document.createElement('span');
  alertElement.classList.add('field__error-message');
  alertElement.textContent = message;
  return alertElement;
};

function isValidName(name) {
  const pattern = /^[a-zA-Zа-яёА-ЯЁ\s]+$/;
  return pattern.test(name);
}

function isNameСontainsTwoLetters(name) {
  const pattern = /[a-zA-Zа-яёА-ЯЁ]{2,}/;
  return pattern.test(name);
}

function isValidPhone(phone) {
  const pattern = /^\+7[0-9]{10}$/;
  return pattern.test(phone);
}

const onFormSubmit = (evt) => {
  evt.preventDefault();

  const name = nameInputElement.value;
  const phone = phoneInputElement.value;

  if (nameFieldElement.classList.contains('field--invalid')) {
    nameFieldElement.classList.remove('field--invalid');
    nameFieldElement.querySelector('.field__error-message').remove();
  }

  if (phoneFieldElement.classList.contains('field--invalid')) {
    phoneFieldElement.classList.remove('field--invalid');
    phoneFieldElement.querySelector('.field__error-message').remove();
  }

  if (!phone || !name) {
    if (!name) {
      const alertMessage = createAlert(alertMessages.empty);
      nameFieldElement.classList.add('field--invalid');
      nameFieldElement.appendChild(alertMessage);
    }

    if (!phone) {
      const alertMessage = createAlert(alertMessages.empty);
      phoneFieldElement.classList.add('field--invalid');
      phoneFieldElement.appendChild(alertMessage);
    }

    return;
  }

  if (!isValidName(name)) {
    const alertMessage = createAlert(alertMessages.name);
    nameFieldElement.classList.add('field--invalid');
    nameFieldElement.appendChild(alertMessage);

    return;
  }

  if (!isNameСontainsTwoLetters(name)) {
    const alertMessage = createAlert(alertMessages.lessLetters);
    nameFieldElement.classList.add('field--invalid');
    nameFieldElement.appendChild(alertMessage);

    return;
  }

  if (!isValidPhone(phone)) {
    const alertMessage = createAlert(alertMessages.phone);
    phoneFieldElement.classList.add('field--invalid');
    phoneFieldElement.appendChild(alertMessage);

    return;
  }

  formElement.submit();
};

const onFieldInput = (evt) => {
  if (evt.target.matches('input')) {

    const currentFieldElement = evt.target.closest('.field');
    const currentErrorElement = currentFieldElement.querySelector('.field__error-message');

    currentFieldElement.classList.remove('field--invalid');
    if (currentErrorElement) {
      currentFieldElement.querySelector('.field__error-message').remove();
    }
  }
};

const registerFormEvents = () => {
  formElement.addEventListener('input', onFieldInput);
  formElement.addEventListener('submit', onFormSubmit);
};

const initFormValidate = () => {
  if (formElement) {
    registerFormEvents();
  }
};

export { initFormValidate };
