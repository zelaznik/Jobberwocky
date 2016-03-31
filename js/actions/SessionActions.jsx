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
    destroy(params) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SEND_LOGOUT,
            params: params
        });
    }
});

export default SessionActions;