const formEdit = document.querySelector('.edit-form');
const profileEditButton = document.querySelector('.profile__edit-button');
const editFormClose = formEdit.querySelector('.edit-form__close');

const editFormName = formEdit.querySelector('.edit-form__name');
const editFormSubname = formEdit.querySelector('.edit-form__subname');
const editFormButton = formEdit.querySelector('.edit-form__button');
const profileTitle = document.querySelector('.profile__title');
const profileSubtext = document.querySelector('.profile__subtext');

// функция открытия и закрытия формы редактирования
function formEditToggle() {
    formEdit.classList.toggle('edit-form_opened');
}

//обновление данных формы редактирования
function updateFormEdit() {
    editFormName.value = profileTitle.innerText;
    editFormSubname.value = profileSubtext.innerText;
}

//открытие формы редактирования
profileEditButton.addEventListener('click', () =>{
    updateFormEdit();
    formEditToggle();
});

//закрытие формы редактирования
editFormClose.addEventListener('click', () =>{
    formEditToggle();
});

// сохранение внесенных изменений в форму редактирования
editFormButton.addEventListener('click', () =>{
    profileTitle.innerText = editFormName.value;
    profileSubtext.innerText = editFormSubname.value;
    formEditToggle();
});


const elLike = document.querySelectorAll('.elements__like');
// реализация лайка для фотографий
for (let i = 0; i < elLike.length; i++) {
    elLike[i].addEventListener('click', () => {
        elLike[i].classList.toggle('elements__like_active');
    })
}
