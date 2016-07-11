import { SIGN_IN_SUCCESS } from '../../constants/EventConstants.jsx';
import SessionStore from '../../stores/SessionStore.jsx';
import AlertStore from '../../stores/AlertStore.jsx';
import { browserHistory } from 'react-router';
var Immutable = require('immutable');

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
        var fcn = (v)=>(Immutable.fromJS(v));

        var orig = fcn(SessionStore.saved_location());
        var back = browserHistory.goBack();
        var current = fcn(window.location);

        while (back && !current.equals(prev)) {
            back = browserHistory.goBack();
            current = fcn(window.location);
            console.log("Going back a page: ");
            console.log(current.toJSON());
            console.log('');
        }
        if (!prev.equals(current)) {
            browserHistory.push(orig.get('href'));
        }
    }
});

export default AuthHandler;