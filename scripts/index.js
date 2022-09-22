// popups
const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

// popups close 
const popupEditClose = popupEdit.querySelector('.popup__close');
const popupAddClose = popupAdd.querySelector('.popup__close');
const popupImageClose = popupImage.querySelector('.popup__close');

// popupImage
const popupImageInfo = popupImage.querySelector('.popup__image');
const popupFigcaptionImage = popupImage.querySelector('.popup__figcaption');

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

const cardsTemplate = document.querySelector('.cards-template').content;
const elementsContainer = document.querySelector('.elements__container');

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

// слушатель на клик открытие попапа редактирования с сохр новых значений
profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileJob.textContent;
    popupOpen(popupEdit);
});

// слушатель на клик открытие попапа добавления места
profileAddButton.addEventListener('click', () => {
  //сбросить инпуты
  placeName.value = 'Название';
  imageLink.value = 'Ссылка на картинку';
  popupOpen(popupAdd);
})

// слушатель на клик закрытия попапа изображения
popupImageClose.addEventListener('click', () => {
  popupClose(popupImage);
})

//слушатель на клик закрытие попапа редактирования
popupEditClose.addEventListener('click', function() {
  popupClose(popupEdit);
});

//слушатель на клик закрытие попапа добавления
popupAddClose.addEventListener('click', function() {
  popupClose(popupAdd);
});

//создание карточки
function createCard(initialCard) {
  const card = cardsTemplate.querySelector('.elements__el').cloneNode(true);

  const cardImage = card.querySelector('.elements__img');
  cardImage.alt = initialCard.name;
  cardImage.src = initialCard.link;
  cardImage.addEventListener('click', () => openedCardImage(card));

  const cardTitle = card.querySelector('.elements__title');
  cardTitle.textContent = initialCard.name;

  setListenerForCard(card);
  return card;
}

//создание карточки по элементам массива из шаблона
const renderCard = (initialCard) => {
  initialCard.forEach((item) => {
    elementsContainer.appendChild(createCard(item))
  })
}

//создание карточки от пользователя в начало
const renderCardPrepend = (array) => {
  array.forEach((item) => {
    elementsContainer.prepend(createCard(item))
  })
}

renderCard(initialCards);

// добавление данных от пользователя для добавления карточки
function addSubmitForm(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

  const item = {};
  item.name = placeName.value;
  item.link = imageLink.value;
  const arrayItem = [item];
  renderCardPrepend(arrayItem);
  popupClose(popupAdd);
}
formAdd.addEventListener('submit', addSubmitForm); 

// слушатель для card
function setListenerForCard(card) {
  //для лайка
  const cardLike = card.querySelector('.elements__like');
  cardLike.addEventListener('click', likeCard);

  //для удаления
  const cardDelete = card.querySelector('.elements__trash');
  cardDelete.addEventListener('click', deleteCard);
}

// возвращает лайк
function likeCard(event) {
  const elementLike = event.target.closest('.elements__like');
  elementLike.classList.toggle('elements__like_active');
}

// возвращаяет удаление
function deleteCard(event) {
  const cardTrash = event.target.closest('.elements__el');
  cardTrash.remove();
} 

// возвращяет увеличенное изображение с подписью ВОПРОСЫ!!!!!!
function openedCardImage(card) { 

  const elementImage = card.querySelector('.elements__img');
  const elementTitle = card.querySelector('.elements__title');

  popupImageInfo.src = elementImage.src;
  popupImageInfo.alt = elementImage.alt;

  popupFigcaptionImage.textContent = elementTitle.textContent;

  popupImage.classList.add('popup_opened');
}