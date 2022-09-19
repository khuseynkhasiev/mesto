// popups
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

// popups close 
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupAddClose = popupAdd.querySelector('.popup__close');

// formEdit
const formEdit = popupEdit.querySelector('.popup__container');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_job');
const popupTitle = formEdit.querySelector('.popup__title');

// formAdd
const formAdd = popupAdd.querySelector('.popup__container');
const placeName = formAdd.querySelector('.popup__input_type_name');
const imageLink = formAdd.querySelector('.popup__input_type_job');

//profile
const profile = document.querySelector('.profile');
const profileTitle = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__job');
//popups open button
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileAddButton = profile.querySelector('.profile__add-button');


function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileTitle.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    // Вставьте новые значения с помощью textContent
    // закрытие попапа после сохранения
    popupClose(popupEdit);
}
formEdit.addEventListener('submit', formSubmitHandler); 

// открытие попапа
const popupOpen = function (popup) {
  popup.classList.add('popup_opened');
}

// закрытие попапа
const popupClose = function (popup) {
  popup.classList.remove('popup_opened');
}

// слушатель на клик, открытие попапа редактирования с сохр новых значений
profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileJob.textContent;
    popupOpen(popupEdit);
});

// слушатель на клик, открытие попапа добавления места
profileAddButton.addEventListener('click', () => {
  //сбросить инпуты
  placeName.value = 'Название';
  imageLink.value = 'Ссылка на картинку';
  popupOpen(popupAdd);
})

//слушатель на клик, закрытие попапа редактирования
popupEditClose.addEventListener('click', function() {
  popupClose(popupEdit);
});

//слушатель на клик, закрытие попапа добавления
popupAddClose.addEventListener('click', function() {
  popupClose(popupAdd);
});

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const cardsTemplate = document.querySelector('.cards-template').content;
  const elementsContainer = document.querySelector('.elements__container');
  
//создание карточки
function startCards (initialCards) {
  const card = cardsTemplate.querySelector('.elements__el').cloneNode(true);

  const elementImage = card.querySelector('.elements__img');
  elementImage.alt = initialCards.name;
  elementImage.src = initialCards.link;

  const elementTitle = card.querySelector('.elements__title');
  elementTitle.textContent = initialCards.name;

  return card;
}

//создание карточки по элементам массива из шаблона
const renderCard = (initialCards) => {
  initialCards.forEach((item) => {
    elementsContainer.appendChild(startCards(item))
  })
}

//создание карточки от пользователя в начало
const renderCardPrepend = (array) => {
  array.forEach((item) => {
    elementsContainer.prepend(startCards(item))
  })
}

renderCard(initialCards);

// добавление данных от пользователя для добавления карточки
function formSubmitAdd (evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const item = {};
  item.name = placeName.value;
  item.link = imageLink.value;
  const arrayItem = [item];
  renderCardPrepend(arrayItem);
  popupClose(popupAdd);
}
formAdd.addEventListener('submit', formSubmitAdd); 

const imageLike = document.querySelectorAll('.elements__like');
// реализация лайка для фотографий (через foEach)
/* imageLike.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('elements__like_active');
  })
}); */
// реализация лайка для фотографий (через цикл for)
for (let i = 0; i < imageLike.length; i++) {
  imageLike[i].addEventListener('click', () => {
    imageLike[i].classList.toggle('elements__like_active');
    });
}
