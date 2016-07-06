import App from './App.jsx';
import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';

class OAuth extends App {
    constructor() {
        super();
        this.toRoot = this.goToRoot.bind(this);
    }

    componentDidMount() {
        App.prototype.componentDidMount.call(this);
        SessionStore.addChangeListener(this.toRoot);
        SessionActions.auth_callback(this.props.params);
    }

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.toRoot);
        App.prototype.componentWillUnmount.call(this);
    }
}

export default OAuth;