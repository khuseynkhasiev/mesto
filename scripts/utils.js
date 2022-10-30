// открытие попапа
const openPopup = function (popup) {
    popup.classList.add('popup_opened');

    // слушатель для закрытия попапа через кнопку Escape
    document.addEventListener('keydown', handleClosePopupByEsc);

    // слушатель для закрытия попапа кликом на оверлей
    popup.addEventListener('click', handleClosePopupByClick);
}
// закрытие попапа
const closePopup = function (popup) {
    popup.classList.remove('popup_opened');

    // удаление слушателя для закрытия через кнопку Escape
    document.removeEventListener('keydown', handleClosePopupByEsc);

    // удаление слушателя для закрытия попапа кликом на оверлей
    popup.removeEventListener('click', handleClosePopupByClick);
}
// закрытие попапа кликом на оверлей
function handleClosePopupByClick(evt) {
    if (evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close')) {
        closePopup(evt.target);
    }
}

// закрытие попапа с через кнопку Escape
function handleClosePopupByEsc(evt) {
    if (evt.key === "Escape") {
        const activePopup = document.querySelector('.popup_opened');
        closePopup(activePopup);
    }
}

export {
    openPopup,
    closePopup
}