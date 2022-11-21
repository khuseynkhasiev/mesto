export default class Popup {
    constructor(popupSelector) {
        this.popupSelector = document.querySelector(popupSelector);
        this._popupButtonClose = this.popupSelector.querySelector('.popup__close');
    }
    // открытие попапа 
    open() {
        this.popupSelector.classList.add('popup_opened');
        this.setEventListeners();
    }
    // закрытие попапа 
    close() {
        this.popupSelector.classList.remove('popup_opened');
        // удаление слушателя для закрытия через кнопку Escape 
        document.removeEventListener('keydown', this._handleEscClose);
        // удаление слушателя для закрытия попапа кликом на оверлей 
        this.popupSelector.removeEventListener('click', this._handleOverlayClose);
        // удаление слушателя для закрытия попапа кликом на кнопку
        this._popupButtonClose.removeEventListener('click', this._handleButtonClose);
    }
    // закрытие попапа клавишей Esc 
    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }
    //закрытие на клик по иконке закрытие попапа 
    _handleButtonClose = (evt) => {
        if (evt.target.classList.contains('popup__close')) {
            this.close();
        }
    }

    // закрытие попапа кликом на оверлей 
    _handleOverlayClose = (evt) => {
        if (evt.target.classList.contains('popup')) {
            this.close();
        }
    }

    setEventListeners() {
        // слушатель для закрытия попапа через кнопку Escape 
        document.addEventListener('keydown', this._handleEscClose);
        // слушатель для закрытия попапа кликом на оверлей 
        this.popupSelector.addEventListener('click', this._handleOverlayClose);
        // слушатель для закрытия попапа кликом на кнопку 
        this._popupButtonClose.addEventListener('click', this._handleButtonClose);
    }
}