import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import { CHANGE_EVENT, LOGOUT } from '../constants/EventConstants.jsx';

var _authToken = sessionStorage.getItem('authToken'),
    _email = sessionStorage.getItem('email'),
    _errors=[];

function setSession(params) {
    _authToken = params.auth_token;
    sessionStorage.setItem('authToken', _authToken);

    _email = params.email;
    sessionStorage.setItem('email', _email);
}

function clearSession(params) {
    _authToken = _email = null;
    sessionStorage.removeItem('authToken');
    sessionStorage.removeItem('email');
}

var SessionStore = assign({}, EventEmitter.prototype, {
    data() {
        return {
            email: _email,
            loggedIn: this.loggedIn()
        };
    },

    token() {
        return sessionStorage.getItem('authToken');
    },

    loggedIn() {
        return _authToken ? true: false;
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
                setSession(payload.response.body);
                SessionStore.emitChange();
            }
            break;

        case SessionConstants.RECEIVE_LOGOUT:
            if (payload.error === null) {
                clearSession();
                SessionStore.emit(LOGOUT);
                SessionStore.emitChange();
            } else {
                console.log(payload.error);
            }
            break;
    }
});

export default SessionStore;