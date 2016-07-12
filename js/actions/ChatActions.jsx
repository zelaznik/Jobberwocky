import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.js';
import ChatStore from '../stores/ChatStore.jsx';

import { GET , POST } from '../webApi/WebApi.jsx';

var ChatActions = Object.freeze({
    get_users() {
        AppDispatcher.dispatch({
            actionType: ChatConstants.GET_USERS,
            params: {}
        });
        GET(ApiEndpoints.USERS, {}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: ChatConstants.GET_USERS_SUCCESS,
                    response: response, error: error
                });
        });
    },

    get_messages(user_id) {
        AppDispatcher.dispatch({
            actionType: ChatConstants.GET_MESSAGES,
            user_id: user_id
        });
        GET(ApiEndpoints.MESSAGES(user_id), {}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: ChatConstants.GET_MESSAGES_SUCCESS,
                    response: response, error: error,
                    user_id: user_id
                });
        });
    },

    send_message(params) {
        var pk = ChatStore.tempId();
        AppDispatcher.dispatch({
            actionType: ChatConstants.SEND_MESSAGE,
            params: params, temp_id: pk
        });
        POST(ApiEndpoints.MESSAGES(params.user_id), {body: params.body}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: ChatConstants.SEND_MESSAGE_SUCCESS,
                    response: response, error: error,
                    params: params, temp_id: pk
                });
        });
    }

});

export default ChatActions;