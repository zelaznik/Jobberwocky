import { POST , GET , PATCH , DELETE } from '../../webApi/WebApi.jsx';
import AppDispatcher from '../../dispatcher/appDispatcher.jsx';
import AlertActions from '../AlertActions.jsx';

class TableActions {
    constructor(constants, baseUrl) {
        this.constants = constants;
        this.baseUrl = baseUrl;
    }

    fetch() {
        AppDispatcher.dispatch({
            actionType: this.constants.FETCH
        });
        GET(this.baseUrl.INDEX(), {}, (err, response) => {
            if (err)
                AlertActions.sendDelayed({error: err});
            if (response)
                setTimeout(() => {
                    AppDispatcher.dispatch({
                        actionType: this.constants.FETCH_SUCCESS,
                        response: response, error: null
                    })
                }, 0);
        });
    }

    create(tempID, params) {
        AppDispatcher.dispatch({
            actionType: this.constants.CREATE,
            params: params, tempID: tempID
        });

        POST(this.baseUrl.CREATE(), params, (err, response) => {
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
        PATCH(this.baseUrl.UPDATE(id), params, (err, response) => {
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

        DELETE(this.baseUrl.DESTROY(id), {}, (err, response) => {
            if (err) {
                console.warn("Error destroying database record.");
                console.log(err);
                AlertActions.sendDelayed({error: err});
            }
            if (response)
                AppDispatcher.dispatch({
                    actionType: this.constants.DESTROY_SUCCESS,
                    response: response, error: null
                });
        });
    }
}

export default TableActions;
