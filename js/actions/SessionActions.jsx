import assign from 'object-assign';

import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import AlertActions from '../actions/AlertActions.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import { GET , POST, DELETE } from '../webApi/WebApi.jsx';

var SessionActions = Object.freeze({
    create(params) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SIGN_IN,
            params: params
        });
        POST(ApiEndpoints.SIGN_IN, {session: params}, (error, response) => {
            if (error)
                AlertActions.sendDelayed({error: error});
            if (response)
                AppDispatcher.dispatch({
                    actionType: SessionConstants.SIGN_IN_SUCCESS,
                    response: response, error: error
                });
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

    destroy() {
        AppDispatcher.dispatch({
            actionType: SessionConstants.SIGN_OUT
        });
        DELETE(ApiEndpoints.SIGN_OUT, undefined, (error, response) => {
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
    }

});

export default SessionActions;
