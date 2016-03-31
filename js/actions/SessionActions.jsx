import WebApi from '../web-api/WebApi.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';

const SessionActions = Object.freeze({
    create(params) {
        WebApi.sign_in(params);
        AppDispatcher.dispatch({
            actionType: SessionConstants.SEND_LOGIN,
            params: params
        });
    },

    response_create(error, response) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.RECEIVE_LOGIN,
            response: response, error: error
        });
    },

    destroy() {
        WebApi.sign_out();
        AppDispatcher.dispatch({
            actionType: SessionConstants.SEND_LOGOUT
        });
    },

    response_destroy(error, response) {
        if (error === null && response !== null) {
            AppDispatcher.dispatch({
                actionType: SessionConstants.RECEIVE_LOGOUT,
                response: response, error: error
            });
        }
    }

});

export default SessionActions;