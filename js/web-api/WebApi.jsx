import ApiEndpoints from '../constants/ApiEndpoints.jsx';
import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import SessionConstants from '../constants/SessionConstants.jsx';
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

const WebApi = { sign_in };

AppDispatcher.register( (payload) => {
    switch (payload.actionType) {
        case SessionConstants.SEND_LOGIN:
            sign_in(payload.params);
            break;
    }
});

export default WebApi;
