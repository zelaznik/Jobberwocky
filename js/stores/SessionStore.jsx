var Immutable = window.Immutable = require('immutable');

import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import Store from './_templates/Store.jsx';
import { LOGOUT, REDIRECT_TO_LOGIN, SIGN_IN_SUCCESS } from '../constants/EventConstants.jsx';
import Cookies from '../utils/cookies.js';
import ApiEndpoints from '../constants/ApiEndpoints.js';
var querystring = require('querystring');

function setSession(params) {
    var session = params.response;

    Cookies.set('authToken',       session.token);
    Cookies.set('expireDate',      session.expire_date);
    Cookies.set('email',           session.user.email);

    Cookies.set('currentUserId',   session.user.id);
    Cookies.set('image',           session.user.image);
    Cookies.set('name',            session.user.name);
}

function clearSession() {
    Cookies.reset();
}

var _auth = Immutable.Map({});

function set_omniauth_url(provider, url) {
    var data = _auth.toJSON();
    data[provider] = url;
    _auth = Immutable.Map(data);
}

function save_current_location(params) {
    Cookies.set('saved_location', {
        user_id: SessionStore.currentUserId(),
        location: params
    });
}

function clear_saved_location() {
    Cookies.del('saved_location');
}

var SessionStore = new Store({
    data() {
        return {
            name: this.name(),
            email: this.email(),
            image: this.image(),
            loggedIn: this.loggedIn(),
            currentUserId: this.currentUserId()
        };
    },

    saved_location() {
        return Cookies.get('saved_location');
    },

    omni_auth_url(provider) {
        return ApiEndpoints.AUTH(provider);
    },

    email() {
        return Cookies.get('email');
    },

    currentUserId() {
        return Cookies.get('currentUserId');
    },

    name() {
        return Cookies.get('name');
    },

    image() {
        return Cookies.get('image');
    },

    token() {
        return Cookies.get('authToken');
    },

    loggedIn() {
        return !!this.token();
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case SessionConstants.SIGN_IN_SUCCESS:
            setSession(payload);
            SessionStore.emit(SIGN_IN_SUCCESS);
            SessionStore.emitChange();
            break;

        case SessionConstants.SIGN_OUT:
            clearSession();
            clear_saved_location();
            SessionStore.emit(LOGOUT);
            SessionStore.emitChange();
            break;

        case SessionConstants.OMNIAUTH_URL_PRELOAD:
            set_omniauth_url(payload.provider, payload.url);
            SessionStore.emitChange();
            break;

        case SessionConstants.SAVE_CURRENT_LOCATION:
            save_current_location(payload.params);
            SessionStore.emit(REDIRECT_TO_LOGIN);
            SessionStore.emitChange();
            break;

        case SessionConstants.CLEAR_SAVED_LOCATION:
            clear_saved_location();
            break;

    }
});

export default SessionStore;