import FormValidator from './FormValidator.js';
import Card from './Card.js';
import {
  popupEdit,
  popupAdd,
  popupImage,
  popupEditCloseButton,
  popupAddCloseButton,
  popupImageCloseButton,
  formEdit,
  nameInput,
  jobInput,
  formAdd,
  formAddCard,
  placeName,
  imageLink,
  profileTitle,
  profileJob,
  profileEditButton,
  profileAddButton,
  cardTemplate,
  cardsContainer,
  validationConfig
} from './constans.js';
import {
  initialCards
} from './cards.js';
import {
  openPopup,
  closePopup
} from './utils.js';

// создание экземляров класса валидации для формы редактирования и добавления карточки
const validationProfilePopup = new FormValidator(popupEdit, validationConfig);
const validationPlacePopup = new FormValidator(popupAdd, validationConfig);

validationPlacePopup.enableValidation();
validationProfilePopup.enableValidation();

function handleProfileFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  // Получите значение полей jobInput и nameInput из свойства value
  profileTitle.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  /** 
   * Выберите элементы, куда должны быть вставлены значения полей
   * Вставьте новые значения с помощью textContent
   * закрытие попапа после сохранения */
  closePopup(popupEdit);
}
formEdit.addEventListener('submit', handleProfileFormSubmit);

// слушатель на клик открытие попапа редактирования
profileEditButton.addEventListener('click', () => {
  openProfilePopup();
})

// функция открытия попапа редактирования
function openProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  validationProfilePopup.resetForm();
  openPopup(popupEdit);
}

// слушатель на клик открытие попапа добавления места
profileAddButton.addEventListener('click', () => {
  openPlacePopup();
})

// функция открытия попапа добавления места
function openPlacePopup() {
  validationPlacePopup.resetForm();
  formAddCard.reset();
  openPopup(popupAdd);
}

// слушатель на клик закрытия попапа изображения
popupImageCloseButton.addEventListener('click', () => {
  closePopup(popupImage);
})

//слушатель на клик закрытие попапа редактирования
popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupEdit);
})

//слушатель на клик закрытие попапа добавления
popupAddCloseButton.addEventListener('click', function () {
  closePopup(popupAdd);
})

//создание карточки в начало
const renderCard = (cardItem) => {
  cardsContainer.prepend(cardItem.generateCard());
}
//перебор карточек из массива объектов
initialCards.reverse().forEach((cardObject) => {
  //создание экземпляра класса карточки и добавление на страницу
  renderCard(createCard(cardObject));

});

// добавление данных от пользователя для добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const item = {
    name: placeName.value,
    link: imageLink.value
  }
  //создание экземпляра класса карточки и добавление на страницу
  renderCard(createCard(item));
  closePopup(popupAdd);
}

formAdd.addEventListener('submit', handleCardFormSubmit);

// создание экземпляра класса карточки
function createCard(item) {
  const cardItem = new Card(item, cardTemplate);
  return cardItem;
}