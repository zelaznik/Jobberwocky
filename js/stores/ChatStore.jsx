import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import ChatActions from '../actions/ChatActions.jsx';
import SessionStore from "./SessionStore.jsx";
import Store from './_templates/Store.jsx';
var Immutable = require('immutable');

var _messages = Immutable.Map({});
var _contacts;

function setChatContacts(users) {
    var dct = {};
    users.forEach((u) => {dct[u.id] = u;});
    _contacts = Immutable.fromJS(dct);
}

function setMessages(user_id, response) {
    var dct = _messages.toJSON();
    dct[user_id] = response;
    _messages = Immutable.fromJS(dct);
}

var ChatStore = new Store({
    reset() {
        _contacts = undefined;
        _messages = Immutable.Map({});
    },
    contacts() {
        if (_contacts === undefined)
            setTimeout(() => (ChatActions.get_users()), 0);
        return _contacts;
    },
    messages(user_id) {
        if (user_id === undefined)
            return _messages;

        var msg = _messages.get(`${user_id}`);
        if (msg === undefined)
            setTimeout(() => (ChatActions.get_messages(user_id)), 0);
        return msg;
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case ChatConstants.GET_USERS_SUCCESS:
            setChatContacts(payload.response);
            ChatStore.emitChange();
            break;

        case ChatConstants.GET_MESSAGES_SUCCESS:
            setMessages(payload.user_id, payload.response);
            ChatStore.emitChange();
            break;
    }
});

SessionStore.addChangeListener(ChatStore.reset);

export default ChatStore;