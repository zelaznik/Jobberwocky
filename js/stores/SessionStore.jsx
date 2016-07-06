var Immutable = require('immutable');

import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import Store from './_templates/Store.jsx';
import { LOGOUT } from '../constants/EventConstants.jsx';
import Cookies from '../utils/Cookies.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.js';
var querystring = require('querystring');

function setSession(params) {
    var u = params.response.user;
    Cookies.set('authToken', u.auth_token);
    Cookies.set('email', u.email);
    Cookies.set('currentUserId', u.id);
}

function clearSession() {
    Cookies.reset();
}

var _auth = Immutable.Map({

});

function set_omniauth_url(provider, url) {
    var data = _auth.toJSON();
    data[provider] = url;
    _auth = Immutable.Map(data);
}

var SessionStore = new Store({
    data() {
        return {
            email: this.email(),
            loggedIn: this.loggedIn(),
            currentUserId: this.currentUserId()
        };
    },

    omni_auth_url(provider) {
        var base_uri = ApiEndpoints.AUTH(provider);
        var params = querystring.encode({
            callback_uri: ApiEndpoints.AUTH_CALLBACK
        });
        return base_uri + "?" + params;
    },

    email() {
        return Cookies.get('email');
    },

    currentUserId() {
        return Cookies.get('currentUserId');
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
            SessionStore.emitChange();
            break;

        case SessionConstants.SIGN_OUT:
            clearSession();
            SessionStore.emit(LOGOUT);
            SessionStore.emitChange();
            break;

        case SessionConstants.OMNIAUTH_URL_PRELOAD:
            set_omniauth_url(payload.provider, payload.url);
            SessionStore.emitChange();
            break;

    }
});

export default SessionStore;