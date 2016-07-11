import assign from 'object-assign';

import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.js';
import { GET , POST, DELETE } from '../webApi/WebApi.jsx';

var SessionActions = Object.freeze({
    create(params) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SIGN_IN,
            params: params
        });
        POST(ApiEndpoints.SIGN_IN, {user: params}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: SessionConstants.SIGN_IN_SUCCESS,
                    response: response, error: error
                });
        });
    },
    
    request_new_password(params) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.REQUEST_NEW_PASSWORD,
            params: params
        });
        POST(ApiEndpoints.REQUEST_NEW_PASSWORD, {user: params}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AlertActions.sendDelayed({error: response});
        });
    },

    new_user(params) {
        var password = params.password;
        AppDispatcher.dispatch({
            actionType: SessionConstants.SIGN_UP
        });
        POST(ApiEndpoints.SIGN_UP, {user: params}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: SessionConstants.SIGN_IN_SUCCESS,
                    response: response, error: error
                });
        });
    },

    current_user() {
        GET(ApiEndpoints.CURRENT_USER, null, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                SessionActions.create(assign({}, response.user, {password: password}));
        });
    },

    new_auth(provider) {
        var initialUrl = ApiEndpoints.AUTH.NEW + `?provider=` + provider;
        GET(initialUrl, undefined, (error, response) => {
            if (error) {
                console.warn("Error fetching omni-auth links");
                console.log(error);
            }
            if (response) {
                AppDispatcher.delayedDispatch({
                    actionType: SessionConstants.OMNIAUTH_URL_PRELOAD,
                    provider: provider, url: response.url
                });
            }
        });
    },

    auth_callback(response) {
        console.log("SessionActions.auth_callback(response)");
        console.log(response);
        AppDispatcher.dispatch({
            actionType: SessionConstants.SIGN_IN_SUCCESS,
            response: response, error: null
        });
    },

    destroy() {
        DELETE(ApiEndpoints.SIGN_OUT, null, (error, response) => {
            if (error) {
                console.warn(`Error Signing Out:`);
                console.log(error);
            } else {
                AppDispatcher.dispatch({
                    actionType: SessionConstants.SIGN_OUT_SUCCESS,
                    response: response, error: error
                });
            }
        });
        AppDispatcher.delayedDispatch({
            actionType: SessionConstants.SIGN_OUT
        });
    }

});

export default SessionActions;
