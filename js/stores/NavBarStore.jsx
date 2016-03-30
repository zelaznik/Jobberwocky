import { EventEmitter } from 'events';
import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import { CHANGE_EVENT } from '../constants/EventConstants.jsx';
import deepCopy from '../utils/deepCopy.jsx';

var _navBarData = {
    notifications: [
        {message: 'New user added: Jane Smith', new: true},
        {message: 'Sales Targets Available'},
        {message: 'New performance Metrics Added', new: true},
        {message: 'Growth data available'}
    ],
    messages: [
        {body: 'Could we meet today? I wanted...', img: 'avatar-male2.png'},
        {body: 'Important data needs your analysis...', img: 'avatar-female.png'},
        {body: "Buy Se7en today, it's a great theme...", img: 'avatar-male2.png'},
        {body: 'I just won the lottery...', img: 'avatar-female.png'}
    ]
};

var NavBarStore = assign({}, EventEmitter.prototype, {
    data() {
        return deepCopy(_navBarData);
    },

    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }

});

AppDispatcher.register( (action) => {
    switch(action.actionType) {
        /*
        case TableConstants.UPDATE:
            update(action.id, action.params);
            TableStore.emitChange();
            break;
        */
    }
});

export default NavBarStore;
