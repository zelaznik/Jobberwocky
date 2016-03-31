import React from 'react';
import NavBar from './../components/navbar/NavBar.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import { LOGOUT } from '../constants/EventConstants.jsx';
import routes from '../routes.jsx';

const App = React.createClass({
    getInitialState() {
        return {
            loggedIn: SessionStore.loggedIn()
        };
    },
    render() {
        return (
            <div className="modal-shiftfix">
                <NavBar routes={routes} />
                {this.props.children}
            </div>
        );
    },
    componentDidMount() {
        SessionStore.addChangeListener(this.getNewSession);
        SessionStore.on(LOGOUT, this.goToLogin);
    },
    componentWillUnmount() {
        SessionStore.removeChangeListener(this.getNewSession);
        SessionStore.removeListener(LOGOUT, this.goToLogin);
    },
    getNewSession() {
        this.setState({session: SessionStore.data() });
    },
    goToLogin() {
        var { history } = this.props;
        history.push('/login');
    }
});

export default App;