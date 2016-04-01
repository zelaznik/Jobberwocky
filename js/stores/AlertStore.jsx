import { EventEmitter } from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher.jsx';

import AlertConstants from '../constants/AlertConstants.jsx';
import { CHANGE_EVENT, DISPLAY, HIDE } from '../constants/EventConstants.jsx';

import deepCopy from '../utils/deepCopy.jsx';

var _alerts;

function clearAlerts() {
    _alerts = {
        info: [],
        warning: [],
        success: [],
        danger: []
    };
}
clearAlerts();
function addAlert(category, message) {
    _alerts[category].push(message);
}

var _displayStatus = false;

function reveal() {
    _displayStatus = true;
}
function hide() {
    _displayStatus = false;
}

var AlertStore = assign({}, EventEmitter.prototype, {
    data: function() {
        return {
            messages: deepCopy(_alerts),
            displayStatus: !!_displayStatus
        };
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register((payload) => {
    var { actionType, params } = payload;
    switch (actionType) {
        case AlertConstants.DANGER:
            addAlert('danger', payload);
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
        }
});

export default AlertStore;