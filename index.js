const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__container');
const popupClose = formElement.querySelector('.popup__close');
const nameInput = formElement.querySelector('.popup__name-input');
const jobInput = formElement.querySelector('.popup__job-input');
const popupSaveButton = formElement.querySelector('.popup__save-btn');

const profileEditButton = document.querySelector('.profile__edit-button');
const profileTitle = document.querySelector('.profile__title');
const profileJob = document.querySelector('.profile__job');

// функция открытия и закрытия popup
function popupToggle() {
   popup.classList.toggle('popup_opened');
}

//открытие popup редактирования с сохранением новых значений
profileEditButton.addEventListener('click', () =>{
    nameInput.value = profileTitle.innerText;
    jobInput.value = profileJob.innerText;    
    popupToggle();
});

//закрытие popup
popupClose.addEventListener('click', () =>{
    popupToggle();
});

// сохранение внесенных изменений в popup
popupSaveButton.addEventListener('click', () =>{
    profileTitle.innerText = nameInput.value;
    profileJob.innerText = jobInput.value;
    popupToggle();
});

const elLike = document.querySelectorAll('.elements__like');
// реализация лайка для фотографий
for (let i = 0; i < elLike.length; i++) {
    elLike[i].addEventListener('click', () => {
        elLike[i].classList.toggle('elements__like_active');
    });
}