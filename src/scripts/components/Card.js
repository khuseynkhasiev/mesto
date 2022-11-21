export default class Card {
  constructor(card, templateSelector, {
    handleCardClick
  }) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.elements__img');
    this._elmentTitle = this._element.querySelector('.elements__title');
    this._handleCardClick = handleCardClick;
    this._elementLike = this._element.querySelector('.elements__like');
    this._elementTrash = this._element.querySelector('.elements__trash');
  }

  _getTemplate = () => {
    const cardTemplate = this._templateSelector.querySelector('.elements__el').cloneNode(true)

    return cardTemplate;
  }
  generateCard() {
    this._elmentTitle.textContent = this._name;
    this._elementImage.alt = this._name;
    this._elementImage.src = this._link;

    // установка слушателя для лайка и удаления карточки
    this._setCardListeners(this._element);

    return this._element;
  }

  // слушатель для card
  _setCardListeners() {
    // установка слушателя для открытия попапа картинки
    this._elementImage.addEventListener('click', () => this._handleCardClick(this._element));

    //для лайка
    this._elementLike.addEventListener('click', this._likeCard);

    //для удаления
    this._elementTrash.addEventListener('click', this._deleteCard);
  }

  // возвращает лайк
  _likeCard = () => {
    this._elementLike.classList.toggle('elements__like_active');
  }

  // возвращаяет удаление
  _deleteCard = () => {
    this._element.remove();
  }
}