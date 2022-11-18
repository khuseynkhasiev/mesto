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
/* import {
  openPopup,
  closePopup
} from './utils.js'; */
import Section from './Section.js';
import Popup from './Popup.js';

import PopupWithForm from './PopupWithForm.js';
import UserInfo from './UserInfo.js';


// создание экземляров класса валидации для формы редактирования и добавления карточки
const validationProfilePopup = new FormValidator(popupEdit, validationConfig);
const validationPlacePopup = new FormValidator(popupAdd, validationConfig);

validationPlacePopup.enableValidation();
validationProfilePopup.enableValidation();

const popupEditClass = new Popup(popupEdit);
const popupAddClass = new Popup(popupAdd);

// слушатель на клик открытие попапа редактирования
profileEditButton.addEventListener('click', () => {
  openProfilePopup();
})

// функция открытия попапа редактирования
function openProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  validationProfilePopup.resetForm();
  //openPopup(popupEdit);

  popupEditClass.open();
}

// слушатель на клик открытие попапа добавления места
profileAddButton.addEventListener('click', () => {
  openPlacePopup();
})

// функция открытия попапа добавления места
function openPlacePopup() {
  validationPlacePopup.resetForm();
  //formAddCard.reset();
  //openPopup(popupAdd);

  popupAddClass.open();
}

/* // слушатель на клик закрытия попапа изображения
popupImageCloseButton.addEventListener('click', () => {
  //closePopup(popupImage);

  popupImageClass.close();
})

//слушатель на клик закрытие попапа редактирования
popupEditCloseButton.addEventListener('click', function () {
  //closePopup(popupEdit);

  popupEditClass.close();
})

//слушатель на клик закрытие попапа добавления
popupAddCloseButton.addEventListener('click', function () {
  //closePopup(popupAdd);

  popupAddClass.close();
})
 */

/* // добавление данных от пользователя для добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const item = {
    name: placeName.value,
    link: imageLink.value
  }
  //создание экземпляра класса карточки и добавление на страницу
  //renderCard(createCard(item));
  section.addItem(createCard(item));
  //closePopup(popupAdd);

  //popupAddClass.close();
} */
//formAdd.addEventListener('submit', handleCardFormSubmit);

/* function handleProfileFormSubmit(evt) {
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
//closePopup(popupEdit);
//popupEditClass.close();
//}
//formEdit.addEventListener('submit', handleProfileFormSubmit);

const userInfo = new UserInfo({
  profileTitle,
  profileJob
});

const popupWithFormEdit = new PopupWithForm({
  handleFormSubmit: (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    /*     profileTitle.textContent = nameInput.value;
        profileJob.textContent = jobInput.value; */

    userInfo.setUserInfo(nameInput, jobInput);

    popupWithFormEdit.close();
  }
}, popupEdit)
//formEdit.addEventListener('submit', popupWithFormEdit.setEventListeners());
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm({
  handleFormSubmit: (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    const item = {
      name: placeName.value,
      link: imageLink.value
    }
    //создание экземпляра класса карточки и добавление на страницу
    section.addItem(createCard(item));
    popupWithFormAdd.close();
  }
}, popupAdd)
popupWithFormAdd.setEventListeners();
//formAdd.addEventListener('submit', popupWithFormAdd.setEventListeners());

// создание экземпляра класса карточки
const createCard = (item) => {
  const cardItem = new Card(item, cardTemplate);
  return cardItem.generateCard();
}

//передача параметров и создание экземпляра класса
const section = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item);
    section.addItem(card);
  }
}, '.elements__container');

//вызов метода класса Section
section.renderItems();