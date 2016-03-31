import SessionStore from '../stores/SessionStore.jsx';

function requireAuth(nextState, replace, callback) {
    if (!SessionStore.loggedIn())
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });

    if (callback)
        callback();
}

export default requireAuth;