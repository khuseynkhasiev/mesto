const popup = document.querySelector('.popup');
const popupContainer = popup.querySelector('.popup__container');
const popupClose = popup.querySelector('.popup__close');
const nameInput = popup.querySelector('.popup__name-input');
const jobInput = popup.querySelector('.popup__job-input');
const popupSaveButton = popup.querySelector('.popup__save-btn');

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

/* Обрезаем строку больше 12 символов
const elTitle = document.querySelectorAll('.elements__title');
let elTitleStr = '';
for (let i = 0; i < elTitle.length; i++) {
    elTitleStr = elTitle[i].textContent;

    if (elTitleStr.length > 12){
        console.log(elTitleStr);
        elTitle[i].textContent = elTitleStr.slice(0, 11) + '...';
    }
} */
