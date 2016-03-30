import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import WebApi from '../web-api/WebApi.jsx';

const SessionActions = Object.freeze({
    create(params) {
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