import { SIGN_IN_SUCCESS } from '../../constants/EventConstants.jsx';
import SessionStore from '../../stores/SessionStore.jsx';
import AlertStore from '../../stores/AlertStore.jsx';
import { browserHistory } from 'react-router';

var AuthHandler = Object.freeze({
    getInitialState() {
        return {
            active: false,
            alerts: AlertStore.data()
        };
    },

    refresh() {
        this.setState(this.getInitialState());
    },

    componentDidMount() {
        document.body.classList.add('login1');
        SessionStore.on(SIGN_IN_SUCCESS, this.toPreviousPage);
        AlertStore.removeListener(this.refresh);
    },

    componentWillUnmount() {
        document.body.classList.remove('login1');
        SessionStore.removeListener(SIGN_IN_SUCCESS, this.toPreviousPage);
        AlertStore.removeChangeListener(this.refresh);
    },

    toPreviousPage() {
        var prev = SessionStore.saved_location();
        var current = browserHistory.goBack();
        while ((!!current) && (prev.get('pathname') != window.location.pathname)) {
            browserHistory.goBack();
        }
    }
});

export default AuthHandler;