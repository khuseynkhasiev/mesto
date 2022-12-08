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
  popupFigcaptionImage,
  buttonDeleteCard,
  popupProfileAvatar,
  elementTrashCard,
  avatarProfile,
  avatarProfileEdit
} from '../scripts/utils/constans.js';
import {
  initialCards
} from '../scripts/utils/cards.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';
import PopupWithSubmit from '../scripts/components/PopupWithSubmit.js';

// создание экземляров класса валидации для формы редактирования и добавления карточки
const validationProfilePopup = new FormValidator(popupEdit, validationConfig);
const validationPlacePopup = new FormValidator(popupAdd, validationConfig);
const validationProfileAvatarPopup = new FormValidator(popupProfileAvatar, validationConfig);

validationPlacePopup.enableValidation();
validationProfilePopup.enableValidation();
validationProfileAvatarPopup.enableValidation();

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54/',
  headers: {
    authorization: '0abf54cd-edc4-4fb9-9a14-bce409a2bf77',
    'Content-Type': 'application/json'
  }
});

const userInfo = new UserInfo({
  profileTitle,
  profileJob
});

const popupWithImage = new PopupWithImage('.popup_type_image', popupImageInfo,
  popupFigcaptionImage);

const popupWithSubmit = new PopupWithSubmit('.popup_type_delete');


api.getProfileName()
  .then((data) => {

    // создание экземпляра класса карточки
    const createCard = (item) => {
      const cardItem = new Card(item, cardTemplate, {

        handleCardClick: (name, link) => {
          popupWithImage.open(name, link);
        },
        handleLikeClick: () => {

        },
        handleDeleteIconClick: () => {
          popupWithSubmit.open();
          // удаление подтверждением
          buttonDeleteCard.addEventListener('click', () => {
            cardItem.deleteCard();
            popupWithSubmit.close();
          })
        }
      }, data._id);
      return cardItem.generateCard();
    }

    // Запрос карточек  //ПРИОРИТЕТ 1
    api.getInitialCards()
      .then((data) => {
        console.log(data);
        //добавляем массив объектов карточек
        const section = new Section({
          items: data,
          renderer: (item) => {
            const card = createCard(item);
            section.addItem(card);
          }
        }, '.elements__container');

        //вызов метода класса Section
        section.renderItems();

        return section;
      })
      //Добавление карточек в разметку
      .then((section) => {
        const popupWithFormAdd = new PopupWithForm({
          // получаем колбэком данные из инпутов
          handleFormSubmit: (unputValues) => {
            //создание экземпляра класса карточки и добавление на страницу
            section.addItem(createCard(unputValues));

            api.postNewCard(unputValues);


          }
        }, '.popup_type_add')

        // функция открытия попапа добавления места
        function openPlacePopup() {
          validationPlacePopup.resetForm();
          popupWithFormAdd.open();
        }

        // слушатель на клик открытие попапа добавления места
        profileAddButton.addEventListener('click', () => {
          openPlacePopup();
        })

      })
      .catch(res => {
        console.log(res)
      });
  })



// получает изначальные данные профиля от сервера //ПРИОРИТЕТ 1
api.getProfileName()
  .then(data => {
    profileTitle.textContent = data.name;
    profileJob.textContent = data.about;
  })
  .catch(res => {
    return console.log(res)
  })

const popupWithFormEdit = new PopupWithForm({
  // получаем колбэком данные из инпутов
  handleFormSubmit: (unputValues) => {
    // подставляем данные в профиль
    userInfo.setUserInfo(unputValues);
    api.patchProfileName(unputValues).catch(res => {
      return console.log(res)
    });
  }
}, '.popup_type_edit')

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
// слушатель на клик открытие попапа редактирования
profileEditButton.addEventListener('click', () => {
  openProfilePopup();
})


//загружаем изначальную аватарку с сервера  //ПРИОРИТЕТ 1
api.getAvatarProfile()
  .then((data) => {
    console.log(data.avatar);
    avatarProfile.src = data.avatar
  })
  .catch(res => {
    return console.log(res)
  })

//меняем аватарку и подгружаем новую с сервера
const popupAvatar = new PopupWithForm({
    handleFormSubmit: (unputValues) => {
      api.patchAvatarProfile(unputValues.link).then(() => {
        api.getAvatarProfile()
          .then((data) => {
            avatarProfile.src = data.avatar
          })
          .catch(res => {
            return console.log(res)
          })
      })
    }
  },
  '.popup_type_avatar'
)

/// открытие попапа при клике на аватар
avatarProfileEdit.addEventListener('click', () => {
  validationProfileAvatarPopup.resetForm();
  popupAvatar.open();
})