import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';

function requireAuth(nextState, replace, callback) {
    /* Verify that the session, if it exists, is still valid */
    if (!SessionStore.token()) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }

    if (callback)
        callback();
}

export default requireAuth;