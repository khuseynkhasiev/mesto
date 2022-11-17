import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({
        handleFormSubmit
    }, popupSelector) {
        super();
        this._popupSelector = popupSelector;

        this._handleFormSubmit = handleFormSubmit;
        this._form = this._popupSelector.querySelector('.popup__form');

        this._inputList = this._form.querySelectorAll('.popup__input');
    }
    _getInputValues() {
        this._inputValues = {}
        this._inputList.forEach(input => {
            inputValues[input.name] = input.value;
        });

        return this._inputValues;
    }
    setEventListeners = () => {
        console.log('сработал PopupWithForm.setEventListeners()');
        //слушатель на клик по иконке закрытие попапа
        this._popupSelector.querySelector('.popup__close').addEventListener('click', () => {
            this.close();
        })
        this._form.addEventListener('submit', this._handleFormSubmit);
    }
    close() {
        super.close();
        console.log('сработал PopupWithForm.close()');
        this._form.reset();
    }
}