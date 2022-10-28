// создаем объект для валидации
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_inactive',
  inputErrorClass: 'popup__input_type_error'
}

class FormValidator{
  constructor(popupForm, validationConfig){
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inactiveButtonClass = validationConfig.inactiveButtonClass;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._popupForm = popupForm;
  }

// Функция принимает массив полей
  _hasInvalidInput = (inputList => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
})

// функция сброса ошибок
  _resetForm() {
  const popupForm = this._popupForm.querySelector('.popup__form');
  if (this._popupForm.contains(popupForm)) {

    // очищаем/скрываем ошибки инпутов
    const inputList = Array.from(this._popupForm.querySelectorAll(this._inputSelector));
    inputList.forEach((inputElement) => {
      this._hideInputError(popupForm, inputElement);
    })

    // Найдём в текущей форме кнопку отправки и деактивируем ее
    const buttonElement = this._popupForm.querySelector(this._submitButtonSelector);
    this._toggleButtonState(inputList, buttonElement);
  }
  openPopup(popupForm);
  }

  //скрытие ошибки
  _hideInputError = (formElement, inputElement) => {
    // Находим элемент ошибки
    const errorSpan = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorSpan.textContent = '';
  }

  // отображение ошибки
  _showInputError = (formElement, inputElement, errorMessage) => {
    // Находим элемент ошибки внутри самой функции
    const errorSpan = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorSpan.textContent = errorMessage;
  }

  // проверка на валидацию поля инпута
  _isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(formElement, inputElement);
    }
  }

  // Функция принимает массив полей ввода
  // и элемент кнопки, состояние которой нужно менять
  _toggleButtonState = (inputList, buttonElement) => {
    // Если есть хотя бы один невалидный инпут
    if (this._hasInvalidInput(inputList)) {
      // сделай кнопку неактивной
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      // иначе сделай кнопку активной
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  // находим все инпуты массива
  _setEventListeners = (formElement) => {
    // Находим все поля внутри формы,
    // сделаем из них массив методом Array.from
    const inputList = Array.from(formElement.querySelectorAll(this._inputSelector));
  
    // Найдём в текущей форме кнопку отправки
    const buttonElement = formElement.querySelector(this._submitButtonSelector);
  
    // Обойдём все элементы полученной коллекции
    inputList.forEach((inputElement) => {
      // каждому полю добавим обработчик события input
      inputElement.addEventListener('input', () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(formElement, inputElement);
  
        // Вызовем toggleButtonState и передадим ей массив полей и кнопку
        this._toggleButtonState(inputList, buttonElement);
        })
      })
    }
  enableValidation = () => {
    // Найдём все формы с указанным классом в DOM,
    // сделаем из них массив методом Array.from
    const formList = Array.from(document.querySelectorAll(this._formSelector));
  
    // Переберём полученную коллекцию
    formList.forEach((formElement) => {
      // Для каждой формы вызовем функцию setEventListeners,
      // передав ей элемент формы
      this._setEventListeners(formElement);
    })
    this._resetForm();
    openPopup(this._popupForm);

  }
}

/* // отображение ошибки
const showInputError = (formElement, inputElement, errorMessage, {inputErrorClass}) => {
  // Находим элемент ошибки внутри самой функции
  const errorSpan = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorSpan.textContent = errorMessage;
} */

/* //скрытие ошибки
const hideInputError = (formElement, inputElement, {inputErrorClass}) => {
  // Находим элемент ошибки
  const errorSpan = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorSpan.textContent = '';
} */

/* // Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
} */

/* // проверка на валидацию поля инпута
const isValid = (formElement, inputElement, {...settings}) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
}

// находим все инпуты массива
const setEventListeners = (formElement, {inputSelector, submitButtonSelector, ...settings}) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  // Найдём в текущей форме кнопку отправки
  const buttonElement = formElement.querySelector(submitButtonSelector);

  // Обойдём все элементы полученной коллекции
  inputList.forEach((inputElement) => {
    // каждому полю добавим обработчик события input
    inputElement.addEventListener('input', () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, settings);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonElement, settings);
    })
  })
}

const enableValidation = ({formSelector, ...settings}) => {
  // Найдём все формы с указанным классом в DOM,
  // сделаем из них массив методом Array.from
  const formList = Array.from(document.querySelectorAll(formSelector));

  // Переберём полученную коллекцию
  formList.forEach((formElement) => {
    // Для каждой формы вызовем функцию setEventListeners,
    // передав ей элемент формы
    setEventListeners(formElement, settings);
  })
}

// Функция принимает массив полей
const hasInvalidInput = (inputList => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true
    return !inputElement.validity.valid;
  })
})

// функция сброса ошибок
function resetForm(popup, validationConfig) {
  const popupForm = popup.querySelector('.popup__form');
  if (popup.contains(popupForm)) {

    // очищаем/скрываем ошибки инпутов
    const inputList = Array.from(popup.querySelectorAll(validationConfig.inputSelector));
    inputList.forEach((inputElement) => {
      hideInputError(popup, inputElement, validationConfig);
    })

    // Найдём в текущей форме кнопку отправки и деактивируем ее
    const buttonElement = popup.querySelector(validationConfig.submitButtonSelector);
    toggleButtonState(inputList, buttonElement, validationConfig);
  }
  openPopup(popup);
} */

/*   // Вызовем функцию
enableValidation(validationConfig); */

const validationProfilePopup = new FormValidator(popupEdit, validationConfig);
const validationPlacePopup = new FormValidator(popupAdd, validationConfig);

