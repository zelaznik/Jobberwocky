import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';

import SessionConstants from '../constants/SessionConstants.jsx';
import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';

var $ = require('jquery');

var headers = ()=>({
    'Accept': 'application/vnd.marketplace.v1',
    'Content-Type': 'application/json',
    'Authorization': null
});

function req(url, data, callback) {
    $.ajax({
        type: this,
        url: url,
        headers: headers(),
        crossDomain: true,
        data: JSON.stringify(data),
        success(response) { callback(null, response); },
        error(error, status) { callback(error, null); }
    });
}

var GET = req.bind('GET'),
    POST = req.bind('POST'),
    PUT = req.bind('PUT'),
    PATCH = req.bind('PATCH'),
    DELETE = req.bind('DELETE');

function sign_in(params) {
    POST(ApiEndpoints.SIGN_IN, {session: params}, SessionActions.response_create);
}
function sign_out() {
    DELETE(ApiEndpoints.SIGN_OUT, {id: SessionStore.token()}, SessionActions.response_destroy);
}

AppDispatcher.register( (payload) => {
    switch (payload.actionType) {
        case SessionConstants.SEND_LOGIN:
            sign_in(payload.params);
            break;

        case SessionConstants.SEND_LOGOUT:
            sign_out(payload.params);
            break;
    }
});

const WebApi = { sign_in , sign_out };
export default WebApi;
