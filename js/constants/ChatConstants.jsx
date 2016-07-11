import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const ChatConstants = uniqueKeySet('Chat', {
    GET_USERS: null,
    GET_USERS_SUCCESS: null,
    GET_USERS_FAILURE: null,

    GET_MESSAGES: null,
    GET_MESSAGES_SUCCESS: null,
    GET_MESSAGES_FAILURE: null
});

export default ChatConstants;