import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import { POST, DELETE } from '../webApi/WebApi.jsx';

var SessionActions = Object.freeze({
    create(params) {
        POST(ApiEndpoints.SIGN_IN, {session: params}, (error, response) => {
            AppDispatcher.dispatch({
                actionType: SessionConstants.RECEIVE_LOGIN,
                response: response, error: error
            });
        });
        AppDispatcher.dispatch({
            actionType: SessionConstants.SEND_LOGIN,
            params: params
        });
    },



    destroy() {
        DELETE(ApiEndpoints.SIGN_OUT, {}, this.response_destroy);
        AppDispatcher.dispatch({
            actionType: SessionConstants.SEND_LOGOUT
        });
    },

    response_destroy(error, response) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.RECEIVE_LOGOUT,
            response: response, error: error
        });
    }

});

export default SessionActions;
