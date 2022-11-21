import Popup from './Popup.js';
import {
    popupImageInfo,
    popupFigcaptionImage
} from '../utils/constans.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }
    open(card) {
        this._elementImage = card.querySelector('.elements__img');
        this._elementTitle = card.querySelector('.elements__title');

        popupImageInfo.src = this._elementImage.src;
        popupImageInfo.alt = this._elementImage.alt;
        popupFigcaptionImage.textContent = this._elementTitle.textContent;
        super.open();
    }
}