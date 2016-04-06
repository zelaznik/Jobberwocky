import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import TableConstants from '../constants/TableConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import TableStore from '../stores/TableStore.jsx';

import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import { POST , GET , PATCH , DELETE } from '../webApi/WebApi.jsx';

var TableActions = {
    new() {
        AppDispatcher.dispatch({
            actionType: TableConstants.NEW
        });
    },

    fetch() {
        GET(ApiEndpoints.PRODUCTS, {}, (err, response) => {
            if (err)
                AlertActions.sendDelayed({error: err});
            if (response)
                AppDispatcher.dispatch({
                    actionType: TableConstants.FETCH_SUCCESS,
                    response: response, error: null
                });
        });

        AppDispatcher.dispatch({
            actionType: TableConstants.FETCH
        });
    },

    create(params) {
        var tempID = TableStore.tempID();
        AppDispatcher.dispatch({
            actionType: TableConstants.CREATE,
            params: params, tempID: tempID
        });

        POST(ApiEndpoints.PRODUCTS, params, (err, response) => {
            if (err) {
                AppDispatcher.dispatch({
                    actionType: TableConstants.CREATE_ERROR,
                    response: null, error: err, tempID: tempID
                });
                AlertActions.sendDelayed({error: err});
            }
            if (response)
                AppDispatcher.dispatch({
                    actionType: TableConstants.CREATE_SUCCESS,
                    response: response, error: null, tempID: tempID
                });
        });
    },

    update(id, params) {
        AppDispatcher.dispatch({
            actionType: TableConstants.UPDATE,
            params: params,
            id: id
        });
        PATCH(`${ApiEndpoints.PRODUCTS}/${id}`, params, (err, response) => {
            if (err)
                AlertActions.sendDelayed({error: err});
            if (response)
                AppDispatcher.dispatch({
                    actionType: TableConstants.UPDATE_SUCCESS,
                    response: response, error: null
                });
        });
    },

    destroy(id) {
        AppDispatcher.dispatch({
            actionType: TableConstants.DESTROY,
            id: id
        });

        if (id < 0) {
            return;
        }

        DELETE(`${ApiEndpoints.PRODUCTS}/${id}`, {}, (err, response) => {
            if (err)
                AlertActions.sendDelayed({error: err});
            if (response)
                AppDispatcher.dispatch({
                    actionType: TableConstants.DESTROY_SUCCESS,
                    response: response, error: null
                });
        });
    }
};

export default TableActions;