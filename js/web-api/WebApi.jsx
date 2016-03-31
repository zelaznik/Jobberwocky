import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
import SessionStore from '../stores/SessionStore.jsx';
var request = require('superagent');

function sign_in(params) {
    request
    .post(ApiEndpoints.SIGN_IN)
    .set('Accept', 'application/vnd.marketplace.v1')
    .set('Content-Type',  'application/json')
    .send({session: params})
    .end(function(error, response) {
        AppDispatcher.dispatch({
            actionType: SessionConstants.RECEIVE_LOGIN,
            response: response, error: error
        });
    });
}

function sign_out() {
    request
        .delete(ApiEndpoints.SIGN_IN)
        .set('Accept', 'application/vnd.marketplace.v1')
        .set('Content-Type',  'application/json')
        .set('Authorization', SessionStore.token())
        .send({id: SessionStore.token()})
        .end(function(error, response) {
            AppDispatcher.dispatch({
                actionType: SessionConstants.RECEIVE_LOGOUT,
                response: response, error: error
            });
        });
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
