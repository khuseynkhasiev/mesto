export default class UserInfo {
    constructor(data) {
        this._name = data.profileTitle;
        this._about = data.profileJob;
    }

    getUserInfo() {
        const userInfo = {
            name: this._name,
            about: this._about
        }
        return userInfo;
    }
    setUserInfo(name, jobInput) {
        this._name.textContent = name.value
        this._about.textContent = jobInput.value;
    }
}