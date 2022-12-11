export default class Api {
    constructor({
        baseUrl,
        headers
    }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getAllPromise() {
        return Promise.all([this.getProfileInfo(), this.getInitialCards(), this.getAvatarProfile()])
    }

    // проверка ответа
    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        } else {
            return Promise.reject(`Ошибка: ${res.status}`);
        }
    }

    // получение имени профиля от сервера
    getProfileInfo() {
        return fetch(`${this._baseUrl}users/me`, {
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }

    // редактирования имени профиля на сервере
    patchProfileInfo({
        name,
        about
    }) {
        return fetch(`${this._baseUrl}users/me`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    about
                })
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }

    // получение карточек от сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
                headers: this._headers,
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }

    //отправка новой карточки на сервер
    postNewCard({
        name,
        link
    }) {
        return fetch(`${this._baseUrl}cards`, {
                method: 'POST',
                headers: this._headers,
                body: JSON.stringify({
                    name,
                    link
                })
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }

    // получение аватара профиля
    getAvatarProfile() {
        return fetch(`${this._baseUrl}users/me`, {
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))

    }

    // изменение аватара профиля
    patchAvatarProfile(avatar) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar
                })
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }

    // удалание карточки
    deleteCard(id) {
        return fetch(`${this._baseUrl}cards/${id}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }
    // добавление лайка карточке
    putCardLike(id) {
        return fetch(`${this._baseUrl}cards/${id}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }

    // удаление лайка карточки
    deleteCardLike(id) {
        return fetch(`${this._baseUrl}cards/${id}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(error => console.log(error))
    }
}