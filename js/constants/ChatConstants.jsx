import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const ChatConstants = uniqueKeySet('Chat', {
    GET_USERS: null,
    GET_USERS_SUCCESS: null,
    GET_USERS_FAILURE: null
});

export default ChatConstants;