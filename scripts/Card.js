import {
  popupImage,
  popupImageInfo,
  popupFigcaptionImage
} from './constans.js';
import {
  openPopup
} from './utils.js';
export default class Card {
  constructor(card, templateSelector) {
    this._name = card.name;
    this._link = card.link;
    this._templateSelector = templateSelector;
    this._element = this._getTemplate();
    this._elementImage = this._element.querySelector('.elements__img');
    this._elmentTitle = this._element.querySelector('.elements__title');
  }

  _getTemplate() {
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

  //возвращяет увеличенное изображение с подписью
  _openCardImage(card) {
    const elementImage = card.querySelector('.elements__img');
    const elementTitle = card.querySelector('.elements__title');

    popupImageInfo.src = elementImage.src;
    popupImageInfo.alt = elementImage.alt;
    popupFigcaptionImage.textContent = elementTitle.textContent;

    openPopup(popupImage);
  }

  // слушатель для card
  _setCardListeners(card) {
    // установка слушателя для открытия попапа картинки
    this._elementImage.addEventListener('click', () => this._openCardImage(this._element));

    //для лайка
    const cardLike = card.querySelector('.elements__like');
    cardLike.addEventListener('click', this._likeCard);

    //для удаления
    const cardDelete = card.querySelector('.elements__trash');
    cardDelete.addEventListener('click', this._deleteCard);
  }

  // возвращает лайк
  _likeCard(event) {
    const elementLike = event.target.closest('.elements__like');
    elementLike.classList.toggle('elements__like_active');
  }

  // возвращаяет удаление
  _deleteCard(event) {
    const cardTrash = event.target.closest('.elements__el');
    cardTrash.remove();
  }
}