const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');
const popupCloseForm = formElement.querySelector('.popup__close');
const nameInput = formElement.querySelector('.popup__input_type_name');
const jobInput = formElement.querySelector('.popup__input_type_job');

const profile = document.querySelector('.profile');
const profileEditButton = profile.querySelector('.profile__edit-button');
const profileTitle = profile.querySelector('.profile__title');
const profileJob = profile.querySelector('.profile__job');

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
    popupClose();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

function popupOpen() {
    popup.classList.add('popup_opened');
}

function popupClose() {
    popup.classList.remove('popup_opened');
}
//открытие popup редактирования с сохранением новых значений
profileEditButton.addEventListener('click', () => {
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileJob.textContent;    
    popupOpen();
});

//закрытие popup
popupCloseForm.addEventListener('click', popupClose);


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

//создание карточки по элементам массива
const renderCard = (initialCards) => {
  initialCards.forEach((item) => {
    elementsContainer.appendChild(startCards(item))
  })
}
renderCard(initialCards);







/* const elLike = document.querySelectorAll('.elements__like');
 реализация лайка для фотографий
for (let i = 0; i < elLike.length; i++) {
    elLike[i].addEventListener('click', () => {
        elLike[i].classList.toggle('elements__like_active');
    });
} */