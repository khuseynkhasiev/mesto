import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {

    constructor({
        handleFormSubmit
    }, popupSelector) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._form = this.popupSelector.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
    }
    // собираем данные с инпутов формы
    _getInputValues = () => {
        this._inputValues = {}
        this._inputList.forEach(input => {
            this._inputValues[input.name] = input.value;
        });
        return this._inputValues;
    }

    // отменяем стандартную отправку, добавляем методы класса
    _setInputValues = (evt) => {
        evt.preventDefault();
        this._handleFormSubmit(this._getInputValues());
        this.close();
    }
    setEventListeners() {
        super.setEventListeners();
        // ставим слушатель на сабмит
        this._form.addEventListener('submit', this._setInputValues);
    }
    close() {
        super.close();
        this._form.reset();
    }
}