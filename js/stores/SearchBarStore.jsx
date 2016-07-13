import SearchBarConstants from '../constants/SearchBarConstants.jsx';
import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import Store from './_templates/Store.jsx';

var _value = '';

var SearchBarStore = new Store({
    value() {
        return _value;
    }
});

AppDispatcher.register((payload) => {
    switch (payload.actionType) {
        case SearchBarConstants.UPDATE:
            _value = payload.params.value;
            SearchBarStore.emitChange();
            break;
    }
});

export default SearchBarStore;