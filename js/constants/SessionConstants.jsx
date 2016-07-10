import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const SessionConstants = uniqueKeySet('Session', {
    SIGN_UP: null,
    SIGN_UP_SUCCESS: null,
    SIGN_UP_ERROR: null,

    SIGN_IN: null,
    SIGN_IN_SUCCESS: null,
    SIGN_IN_ERROR: null,

    SIGN_OUT: null,
    SIGN_OUT_SUCCESS: null,
    SIGN_OUT_ERROR: null,

    OMNIAUTH_NEW: null,
    OMNIAUTH_URL_PRELOAD: null,

    REQUEST_NEW_PASSWORD: null
});

export default SessionConstants;