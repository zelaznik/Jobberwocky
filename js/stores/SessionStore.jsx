import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import { CHANGE_EVENT } from '../constants/EventConstants.jsx';

var SessionStore = assign({}, EventEmitter.prototype, {
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

AppDispatcher.register((action) => {
    console.log("SessionStore::Registry, action: " + JSON.stringify(action));
    switch(action.actionType) {
        case SessionConstants.RECEIVE_LOGIN:
            console.log("SessionStore::RECEIVE_LOGIN");
            SessionStore.emitChange();
            break;

        case SessionConstants.RECEIVE_LOGOUT:
            console.log("SessionStore::RECEIVE_LOGOUT");
            SessionStore.emitChange();
            break;
    }
});

export default SessionStore;