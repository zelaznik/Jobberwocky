import SearchBarConstants from '../constants/SearchBarConstants.jsx';
import AppDispatcher from '../dispatcher/appDispatcher.jsx';

var SearchBarActions = {
    update(value) {
        AppDispatcher.dispatch({
            actionType: SearchBarConstants.UPDATE,
            params: {value : value}
        });
    }
};

export default SearchBarActions;