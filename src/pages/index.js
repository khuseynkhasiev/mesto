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
  popupProfileAvatar,
  avatarProfile,
  avatarProfileEdit,
  apiConfig,
  popupAddButton,
  popupEditButton,
  popupProfileAvatarButton
} from '../scripts/utils/constans.js';
import Section from '../scripts/components/Section.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import UserInfo from '../scripts/components/UserInfo.js';
import Api from '../scripts/components/Api.js';


// создание экземляров класса валидации для формы редактирования и добавления карточки
const validationProfilePopup = new FormValidator(popupEdit, validationConfig);
const validationPlacePopup = new FormValidator(popupAdd, validationConfig);
const validationProfileAvatarPopup = new FormValidator(popupProfileAvatar, validationConfig);

validationPlacePopup.enableValidation();
validationProfilePopup.enableValidation();
validationProfileAvatarPopup.enableValidation();

const popupWithImage = new PopupWithImage('.popup_type_image', popupImageInfo,
  popupFigcaptionImage);

const popupWithSubmit = new PopupWithForm({
  handleFormSubmit: () => {}
}, '.popup_type_delete');

// создаем Api из шаблона
const api = new Api(
  apiConfig
);

const userInfo = new UserInfo({
  profileTitle,
  profileJob
});

let userId; // получаем userId для передачи в класс Card

api.getAllPromise().then(data => {
  const [getProfileInfo,
    getInitialCards, getAvatarProfile
  ] = data;
  userInfo.setUserInfo(getProfileInfo);
  userId = getProfileInfo._id;

  //передача параметров и создание экземпляра класса
  const section = new Section({
    items: getInitialCards,
    renderer: (item) => {
      const card = createCard(item);
      section.addItem(card);
    }
  }, '.elements__container');

  //загружаем изначальную аватарку с сервера
  avatarProfile.src = getAvatarProfile.avatar

  //вызов метода класса Section
  section.renderItems();

  return section
}).then((section) => {
  // Добавляем новую карточку
  const popupWithFormAdd = new PopupWithForm({
    handleFormSubmit: (unputValues) => {
      // получаем колбэком данные из инпутов
      api.postNewCard(unputValues)
        .then((data) => {
          popupAddButton.textContent = 'Сохранение...'
          section.addItem(createCard(data));
          popupWithFormAdd.close();
        })
        .catch(err => {
          return console.log(err)
        })
    }
  }, '.popup_type_add')

  // функция открытия попапа добавления места
  function openPlacePopup() {
    validationPlacePopup.resetForm();

    // возвращяем дефолтное значение кнопки добавить карточку
    popupAddButton.textContent = 'Сохранить'

    popupWithFormAdd.open();
  }

  // слушатель на клик открытие попапа добавления места
  profileAddButton.addEventListener('click', () => {
    openPlacePopup();
  })
}).catch(err => {
  return console.log(err)
})


// отправляем данные профиля на сервер и после подставляем в профиль
const popupWithFormEdit = new PopupWithForm({
  // получаем колбэком данные из инпутов
  handleFormSubmit: (unputValues) => {
    // подставляем данные в профиль на сервере
    api.patchProfileInfo(unputValues)
      .then((profileInfo) => {
        popupEditButton.textContent = 'Сохранение...'
        userInfo.setUserInfo(profileInfo);
        popupWithFormEdit.close();
      })
      .catch(err => {
        return console.log(err)
      })
  }
}, '.popup_type_edit')


// создание экземпляра класса карточки
const createCard = (item) => {
  const cardItem = new Card(item, cardTemplate, {
    // обработчик клика на карточку
    handleCardClick: (place, url) => {
      popupWithImage.open(place, url);
    },
    // обработчик лайка карточки
    handleLikeClick: (id) => {
      // логика проверки стоит ли лайк у карточки
      if (cardItem.isLiked()) {
        api.deleteCardLike(id).then((res) => {
            cardItem.setLikesCard(res.likes);
          })
          .catch(err => {
            return console.log(err)
          })
      } else {
        api.putCardLike(id).then((res) => {
            cardItem.setLikesCard(res.likes);
          })
          .catch(err => {
            return console.log(err)
          })
      }
    },
    // обработчик клика на удаление карточки
    handleDeleteIconClick: (id) => {

      popupWithSubmit.open();
      popupWithSubmit.changeSubmitHandler(() => {
        api.deleteCard(id)
          .then((res => {
            cardItem.deleteCard();
            popupWithSubmit.close();
          }))
          .catch(err => {
            return console.log(err)
          })
      })
    }
  }, userId);
  // генерируем и возвращяем новую карточку
  return cardItem.generateCard();
}


//меняем аватарку и подгружаем новую с сервера
const popupAvatar = new PopupWithForm({
    handleFormSubmit: (unputValues) => {
      api.patchAvatarProfile(unputValues.link)
        .then(() => {
          api.getAvatarProfile()
            .then((data) => {
              popupProfileAvatarButton.textContent = 'Сохранение...';
              avatarProfile.src = data.avatar;
              popupAvatar.close();
            })
            .catch(err => {
              return console.log(err)
            })
        })
        .catch(err => {
          return console.log(err)
        })
    }
  },
  '.popup_type_avatar'
)


// открытие попапа при клике на аватар
avatarProfileEdit.addEventListener('click', () => {
  validationProfileAvatarPopup.resetForm();
  popupProfileAvatarButton.textContent = 'Сохранить'
  popupAvatar.open();
})


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

  // возвращяем дефолтное имя кнопки
  popupEditButton.textContent = 'Сохранить'

  //открываем попап редактирования
  popupWithFormEdit.open();
}