import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import TableConstants from '../constants/TableConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import deepCopy from '../utils/deepCopy';
import getValues from '../utils/getValues';
import { Sequence, SequenceProxy } from '../utils/sequence.js';

const CHANGE_EVENT = 'change';

var _fields = [
    'id', 'first','last','email','date','status'
];

var _headers = {
    id: 'ID', first: 'First Name', last: 'Last Name', email: 'Email', date: 'Date Added', status: 'Status'
};

var _immutable = {
    id: true
};

var _records = {
    1: {id: 1, first: 'Robert', last: 'Kelso', email: 'robert@gmail.com', date: '8-15-2013', status: 'Approved'},
    2: {id: 2, first: 'John', last: 'Dorian', email: 'john@gmail.com', date: '2-6-1984', status: 'Rejected'},
    3: {id: 3, first: 'Steve', last: 'Zelaznik', email: 'zelaznik@yahoo.com', date: '1-1-2000', status: 'Hired'}
};

/* For assuring no primary keys collide.
   Internal objects have a negative index.
   Once the database returns its positive
   index, the value can be updated.   */
var seq = new Sequence(_records);
for (let key in _records) {
    seq.update(key)
}

function create(params) {
    var id = seq.low;
    _records[id] = assign({}, {id: id}, params);
}

function update(id, updates) {
    _records[id] = assign({}, _records[id], updates);
}

function destroy(id) {
    delete _records[id];
}

function blank() {
    var id = seq.low;
    _records[id] = {id: id};
}

var TableStore = assign({}, EventEmitter.prototype, {
    data: function() {
        return {
            fields: deepCopy(_fields),
            headers: deepCopy(_headers),
            immutable: deepCopy(_immutable),
            records: (getValues(deepCopy(_records)))
        };
    },

    tempID: function() {
        return seq.low;
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
        case TableConstants.NEW:
            blank();
            TableStore.emitChange();
            break;

        case TableConstants.CREATE:
            create(action.params);
            TableStore.emitChange();
            break;

        case TableConstants.UPDATE:
            update(action.id, action.params);
            TableStore.emitChange();
            break;

        case TableConstants.DESTROY:
            destroy(action.id);
            TableStore.emitChange();
            break;
    }
});

export default TableStore;