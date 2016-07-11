import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import Store from './_templates/Store.jsx';
var Immutable = require('immutable');

var _loaded, _updating;
var _contacts = Immutable.List([]);
var _messages = Immutable.Map({});

var ChatStore = new Store({
    updating()  {
        return !!_updating;
    },
    loaded() {
        return !!_loaded;
    },
    loading()   {
        return (_updating && !_loaded);
    },
    contacts()  {
        return _contacts;
    },
    messages(user_id) {
        return _messages.get(user_id);
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case ChatConstants.GET_USERS:
            _updating = true;
            ChatStore.emitChange();
            break;

        case ChatConstants.GET_USERS_SUCCESS:
            _contacts = Immutable.List(payload.response.users);
            _updating = false;
            _loaded = true;
            ChatStore.emitChange();
            break;
    }
});

window.ChatStore = ChatStore;
export default ChatStore;