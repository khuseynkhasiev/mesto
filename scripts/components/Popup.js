export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
    }
    // открытие попапа
    open() {
        this._popupSelector.classList.add('popup_opened');

        // слушатель для закрытия попапа через кнопку Escape
        document.addEventListener('keydown', this._handleEscClose);

        // слушатель для закрытия попапа кликом на оверлей
        this._popupSelector.addEventListener('click', this.setEventListeners);

    }
    // закрытие попапа
    close() {
        this._popupSelector.classList.remove('popup_opened');

        // удаление слушателя для закрытия через кнопку Escape
        document.removeEventListener('keydown', this._handleEscClose);

        // удаление слушателя для закрытия попапа кликом на оверлей
        this._popupSelector.removeEventListener('click', this.setEventListeners);
    }

    // закрытие попапа клавишей Esc
    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    // закрытие попапа кликом на оверлей
    setEventListeners = (evt) => {
        if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
            this.close();
        }
    }
}