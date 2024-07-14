const alertMessages = {
  empty: 'Заполните поле',
  name: 'Только буквы',
  phone: 'Только цифры: +7XXXXXXXXXXX'
};
const formElement = document.querySelector('.form form');
const nameInputElement = formElement.querySelector('#name');
const phoneInputElement = formElement.querySelector('#tel');
const nameFieldElement = nameInputElement.closest('.field');
const phoneFieldElement = phoneInputElement.closest('.field');

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

  if (!isValidPhone(phone)) {
    const alertMessage = createAlert(alertMessages.phone);
    phoneFieldElement.classList.add('field--invalid');
    phoneFieldElement.appendChild(alertMessage);

    return;
  }

  formElement.submit();
};

const onInputChange = (evt) => {
  const currentFieldElement = evt.target.closest('.field');
  if (!evt.target.value) {
    currentFieldElement.querySelector('.field__label').style.display = 'block';
  } else {
    currentFieldElement.querySelector('.field__label').style.display = 'none';
  }
};

const onFieldInput = (evt) => {
  const currentFieldElement = evt.target.closest('.field');
  currentFieldElement.classList.remove('field--invalid');
  const currentErrorElement = currentFieldElement.querySelector('.field__error-message');
  if (currentErrorElement) {
    currentFieldElement.querySelector('.field__error-message').remove();
  }
  currentFieldElement.querySelector('.field__label').style.display = 'none';
};

const onFieldFocus = (evt) => {
  const currentFieldElement = evt.target.closest('.field');
  currentFieldElement.querySelector('.field__label').style.display = 'none';
};

const onFieldBlur = (evt) => {
  const currentFieldElement = evt.target.closest('.field');
  if (!evt.target.value) {
    currentFieldElement.querySelector('.field__label').style.display = 'block';
  } else {
    currentFieldElement.querySelector('.field__label').style.display = 'none';
  }
};

const registerFormEvents = () => {
  nameInputElement.addEventListener('input', onFieldInput);
  phoneInputElement.addEventListener('input', onFieldInput);
  nameInputElement.addEventListener('focus', onFieldFocus);
  phoneInputElement.addEventListener('focus', onFieldFocus);
  nameInputElement.addEventListener('blur', onFieldBlur);
  phoneInputElement.addEventListener('blur', onFieldBlur);
  nameInputElement.addEventListener('change', onInputChange);
  phoneInputElement.addEventListener('change', onInputChange);

  formElement.addEventListener('submit', onFormSubmit);
};

const showLabels = () => {
  if (!nameInputElement.value && !phoneInputElement.value) {
    const labelsElements = formElement.querySelectorAll('.field__label');
    labelsElements.forEach((label) => {
      label.style.display = 'block';
    });
  }
};

const initFormValidate = () => {
  if (formElement) {
    showLabels();
    registerFormEvents();
  }
};

export { initFormValidate };
