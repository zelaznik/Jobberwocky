import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import SessionStore from "./SessionStore.jsx";
import Store from './_templates/Store.jsx';
var Immutable = require('immutable');

var _messages = Immutable.Map({});
var _contacts;

function setChatContacts(users) {
    var dct = {};
    users.forEach((u) => {
        dct[u.id] = Immutable.Map(u);
    });
    _contacts = Immutable.Map(dct);
}

function setMessages(user_id, response) {
    var dct = _messages.toObject();
    dct[user_id] = Immutable.Map(response);
    _messages = Immutable.Map(dct);
}

var ChatStore = new Store({
    reset() {
        _contacts = undefined;
        _messages = Immutable.Map({});
    },
    contacts()  {
        return _contacts;
    },
    messages() {
        return _messages;
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case ChatConstants.GET_USERS:
            ChatStore.emitChange();
            break;

        case ChatConstants.GET_USERS_SUCCESS:
            setChatContacts(payload.response.users);
            ChatStore.emitChange();
            break;

        case ChatConstants.GET_MESSAGES_SUCCESS:
            console.log("ChatConstants.GET_MESSAGES_SUCCESS");
            console.log(payload);
            setMessages(payload.user_id, payload.response);
            ChatStore.emitChange();
            break;
    }
});

SessionStore.addChangeListener(ChatStore.reset);

window.ChatStore = ChatStore;
export default ChatStore;