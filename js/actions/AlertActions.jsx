import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AlertConstants from '../constants/AlertConstants.jsx';

const AlertActions = Object.freeze({
    danger(params) {
        AppDispatcher.dispatch({
            actionType: AlertConstants.DANGER,
            params: params
        });
    },

    sendDelayed(payload, dt=0) {
        var p = {
            display: true,
            status: payload.error.status,
            statusText: payload.error.statusText,
            responseText: payload.error.responseText
        };
        setTimeout(() => { AlertActions.danger(p) }, dt);
    },

    display() {
        AppDispatcher.dispatch({
            actionType: AlertConstants.DISPLAY
        });
    },

    hide() {
        AppDispatcher.dispatch({
            actionType: AlertConstants.HIDE
        });
    },

    clear() {
        AppDispatcher.dispatch({
            actionType: AlertConstants.CLEAR
        });
    }

});

export default AlertActions;