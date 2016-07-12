import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import ChatActions from '../actions/ChatActions.jsx';
import SessionStore from "./SessionStore.jsx";
import Store from './_templates/Store.jsx';
import { Sequence } from '../utils/sequence.js';
import Immutable from 'immutable';

var seq = new Sequence();
var _messages = Immutable.Map({});
var _contacts;

function setChatContacts(users) {
    var dct = {};
    users.forEach((u) => {dct[u.id] = u;});
    _contacts = Immutable.fromJS(dct);
}

function f(v) {
    return Date.parse(v.created_at);
}

function by_date(a, b) {
    return f(a) - f(b);
}

function setMessages(user_id, response) {
    var dct = _messages.toJSON();
    dct[user_id] = response.sort(by_date);
    _messages = Immutable.fromJS(dct);
}

function addMessage(user_id, msg) {
    var dct = _messages.toJSON();
    var messages = dct[user_id];
    messages.push(msg);
    dct[user_id] = messages.sort(by_date);
    _messages = Immutable.fromJS(dct);
}

var ChatStore = new Store({
    reset() {
        _contacts = undefined;
        _messages = Immutable.Map({});
    },

    tempId() {
        return seq.low;
    },

    contacts() {
        if (_contacts === undefined) {
            setTimeout(() => (ChatActions.get_users()), 0);
            return Immutable.Map({});
        } else {
            return _contacts;
        }
    },

    messages(user_id) {
        if (user_id === undefined) {
            return _messages;
        }

        var msg = _messages.get(`${user_id}`);
        if (msg === undefined) {
            setTimeout(() => (ChatActions.get_messages(user_id)), 0);
            return Immutable.List([]);
        }

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

        case ChatConstants.SEND_MESSAGE_SUCCESS:
            addMessage(payload.params.user_id, payload.response);
            ChatStore.emitChange();
            break;
    }
});

SessionStore.addChangeListener(ChatStore.reset);

export default ChatStore;