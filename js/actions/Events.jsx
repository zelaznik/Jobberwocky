import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import MouseConstants from '../constants/MouseConstants.jsx';

const MouseActions = Object.freeze({
    mouseDown(params) {
        AppDispatcher.dispatch({
            actionType: AlertConstants.INFO,
            params: params
        });
    },