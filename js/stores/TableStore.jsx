import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import TableConstants from '../constants/TableConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import deepCopy from '../utils/deepCopy';
import getValues from '../utils/getValues';

const CHANGE_EVENT = 'change';

var _fields = [
    'first','last','email','date','status'
];

var _headers = {
    first: 'First Name', last: 'Last Name', email: 'Email', date: 'Date Added', status: 'Status'
};

var _records = {
    '1': {id: 1, first: 'Robert', last: 'Kelso', email: 'robert@gmail.com', date: '8-15-2013', status: 'Approved'},
    '2': {id: 2, first: 'John', last: 'Dorian', email: 'john@gmail.com', date: '2-6-1984', status: 'Rejected'},
    '3': {id: 3, first: 'Steve', last: 'Zelaznik', email: 'zelaznik@yahoo.com', date: '1-1-2000', status: 'Hired'}
};

function update(id, updates) {
    _records[id] = assign({}, _records[id], updates);
}

function destroy(id) {
    delete _records[id];
}

var TableStore = assign({}, EventEmitter.prototype, {
    data: function() {
        return {
            fields: deepCopy(_fields),
            headers: deepCopy(_headers),
            records: getValues(deepCopy(_records))
        };
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
        case TableConstants.UPDATE:
            update(action.id, action.params);
            TableStore.emitChange();
            break;

        case TableConstants.DESTROY:
            destroy(action.id);
            TableStore.emitChange();
    }
});

export default TableStore;