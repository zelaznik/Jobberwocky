import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import AlertActions from '../actions/AlertActions.jsx';

import { POST , GET , PATCH , DELETE } from '../webApi/WebApi.jsx';

class BaseActions {
    constructor(constants, baseUrl) {
        this.constants = constants;
        this.baseUrl = baseUrl;
    }

    fetch() {
        GET(this.baseUrl, {}, function(err, response) {
            if (err)
                AlertActions.sendDelayed({error: err});
            if (response)
                AppDispatcher.dispatch({
                    actionType: this.constants.FETCH_SUCCESS,
                    response: response, error: null
                });
        }.bind(this));

        AppDispatcher.dispatch({
            actionType: this.constants.FETCH
        });
    }

    create(params) {
        AppDispatcher.dispatch({
            actionType: this.constants.CREATE,
            params: params
        });

        POST(this.baseUrl, params, (err, response) => {
            if (err) {
                AppDispatcher.dispatch({
                    actionType: this.constants.CREATE_ERROR,
                    response: null, error: err, tempID: tempID
                });
                AlertActions.sendDelayed({error: err});
            }
            if (response)
                AppDispatcher.dispatch({
                    actionType: this.constants.CREATE_SUCCESS,
                    response: response, error: null, tempID: tempID
                });
        });
    }

    update(id, params) {
        AppDispatcher.dispatch({
            actionType: this.constants.UPDATE,
            params: params,
            id: id
        });
        PATCH(`${this.baseUrl}/${id}`, params, (err, response) => {
            if (err)
                AlertActions.sendDelayed({error: err});
            if (response)
                AppDispatcher.dispatch({
                    actionType: this.constants.UPDATE_SUCCESS,
                    response: response, error: null
                });
        });
    }

    destroy(id) {
        AppDispatcher.dispatch({
            actionType: this.constants.DESTROY,
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
                    actionType: this.constants.DESTROY_SUCCESS,
                    response: response, error: null
                });
        });
    }
}

import TableConstants from '../constants/TableConstants.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.jsx';

var TableActions = new BaseActions(TableConstants, ApiEndpoints.PRODUCTS);

export default TableActions;