 export default class Card {
   constructor(card, templateSelector, {
       handleCardClick,
       handleLikeClick,
       handleDeleteIconClick
     },
     id) {
     this._idCard = card.id;
     this._idUser = id;
     this._card = card;
     this._place = card.name;
     this._url = card.link;
     this._templateSelector = templateSelector;
     this._element = this._getTemplate();
     this._elementImage = this._element.querySelector('.elements__img');
     this._elmentTitle = this._element.querySelector('.elements__title');
     this._handleCardClick = handleCardClick;
     this._handleLikeClick = handleLikeClick;
     this._handleDeleteIconClick = handleDeleteIconClick;
     this._elementLike = this._element.querySelector('.elements__like');
     this._elementTrash = this._element.querySelector('.elements__trash');
     this._buttonDeleteCard = document.querySelector('.popup__card_delete');
     console.log(this._idCard);
     console.log(this._idUser);
   }

   _getTemplate = () => {
     const cardTemplate = this._templateSelector.querySelector('.elements__el').cloneNode(true)

     return cardTemplate;
   }
   generateCard() {
     this._elmentTitle.textContent = this._place;
     this._elementImage.alt = this._place;
     this._elementImage.src = this._url;

     // установка слушателя для лайка и удаления карточки
     this._setCardListeners(this._element);

     return this._element;
   }

   // слушатель для card
   _setCardListeners() {
     // установка слушателя для открытия попапа картинки

     this._elementImage.addEventListener('click', () => this._handleCardClick(this._place, this._url));

     //для лайка
     this._elementLike.addEventListener('click', this._likeCard);

     //для открытия попапа подтверждения удаления
     this._elementTrash.addEventListener('click', () => this._handleDeleteIconClick(this._card));

     //для удаления
   }

   // возвращает лайк
   _likeCard = () => {
     this._elementLike.classList.toggle('elements__like_active');
   }

   // возвращаяет удаление
   deleteCard = () => {
     if (this._idUser === '') {
       this._element.remove();
     } else console.log('Это не ваша карточка')
   }
 }





 /* export default class Card {
   constructor(card, templateSelector, {
     handleCardClick,
     handleLikeClick,
     handleDeleteIconClick
   }) {
     this._card = card;
     this._place = card.name;
     this._url = card.link;
     this._templateSelector = templateSelector;
     this._element = this._getTemplate();
     this._elementImage = this._element.querySelector('.elements__img');
     this._elmentTitle = this._element.querySelector('.elements__title');
     this._handleCardClick = handleCardClick;
     this._handleLikeClick = handleLikeClick;
     this._handleDeleteIconClick = handleDeleteIconClick;
     this._elementLike = this._element.querySelector('.elements__like');
     this._elementTrash = this._element.querySelector('.elements__trash');
     this._buttonDeleteCard = document.querySelector('.popup__card_delete');
   }

   _getTemplate = () => {
     const cardTemplate = this._templateSelector.querySelector('.elements__el').cloneNode(true)

     return cardTemplate;
   }
   generateCard() {
     this._elmentTitle.textContent = this._place;
     this._elementImage.alt = this._place;
     this._elementImage.src = this._url;

     // установка слушателя для лайка и удаления карточки
     this._setCardListeners(this._element);

     return this._element;
   }

   // слушатель для card
   _setCardListeners() {
     // установка слушателя для открытия попапа картинки

     this._elementImage.addEventListener('click', () => this._handleCardClick(this._place, this._url));

     //для лайка
     this._elementLike.addEventListener('click', this._likeCard);

     //для открытия попапа подтверждения удаления
     this._elementTrash.addEventListener('click', () => this._handleDeleteIconClick(this._card));

     //для удаления
   }

   // возвращает лайк
   _likeCard = () => {
     this._elementLike.classList.toggle('elements__like_active');
   }

   // возвращаяет удаление
   deleteCard = () => {
     this._element.remove();
   }
 } */