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

// открытие попапа
const openPopup = function(popup) {
  popup.classList.add('popup_opened');

  // слушатель для закрытия попапа через кнопку Escape
  document.addEventListener('keydown', handleClosePopupByEsc);

  // слушатель для закрытия попапа кликом на оверлей
  popup.addEventListener('click', handleClosePopupByClick);
}

// закрытие попапа кликом на оверлей
function handleClosePopupByClick (evt) {
  if(evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
    closePopup(evt.target);
  }
}

// закрытие попапа с через кнопку Escape
function handleClosePopupByEsc (evt) {
  if (evt.key === "Escape") {
    const activePopup = document.querySelector('.popup_opened');
    closePopup(activePopup);
  }
}

// закрытие попапа
const closePopup = function(popup) {
  popup.classList.remove('popup_opened');

  // удаление слушателя для закрытия через кнопку Escape
  document.removeEventListener('keydown', handleClosePopupByEsc);

  // удаление слушателя для закрытия попапа кликом на оверлей
  popup.removeEventListener('click', handleClosePopupByClick);
}

// слушатель на клик открытие попапа редактирования
profileEditButton.addEventListener('click', () => {
  openProfilePopup(popupEdit, validationConfig);
})

// функция открытия попапа редактирования
function openProfilePopup(popupEdit, validationConfig) {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileJob.textContent;
  resetForm(popupEdit, validationConfig);
}

// слушатель на клик открытие попапа добавления места
profileAddButton.addEventListener('click', () => {
  openPlacePopup(popupAdd, validationConfig);
})

// функция открытия попапа добавления места
function openPlacePopup(popupAdd, validationConfig) {
  const formAdd = popupAdd.querySelector('.popup__form');
  formAdd.reset();
  resetForm(popupAdd, validationConfig);
}

// слушатель на клик закрытия попапа изображения
popupImageCloseButton.addEventListener('click', () => {
  closePopup(popupImage);
})

//слушатель на клик закрытие попапа редактирования
popupEditCloseButton.addEventListener('click', function() {
  closePopup(popupEdit);
})

//слушатель на клик закрытие попапа добавления
popupAddCloseButton.addEventListener('click', function() {
  closePopup(popupAdd);
})

// рефакторинг карточек начало ---------------
//создание карточки в начало
const renderCard = (cardItem) => {
  cardsContainer.prepend(cardItem.generateCard());
}
//перебор карточек из массива объектов
initialCards.reverse().forEach((cardObject) => {
  const cardItem = new Card(cardObject, cardTemplate);
  renderCard(cardItem);
});

// добавление данных от пользователя для добавления карточки
function handleCardFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const item = {
    name: placeName.value,
    link: imageLink.value
  }
  renderCard(item);
  closePopup(popupAdd);
}

formAdd.addEventListener('submit', handleCardFormSubmit); 
// рефакторинг карточек конец ----------------
