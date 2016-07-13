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

function by_date(a, b) {
    return (new Date(a.created_at)) - (new Date(b.created_at));
}

function setMessages(user_id, response) {
    var dct = _messages.toJSON();
    dct[user_id] = response.sort(by_date);
    _messages = Immutable.fromJS(dct);
}

function addMessage(user_id, msg, temp_id) {
    var dct = _messages.toJSON();
    console.log("Params: " + JSON.stringify({
            user_id: user_id, msg: msg, temp_id: temp_id
    }));
    console.log("Messages Stored:");
    console.log(dct);
    var messages = dct[user_id];
    if (temp_id !== undefined) {
        for (var i=messages.length-1; i>=0; i--) {
            if (messages[i].temp_id === temp_id) {
                var left = messages.slice(0, i);
                var right = messages.slice(i+1);
                messages = left.concat(right);
                break;
            }
        }
    }
    messages.push(msg);
    dct[user_id] = messages.sort(by_date);
    _messages = Immutable.fromJS(dct);
}

function addPendingMessage(temp_id, params) {
    var msg = {
        temp_id:    temp_id,
        body:       params.body,
        created_at: (new Date())+'',
        sender:     SessionStore.data()
    };
    var user_id = params.user_id;
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

        case ChatConstants.SEND_MESSAGE:
            addPendingMessage(payload.temp_id, payload.params);
            ChatStore.emitChange();
            break;

        case ChatConstants.SEND_MESSAGE_SUCCESS:
            addMessage(payload.params.user_id, payload.response, payload.temp_id);
            ChatStore.emitChange();
            break;
    }
});

SessionStore.addChangeListener(ChatStore.reset);
window.ChatStore = ChatStore;
export default ChatStore;