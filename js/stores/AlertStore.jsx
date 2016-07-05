import AlertConstants from '../constants/AlertConstants.jsx';
import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import Store from './_templates/Store.jsx';

import deepCopy from '../utils/deepCopy.jsx';

var _alerts = [];

function addAlert(category, content) {
    _alerts.push({category: category, content: content });
}

function clearAlerts() {
    _alerts = [];
}

var _displayStatus = false;

function reveal() {
    _displayStatus = true;
}
function hide() {
    _displayStatus = false;
}

var AlertStore = new Store({
    data: function() {
        return {
            messages: deepCopy(_alerts),
            displayStatus: !!_displayStatus
        };
    }
});

AppDispatcher.register((payload) => {
    var actionType = payload.actionType,
        params = payload.params;

    switch (actionType) {
        case AlertConstants.DANGER:
            addAlert('danger', params);
            if (params.display) {
                reveal();
            }
            AlertStore.emitChange();
            break;

        case AlertConstants.DISPLAY:
            reveal();
            AlertStore.emitChange();
            break;

        case AlertConstants.HIDE:
            hide();
            AlertStore.emitChange();
            break;

        case AlertConstants.CLEAR:
            clearAlerts();
            hide();
            AlertStore.emitChange();
            break;
    }
});

export default AlertStore;