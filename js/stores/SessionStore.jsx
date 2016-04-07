import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

function getCookie(name) {
    var cookies = JSON.parse(document.cookie || "{}");
    return cookies[name];
}

function setCookie(name, value) {
    var cookies = JSON.parse(document.cookie || "{}");
    cookies[name] = value;
    document.cookie = JSON.stringify(cookies);
}

function delCookie(name) {
    var cookies = JSON.parse(document.cookie || "{}");
    delete cookies[name];
    document.cookie = JSON.stringify(cookies);
}

import { CHANGE_EVENT, LOGOUT } from '../constants/EventConstants.jsx';

var _errors=[];

function setSession(params) {
    var u = params.response.user;
    setCookie('authToken', u.auth_token);
    setCookie('email', u.email);
    setCookie('userId', u.id);
}

function clearSession(params) {
    document.cookie = "{}";
}

var SessionStore = assign({}, EventEmitter.prototype, {
    data() {
        return {
            email: getCookie('email'),
            loggedIn: this.loggedIn()
        };
    },

    token() {
        return getCookie('authToken');
    },

    loggedIn() {
        return getCookie('authToken') ? true: false;
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case SessionConstants.RECEIVE_LOGIN:
            if (payload.error === null) {
                setSession(payload);
                SessionStore.emitChange();
            } else {
                AlertActions.sendDelayed(payload);
            }
            break;

        case SessionConstants.RECEIVE_LOGOUT:
            if (payload.error === null) {
                clearSession();
                SessionStore.emit(LOGOUT);
                SessionStore.emitChange();
            } else {
                sendErrorAlerts(payload);
            }
            break;
    }
});

export default SessionStore;