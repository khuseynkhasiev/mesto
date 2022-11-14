export default class Section {
    constructor({
        items,
        renderer
    }, cardsContainer) {
        this._items = items,
            this._renderer = renderer,
            this._cardsContainer = document.querySelector(cardsContainer)
    }

    //перебор карточек из массива объектов
    renderItems() {
        this._items.reverse().forEach((item) => this._renderer(item))
    }

    //добавление карточки в начало
    addItem(itemHtml) {
        this._cardsContainer.prepend(itemHtml);
    }
}