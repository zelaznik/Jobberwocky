import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const SessionConstants = uniqueKeySet({
    SEND_LOGIN:  null,
    RECEIVE_LOGIN: null,
    
    SEND_LOGOUT: null,
    RECEIVE_LOGOUT: null
});

export default SessionConstants;