import './index.css'; // добавили импорт главного файла стилей 


import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import {
  popupEdit,
  popupAdd,
  popupImage,
  nameInput,
  jobInput,
  placeName,
  imageLink,
  profileTitle,
  profileJob,
  profileEditButton,
  profileAddButton,
  cardTemplate,
  validationConfig
} from '../scripts/utils/constans.js';
import {
  initialCards
} from '../scripts/utils/cards.js';
import Section from '../scripts/components/Section.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';


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
  popupAddClass.open();
}

const userInfo = new UserInfo({
  profileTitle,
  profileJob
});

const popupWithFormEdit = new PopupWithForm({
  handleFormSubmit: (evt) => {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Получите значение полей jobInput и nameInput из свойства value
    userInfo.setUserInfo(nameInput, jobInput);

    popupWithFormEdit.close();
  }
}, popupEdit)
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

// создание экземпляра класса карточки
const createCard = (item) => {
  const cardItem = new Card(item, cardTemplate, {
    handleCardClick: (card) => {
      const popupImageClass = new Popup(popupImage);
      popupImageClass.open();
      const popupWithImage = new PopupWithImage(card);
      popupWithImage.open();
    }
  });
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