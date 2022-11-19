import Popup from './Popup.js';
import {
    popupImageInfo,
    popupFigcaptionImage
} from '../utils/constans.js';

export default class PopupWithImage extends Popup {
    constructor(card) {
        super();
        this._card = card;
    }
    open() {
        const elementImage = this._card.querySelector('.elements__img');
        const elementTitle = this._card.querySelector('.elements__title');

        popupImageInfo.src = elementImage.src;
        popupImageInfo.alt = elementImage.alt;
        popupFigcaptionImage.textContent = elementTitle.textContent;
    }
}