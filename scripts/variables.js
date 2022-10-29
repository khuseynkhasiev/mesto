// popups 
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImage = document.querySelector('.popup_type_image');

// popups close button
const popupEditCloseButton = popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const popupImageCloseButton = popupImage.querySelector('.popup__close');

// popupImage
const popupImageInfo = popupImage.querySelector('.popup__image');
const popupFigcaptionImage = popupImage.querySelector('.popup__figcaption');

// formEdit
const formEdit = popupEdit.querySelector('.popup__container');
const nameInput = formEdit.querySelector('.popup__input_type_name');
const jobInput = formEdit.querySelector('.popup__input_type_job');

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

const cardTemplate = document.querySelector('.cards-template').content;
const cardsContainer = document.querySelector('.elements__container');

export { popupImage, popupImageInfo, popupFigcaptionImage, popupEdit, popupAdd, popupEditCloseButton, popupAddCloseButton, popupImageCloseButton, formEdit, nameInput, jobInput, formAdd, placeName, imageLink, profileTitle, profileJob, profileEditButton, profileAddButton, cardTemplate, cardsContainer };