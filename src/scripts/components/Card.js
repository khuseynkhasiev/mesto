 export default class Card {
   constructor(card, templateSelector, {
     handleCardClick,
     handleLikeClick,
     handleDeleteIconClick
   }, userId) {
     this._card = card;
     this._place = card.name;
     this._url = card.link;
     this._likes = card.likes;
     this._id = card._id;
     this._ownerId = card.owner._id;
     this._userId = userId;
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
     this._elementNumber = this._element.querySelector('.elements__number');
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
     this.setLikesCard(this._likes);
     this._checkUserId();

     return this._element;
   }

   _checkUserId = () => {
     if (this._ownerId !== this._userId) {
       this._elementTrash.style.display = 'none'
     }
   }

   // слушатель для card
   _setCardListeners() {
     // установка слушателя для открытия попапа картинки

     this._elementImage.addEventListener('click', () => this._handleCardClick(this._place, this._url));

     //для лайка
     this._elementLike.addEventListener('click', () => this._handleLikeClick(this._id));

     //для открытия попапа подтверждения удаления
     this._elementTrash.addEventListener('click', () => this._handleDeleteIconClick(this._id));
   }

   isLiked() {
     const userHasLikedCard = this._likes.find((user => user._id === this._userId))
     return userHasLikedCard;
   }

   setLikesCard(newLikes) {
     this._likes = newLikes;
     this._elementNumber.textContent = this._likes.length;

     if (this.isLiked()) {
       this._addLikeCardIcon();
     } else {
       this._removeLikeCardIcon();
     }
   }

   // возвращает лайк
   _addLikeCardIcon = () => {
     this._elementLike.classList.add('elements__like_active');
   }
   // возвращает лайк
   _removeLikeCardIcon = () => {
     this._elementLike.classList.remove('elements__like_active');
   }

   // возвращаяет удаление
   deleteCard = () => {
     this._element.remove();
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