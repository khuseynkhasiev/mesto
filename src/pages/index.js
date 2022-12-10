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
  avatarProfileEdit,
  apiConfig
} from '../scripts/utils/constans.js';
import {
  initialCards
} from '../scripts/utils/cards.js';
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


const api = new Api(
  apiConfig
);

const userInfo = new UserInfo({
  profileTitle,
  profileJob
});

let userId;

// получает изначальные данные профиля от сервера //ПРИОРИТЕТ 1
api.getProfileInfo()
  .then(data => {
    /*     profileTitle.textContent = data.name;
        profileJob.textContent = data.about; */
    userInfo.setUserInfo(data);
    userId = data._id;
  })
  .catch(res => {
    return console.log(res)
  })

// отправляем данные профиля на сервер и после подставляем в профиль
const popupWithFormEdit = new PopupWithForm({
  // получаем колбэком данные из инпутов
  handleFormSubmit: (unputValues) => {
    // подставляем данные в профиль
    api.patchProfileInfo(unputValues)
      .then(() => {
        console.log(validationConfig.submitButtonSelector);
        userInfo.setUserInfo(unputValues)
      })
    popupWithFormEdit.close();
  }
}, '.popup_type_edit')


// создание экземпляра класса карточки
const createCard = (item) => {
  const cardItem = new Card(item, cardTemplate, {
    handleCardClick: (place, url) => {
      popupWithImage.open(place, url);
    },
    handleLikeClick: (id) => {
      console.log('like')

      if (cardItem.isLiked()) {
        api.deleteCardLike(id).then((res) => {
          console.log('res', res)
          cardItem.setLikesCard(res.likes);
        })
      } else {
        api.putCardLike(id).then((res) => {
          console.log('res', res)
          cardItem.setLikesCard(res.likes);
        })
      }
    },
    handleDeleteIconClick: (id) => {
      popupWithSubmit.open();
      popupWithSubmit.changeSubmitHandler(() => {
        api.deleteCard(id).then((res => {
          cardItem.deleteCard();
          popupWithSubmit.close();
          console.log('res', res)
        }))
      })
    }
  }, userId);
  return cardItem.generateCard();
}


// запрос массива карточек от сервера !!!! пробую
api.getInitialCards()
  .then(cards => {
    console.log(cards)
    cards.forEach((data) => {
      //const card = createCard(data)
      section.addItem(createCard(data));
    })
  })
  .catch(res => {
    return console.log(res)
  })

const handleFormSubmit = (data) => {
  // получаем колбэком данные из инпутов
  console.log(data);
  api.postNewCard(data)
    .then((data) => {
      console.log(data)
      //const card = createCard(data);
      section.addItem(createCard(data));
    })
    .catch(res => {
      return console.log(res)
    })
  popupWithFormAdd.close();
}
const popupWithFormAdd = new PopupWithForm({
  handleFormSubmit
}, '.popup_type_add')


//загружаем изначальную аватарку с сервера  //ПРИОРИТЕТ 1
api.getAvatarProfile()
  .then((data) => {
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
        popupAvatar.close();
      })
    }
  },
  '.popup_type_avatar'
)
// открытие попапа при клике на аватар
avatarProfileEdit.addEventListener('click', () => {
  validationProfileAvatarPopup.resetForm();
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





/* // Запрос карточек  //ПРИОРИТЕТ 1
api.getInitialCards()
  .then((data) => {
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
  }) */





/* // создание экземпляра класса карточки
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
}) */