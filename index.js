(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var n=function(){function n(e,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t(this,"_hasInvalidInput",(function(e){return e.some((function(e){return!e.validity.valid}))})),t(this,"_hideInputError",(function(e){var t=o._popupForm.querySelector("#".concat(e.id,"-error"));e.classList.remove(o._inputErrorClass),t.textContent=""})),t(this,"_showInputError",(function(e,t){var n=o._popupForm.querySelector("#".concat(e.id,"-error"));e.classList.add(o._inputErrorClass),n.textContent=t})),t(this,"_isValid",(function(e){e.validity.valid?o._hideInputError(e):o._showInputError(e,e.validationMessage)})),t(this,"_toggleButtonState",(function(){o._hasInvalidInput(o._inputList)?(o._buttonElement.classList.add(o._inactiveButtonClass),o._buttonElement.disabled=!0):(o._buttonElement.classList.remove(o._inactiveButtonClass),o._buttonElement.disabled=!1)})),t(this,"_setEventListeners",(function(){o._inputList.forEach((function(e){e.addEventListener("input",(function(){o._isValid(e),o._toggleButtonState()}))}))})),t(this,"enableValidation",(function(){o._setEventListeners()})),this._formSelector=r.formSelector,this._inputSelector=r.inputSelector,this._submitButtonSelector=r.submitButtonSelector,this._inactiveButtonClass=r.inactiveButtonClass,this._inputErrorClass=r.inputErrorClass,this._popup=e,this._popupForm=this._popup.querySelector(".popup__form"),this._inputList=Array.from(this._popup.querySelectorAll(this._inputSelector)),this._buttonElement=this._popup.querySelector(this._submitButtonSelector)}var r,o;return r=n,(o=[{key:"resetForm",value:function(){var e=this;this._popup.contains(this._popupForm)&&(this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState())}}])&&e(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){function e(t,n,r){var i=this,u=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(this,"_getTemplate",(function(){return i._templateSelector.querySelector(".elements__el").cloneNode(!0)})),o(this,"_likeCard",(function(){i._elementLike.classList.toggle("elements__like_active")})),o(this,"_deleteCard",(function(){i._element.remove()})),this._place=t.name,this._url=t.link,this._templateSelector=n,this._element=this._getTemplate(),this._elementImage=this._element.querySelector(".elements__img"),this._elmentTitle=this._element.querySelector(".elements__title"),this._handleCardClick=u,this._elementLike=this._element.querySelector(".elements__like"),this._elementTrash=this._element.querySelector(".elements__trash")}var t,n;return t=e,(n=[{key:"generateCard",value:function(){return this._elmentTitle.textContent=this._place,this._elementImage.alt=this._place,this._elementImage.src=this._url,this._setCardListeners(this._element),this._element}},{key:"_setCardListeners",value:function(){var e=this;this._elementImage.addEventListener("click",(function(){return e._handleCardClick(e._place,e._url)})),this._elementLike.addEventListener("click",this._likeCard),this._elementTrash.addEventListener("click",this._deleteCard)}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),u=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_add"),a=document.querySelector(".popup_type_image"),c=(u.querySelector(".popup__close"),l.querySelector(".popup__close"),a.querySelector(".popup__close"),a.querySelector(".popup__image")),s=a.querySelector(".popup__figcaption"),p=u.querySelector(".popup__container"),f=p.querySelector(".popup__input_type_name"),_=p.querySelector(".popup__input_type_about"),h=l.querySelector(".popup__container"),y=(h.querySelector(".popup__input_type_place"),h.querySelector(".popup__input_type_url"),l.querySelector(".popup__form"),document.querySelector(".profile")),d=y.querySelector(".profile__title"),b=y.querySelector(".profile__job"),m=y.querySelector(".profile__edit-button"),v=y.querySelector(".profile__add-button"),g=document.querySelector(".cards-template").content,S=(document.querySelector(".elements__container"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_inactive",inputErrorClass:"popup__input_type_error"});function w(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var E=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,console.log(r),this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.reverse().forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&w(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var k=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),C(this,"_handleEscClose",(function(e){"Escape"===e.key&&n.close()})),C(this,"_handleButtonClose",(function(e){e.target.classList.contains("popup__close")&&n.close()})),C(this,"_handleOverlayClose",(function(e){e.target.classList.contains("popup")&&n.close()})),this.popupSelector=document.querySelector(t),this._popupButtonClose=this.popupSelector.querySelector(".popup__close")}var t,n;return t=e,(n=[{key:"open",value:function(){this.popupSelector.classList.add("popup_opened"),this._setEventListeners()}},{key:"close",value:function(){this.popupSelector.classList.remove("popup_opened"),this._removeEventListeners()}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keydown",this._handleEscClose),this.popupSelector.removeEventListener("click",this._handleOverlayClose),this._popupButtonClose.removeEventListener("click",this._handleButtonClose)}},{key:"_setEventListeners",value:function(){document.addEventListener("keydown",this._handleEscClose),this.popupSelector.addEventListener("click",this._handleOverlayClose),this._popupButtonClose.addEventListener("click",this._handleButtonClose)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function I(e,t){return I=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},I(e,t)}function B(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&I(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return B(this,e)});function u(e,t){var n,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),F(T(n=i.call(this,t)),"_getInputValues",(function(){return n._inputValues={},n._inputList.forEach((function(e){n._inputValues[e.name]=e.value})),n._inputValues})),F(T(n),"_handleSubmit",(function(e){e.preventDefault(),n._handleFormSubmit(n._getInputValues()),n.close()})),n._handleFormSubmit=r,n._form=n.popupSelector.querySelector(".popup__form"),n._inputList=n._form.querySelectorAll(".popup__input"),n}return t=u,(n=[{key:"_setEventListeners",value:function(){P(R(u.prototype),"_setEventListeners",this).call(this),this._form.addEventListener("submit",this._handleSubmit)}},{key:"_removeEventListeners",value:function(){P(R(u.prototype),"_removeEventListeners",this).call(this),this._form.removeEventListener("submit",this._handleSubmit)}},{key:"close",value:function(){P(R(u.prototype),"close",this).call(this),this._form.reset()}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function V(e){return V="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},V(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=A(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function A(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=M(e)););return e}function J(e,t){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},J(e,t)}function z(e,t){if(t&&("object"===V(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function M(e){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},M(e)}var N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&J(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=M(r);if(o){var n=M(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return z(this,e)});function u(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._popupImageInfo=t,r._popupFigcaptionImage=n,r}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageInfo.src=t,this._popupImageInfo.alt=e,this._popupFigcaptionImage.textContent=e,D(M(u.prototype),"open",this).call(this)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(k);function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){return{name:o._name.textContent,about:o._about.textContent}},(n="getUserInfo")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._name=t.profileTitle,this._about=t.profileJob}var t,n;return t=e,(n=[{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._about.textContent=e.about}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function K(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers,console.log(this._baseUrl),console.log(this._headers)}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){fetch(this._baseUrl,this._headers).then((function(e){return e.ok?(console.log(e),e.json()):Promise.reject("Ошибка: ".concat(e.status))}))}}])&&K(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),W=new n(u,S),X=new n(l,S);X.enableValidation(),W.enableValidation(),m.addEventListener("click",(function(){var e;e=Y.getUserInfo(),f.value=e.name,_.value=e.about,W.resetForm(),Z.open()})),v.addEventListener("click",(function(){X.resetForm(),$.open()}));var Y=new H({profileTitle:d,profileJob:b}),Z=new x({handleFormSubmit:function(e){Y.setUserInfo(e)}},".popup_type_edit"),$=new x({handleFormSubmit:function(e){section.addItem(te(e))}},".popup_type_add"),ee=new N(".popup_type_image",c,s),te=function(e){return new i(e,g,{handleCardClick:function(e,t){ee.open(e,t)}}).generateCard()};new Q({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-54/cards",headers:{headers:{authorization:"0abf54cd-edc4-4fb9-9a14-bce409a2bf77","Content-Type":"application/json"}}}).getInitialCards().then((function(e){console.log(e);var t=new E({items:e,renderer:function(e){var n=te(e);t.addItem(n)}},".elements__container");t.renderItems()})).catch((function(e){console.log(e)}))})();
//# sourceMappingURL=index.js.map