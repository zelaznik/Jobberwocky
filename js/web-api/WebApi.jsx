import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';

import SessionConstants from '../constants/SessionConstants.jsx';
import SessionActions from '../actions/SessionActions.jsx';

/* Includes the session tokens and CORS headers.
This wrapper is also backbone.js locally */
import $ajaxWrapper from './ajaxWrapper';

function apiRequest(method, url, data, callback) {
    $ajaxWrapper({
        url: url,
        type: method,
        data: JSON.stringify(data),
        success(response) {
            callback(null, response);
        },
        error(error, status) {
            callback(error, null);
        }
    });
}

var GET =    apiRequest.bind(null, 'GET'),
    POST =   apiRequest.bind(null, 'POST'),
    PUT =    apiRequest.bind(null, 'PUT'),
    PATCH =  apiRequest.bind(null, 'PATCH'),
    DELETE = apiRequest.bind(null, 'DELETE');


AppDispatcher.register( (payload) => {
    var params = payload.params;
    switch (payload.actionType) {
        case SessionConstants.SEND_LOGIN:
            POST(ApiEndpoints.SIGN_IN, {session: params}, SessionActions.response_create);
            break;

        case SessionConstants.SEND_LOGOUT:
            DELETE(ApiEndpoints.SIGN_OUT, {}, SessionActions.response_destroy);
            break;
    }
});

export default { GET, POST, PUT, PATCH, DELETE };
