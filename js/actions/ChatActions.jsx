import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.js';
import { GET } from '../webApi/WebApi.jsx';

var ChatActions = Object.freeze({
    get_users() {
        AppDispatcher.dispatch({
            actionType: ChatConstants.GET_USERS,
            params: {}
        });
        GET(ApiEndpoints.USERS, null, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: ChatConstants.GET_USERS_SUCCESS,
                    response: response, error: error
                });
        });
    }
});

export default ChatActions;