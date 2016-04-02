import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import TableConstants from '../constants/TableConstants.jsx';

import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import { GET , POST, DELETE } from '../webApi/WebApi.jsx';

import { Models, Collections } from '../webApi/BackboneApp.jsx';

var cb = {
    success: function() {
        console.log("Success");
        console.log(arguments);
    },
    error: function() {
        console.log("Error");
        console.log(arguments);
    }
};

var TableActions = {
    get() {
        AppDispatcher.dispatch({
            actionType: TableConstants.GET
        })
    },

    fetch() {
        AppDispatcher.dispatch({
            actionType: TableConstants.FETCH
        });
    },

    fetch_success(response) {
        AppDispatcher.dispatch({
            actionType: TableConstants.FETCH_SUCCESS,
            response: response, error: null
        });
    },

    fetch_error(error) {
        AppDispatcher.dispatch({
            actionType: TableConstants.FETCH_ERROR,
            response: null, error: error
        });
    },

    new() {
        AppDispatcher.dispatch({
            actionType: TableConstants.NEW
        });
    },

    create(params) {
        AppDispatcher.dispatch({
            actionType: TableConstants.CREATE,
            params: params
        });
    },
    update(id, params) {
        AppDispatcher.dispatch({
            actionType: TableConstants.UPDATE,
            params: params,
            id: id
        });
    },
    destroy(id) {
        AppDispatcher.dispatch({
            actionType: TableConstants.DESTROY,
            id: id
        });
    }
};

export default TableActions;