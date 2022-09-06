const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');
const popupClose = formElement.querySelector('.popup__close');
const nameInput = formElement.querySelector('.popup__name-input');
const jobInput = formElement.querySelector('.popup__job-input');
const popupSaveButton = formElement.querySelector('.popup__save-btn');

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
    popupToggle();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 

// функция открытия и закрытия popup
function popupToggle() {
   popup.classList.toggle('popup_opened');
}

//открытие popup редактирования с сохранением новых значений
profileEditButton.addEventListener('click', () =>{
    nameInput.value = profileTitle.textContent;
    jobInput.value = profileJob.textContent;    
    popupToggle();
});

//закрытие popup
popupClose.addEventListener('click', () =>{
    popupToggle();
});

const elLike = document.querySelectorAll('.elements__like');
// реализация лайка для фотографий
for (let i = 0; i < elLike.length; i++) {
    elLike[i].addEventListener('click', () => {
        elLike[i].classList.toggle('elements__like_active');
    });
}