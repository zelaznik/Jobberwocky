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

    componentDidMount() {
        document.body.classList.add('login1');
        SessionStore.addChangeListener(this.toOriginalPage);
        AlertStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        document.body.classList.remove('login1');
        SessionStore.removeChangeListener(this.toOriginalPage);
        AlertStore.removeChangeListener(this.refresh);
    },

    toOriginalPage() {
        if (!SessionStore.loggedIn())
            return;

        const {location, history} = this.props;
        if (location.state && location.state.nextPathname) {
            history.push(location.state.nextPathname);
        } else {
            history.push('/');
        }
    }
});

export default AuthHandler;