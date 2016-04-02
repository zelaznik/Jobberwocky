import { EventEmitter } from 'events';
import assign from 'object-assign';

import TableActions from '../actions/TableActions.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import TableConstants from '../constants/TableConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';

import { CHANGE_EVENT } from '../constants/EventConstants.jsx';
import deepCopy from '../utils/deepCopy';

import Backbone from 'backbone';

var _fields = ['id','title','price','published'];
var _headers = {
    id: 'Id', title: 'Title', price: 'Price', published: 'Published'
};
var _immutable = {
    id: true
};

// var cb = { success: function(r) { console.log("SUCCESS"); console.log(r); }, error: function(e) { console.log("ERROR"); console.log(e); } };

var Model = Backbone.Model.extend({
    url: ApiEndpoints.PRODUCTS,
    parse(r) {
        delete r.user;
        return r;
    }
});

var Collection = Backbone.Collection.extend({
    url: ApiEndpoints.PRODUCTS,
    model: Model,
    parse: (r) => (r.products)
});

var collection = new Collection();
window.collection = collection;

function create(params) {
    collection.create(params);
}

function update(id, updates) {
    var model = collection.get(id);
    model.set(updates);
}

function destroy(id) {
    var model = collection.get(id);
    collection.remove([model]);
    model.destroy();
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
            records: collection.toJSON()
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

AppDispatcher.register( (payload) => {
    switch(payload.actionType) {
        case TableConstants.FETCH:
            collection.fetch({
                success: TableActions.fetch_success,
                error: TableActions.fetch_error });
            break;

        case TableConstants.FETCH_SUCCESS:
            TableStore.emitChange();
            break;

        case TableConstants.FETCH_ERROR:
            AlertActions.sendDelayed(payload);
            break;

        case TableConstants.NEW:
            blank();
            TableStore.emitChange();
            break;

        case TableConstants.CREATE:
            create(payload.params);
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