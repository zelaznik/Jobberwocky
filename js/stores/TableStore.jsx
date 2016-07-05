import assign from 'object-assign';
var Immutable = require('immutable');

import Store from './_templates/Store.jsx';
import { Sequence } from '../utils/sequence';
import TableConstants from '../constants/ProductConstants.jsx';
import AppDispatcher from '../dispatcher/appDispatcher.jsx';

var _fields = Immutable.List(
    ['id','title','price','published', 'user']
);

var _headers = Immutable.Map({
    id: 'Id', title: 'Title', price: 'Price', published: 'Published', user: 'UserID'
});

var _types = Immutable.Map({
    id: 'key', title: 'string', price: 'money', published: 'boolean', user: 'object'
});

var _immutable = Immutable.Map({
    id: true, user: true
});

var _records = Immutable.List([]);
var _fetched_yet;
var seq = new Sequence();

function assign_all(items) {
    var obj = {};
    items.forEach(function(item) {
        obj[item.id] = toObject(item);
    });
    _records = Immutable.fromJS(obj);
}

function create(tempID, params) {
    var data = _records.toJSON();
    data[tempID] = assign({}, params, {id: tempID});
    _records = Immutable.fromJS(data);
}

function create_success(tempID, response) {
    var data = _records.toJSON(),
        row = response.product;

    delete data[tempID];
    data[row.id] = toObject(row);
    _records = Immutable.fromJS(data);
}

function create_error(tempID) {
    var data = _records.toJSON();
    delete data[tempID];
    _records = Immutable.fromJS(data);
}

function toObject(updates, orig={}) {
    var row = assign({}, orig);
    for (var key in updates) {
        row[key] = updates[key];
    }
    row.user = row.user.id || row.user;
    return row;
}

function update(id, updates) {
    var data = _records.toJSON();
    data[id] = toObject(updates, data[id]);
    _records = Immutable.fromJS(data);
}

function destroy(id) {
    var data = _records.toJSON();
    delete data[id];
    _records = Immutable.fromJS(data);
}

function blank() {
    var id = seq.low;
    _records[id] = {id: id};
}

var TableStore = new Store({
    data: function() {
        return {
            fields: _fields.toArray(),
            headers: _headers.toObject(),
            immutable: _immutable.toObject(),
            types: _types.toObject(),
            records: _records.toSeq()
        };
    },

    tempID: function() {
        return seq.low;
    }
});

AppDispatcher.register( (payload) => {
    switch(payload.actionType) {
        case TableConstants.FETCH_SUCCESS:
            assign_all(payload.response.products);
            _fetched_yet = true;
            TableStore.emitChange();
            break;

        case TableConstants.NEW:
            blank();
            TableStore.emitChange();
            break;

        case TableConstants.CREATE:
            create(payload.tempID, payload.params);
            TableStore.emitChange();
            break;

        case TableConstants.CREATE_SUCCESS:
            create_success(payload.tempID, payload.response);
            TableStore.emitChange();
            break;

        case TableConstants.CREATE_ERROR:
            create_error(payload.tempID);
            TableStore.emitChange();
            break;

        case TableConstants.UPDATE:
            update(payload.id, payload.params);
            TableStore.emitChange();
            break;

        case TableConstants.DESTROY:
            destroy(payload.id);
            TableStore.emitChange();
            break;
    }
});

export default TableStore;