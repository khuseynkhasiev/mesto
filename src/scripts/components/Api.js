export default class Api {
    constructor({
        baseUrl,
        headers
    }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    // получение имени профиля от сервера
    getProfileName() {
        return fetch(`${this._baseUrl}users/me`, {
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json()
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    // редактирования имени профиля на сервере
    patchProfileName({
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
    }

    // получение карточек от сервера
    getInitialCards() {
        return fetch(`${this._baseUrl}cards`, {
                headers: this._headers,
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
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
    }

    /*     //пока не реализовано !!!!!!!!!!!!!!!!!!!!!!!!!!!
        getLikesCards() {
            return fetch(`${this._baseUrl}cards`, {
                    headers: this._headers,
                })
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        return Promise.reject(`Ошибка: ${res.status}`);
                    }
                })
        } */

    getAvatarProfile() {
        return fetch(`${this._baseUrl}users/me`, {
                headers: this._headers
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject(`Ошибка: ${res.status}`);
                }
            })
    }

    patchAvatarProfile(avatar) {
        return fetch(`${this._baseUrl}users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar
            })
        })
    }
}