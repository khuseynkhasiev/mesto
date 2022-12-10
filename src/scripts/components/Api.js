export default class Api {
    constructor({
        baseUrl,
        headers
    }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
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
            .catch(console.log)
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
            .catch(console.log)
    }

    // получение карточек от сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
                headers: this._headers,
            })
            .then(res => this._checkResponse(res))
            .catch(console.log)

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
            .catch(console.log)
    }

    getAvatarProfile() {
        return fetch(`${this._baseUrl}users/me`, {
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(console.log)

    }

    patchAvatarProfile(avatar) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
                method: 'PATCH',
                headers: this._headers,
                body: JSON.stringify({
                    avatar
                })
            })
            .then(res => this._checkResponse(res))
            .catch(console.log)
    }


    deleteCard(id) {
        return fetch(`${this._baseUrl}cards/${id}`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(console.log)
    }

    putCardLike(id) {
        return fetch(`${this._baseUrl}cards/${id}/likes`, {
                method: 'PUT',
                headers: this._headers,
            })
            .then(res => this._checkResponse(res))
            .catch(console.log)
    }

    deleteCardLike(id) {
        return fetch(`${this._baseUrl}cards/${id}/likes`, {
                method: 'DELETE',
                headers: this._headers
            })
            .then(res => this._checkResponse(res))
            .catch(console.log)
    }




}