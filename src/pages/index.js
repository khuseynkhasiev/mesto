import './index.css'; // добавили импорт главного файла стилей 


import FormValidator from '../scripts/components/FormValidator.js';
import Card from '../scripts/components/Card.js';
import {
  popupEdit,
  popupAdd,
  nameInput,
  jobInput,
  profileTitle,
  profileJob,
  profileEditButton,
  profileAddButton,
  cardTemplate,
  validationConfig,
  popupImageInfo,
  popupFigcaptionImage
} from '../scripts/utils/constans.js';
import {
  initialCards
} from '../scripts/utils/cards.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';

// создание экземляров класса валидации для формы редактирования и добавления карточки
const validationProfilePopup = new FormValidator(popupEdit, validationConfig);
const validationPlacePopup = new FormValidator(popupAdd, validationConfig);

validationPlacePopup.enableValidation();
validationProfilePopup.enableValidation();

// слушатель на клик открытие попапа редактирования
profileEditButton.addEventListener('click', () => {
  openProfilePopup();
})

// функция открытия попапа редактирования
function openProfilePopup() {

  //получаем объект с данными профиля
  const profileObject = userInfo.getUserInfo();
  nameInput.value = profileObject.name;
  jobInput.value = profileObject.about;

  //сбрасываем валидацию
  validationProfilePopup.resetForm();

  popupWithFormEdit.open();
}

// слушатель на клик открытие попапа добавления места
profileAddButton.addEventListener('click', () => {
  openPlacePopup();
})

// функция открытия попапа добавления места
function openPlacePopup() {
  validationPlacePopup.resetForm();
  popupWithFormAdd.open();
}

const userInfo = new UserInfo({
  profileTitle,
  profileJob
});


const popupWithFormEdit = new PopupWithForm({

  // получаем колбэком данные из инпутов
  handleFormSubmit: (unputValues) => {
    // подставляем данные в профиль
    userInfo.setUserInfo(unputValues);
  }
}, '.popup_type_edit')

const popupWithFormAdd = new PopupWithForm({
  // получаем колбэком данные из инпутов
  handleFormSubmit: (unputValues) => {
    //создание экземпляра класса карточки и добавление на страницу
    section.addItem(createCard(unputValues));
  }
}, '.popup_type_add')

const popupWithImage = new PopupWithImage('.popup_type_image', popupImageInfo,
  popupFigcaptionImage);


// создание экземпляра класса карточки
const createCard = (item) => {
  const cardItem = new Card(item, cardTemplate, {
    /*     handleCardClick: (card) => {
          popupWithImage.open(card);
        } */
    handleCardClick: (place, url) => {
      popupWithImage.open(place, url);
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

/* fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
    headers: {
      authorization: '0abf54cd-edc4-4fb9-9a14-bce409a2bf77'
    }
  })
  .then(res => res.json())
  .then((result) => {
    console.log(result);
  }); */


/* fetch('https://nomoreparties.co/v1/cohort-54/users/me', {
    headers: {
      authorization: '0abf54cd-edc4-4fb9-9a14-bce409a2bf77'
    }
  })
  .then(res => res.json())
  .then((date) => {
    console.log(date);
  }) */


/* fetch('https://mesto.nomoreparties.co/v1/cohort-54/cards', {
    headers: {
      authorization: '0abf54cd-edc4-4fb9-9a14-bce409a2bf77'
    }
  })
  .then(res => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch(res => console.log(`Ошибка: ${res}`)) */