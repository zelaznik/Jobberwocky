import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import { CHANGE_EVENT } from '../constants/EventConstants.jsx';

// Load an access token from the session storage, you might want to implement
// a 'remember me' using localSgorage
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

        case SessionConstants.SEND_LOGOUT:
            clearSession();
            SessionStore.emitChange();
            break;
    }
});

export default SessionStore;