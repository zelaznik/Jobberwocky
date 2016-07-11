import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
// import AlertActions from '../actions/AlertActions.jsx';
// import ApiEndpoints from '../constants/ApiEndpoints.js';
// import { GET , POST, DELETE } from '../webApi/WebApi.jsx';

var ChatActions = Object.freeze({
    new(params) {
        AppDispatcher.dispatch({
            actionType: ChatConstants.NEW,
            params: params
        });
        // POST(ApiEndpoints.SIGN_IN, {user: params}, (error, response) => {
        //     if (error)
        //         AlertActions.sendDelayed({error: error});
        //     if (response)
        //         AppDispatcher.dispatch({
        //             actionType: SessionConstants.SIGN_IN_SUCCESS,
        //             response: response, error: error
        //         });
        // });
    }
});

export default ChatActions;