import { browserHistory } from 'react-router';

import { SIGN_IN_SUCCESS } from '../../constants/EventConstants.jsx';
import SessionActions from '../../actions/SessionActions.jsx';
import SessionStore from '../../stores/SessionStore.jsx';
import AlertStore from '../../stores/AlertStore.jsx';

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

    redirect() {
        if (!SessionActions.toPreviousPage()) {
            browserHistory.push("/");
        }
    },

    componentDidMount() {
        document.body.classList.add('login1');
        SessionStore.on(SIGN_IN_SUCCESS, this.redirect);
        SessionStore.addChangeListener(this.refresh);
        AlertStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        document.body.classList.remove('login1');
        SessionStore.removeListener(SIGN_IN_SUCCESS, this.redirect);
        SessionStore.removeChangeListener(this.refresh);
        AlertStore.removeChangeListener(this.refresh);
    }
});

export default AuthHandler;