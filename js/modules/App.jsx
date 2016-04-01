import React from 'react';
import assign from 'object-assign';

import NavBar from './../components/navbar/NavBar.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import AlertStore from '../stores/AlertStore.jsx';
import { LOGOUT } from '../constants/EventConstants.jsx';
import routes from '../routes.jsx';

import AlertModal from '../components/modals/AlertModal.jsx';


const App = React.createClass({
    getInitialState() {
        return {
            loggedIn: SessionStore.loggedIn(),
            session: SessionStore.data(),
            alerts: AlertStore.data()
        };
    },
    render() {
        return (
            <div className="modal-shiftfix">
                <NavBar routes={routes} />
                {this.props.children}
                <AlertModal alerts={this.state.alerts} />
            </div>
        );
    },

    componentDidMount() {
        document.addEventListener('click', this.pageClick);
        SessionStore.addChangeListener(this.getNewSession);
        AlertStore.addChangeListener(this.getNewSession);
        SessionStore.on(LOGOUT, this.goToLogin);
    },
    componentWillUnMount() {
        document.addEventListener('click', this.pageClick);
        SessionStore.removeChangeListener(this.getNewSession);
        AlertStore.removeChangeListener(this.getNewSession);
        SessionStore.removeListener(LOGOUT, this.goToLogin);
    },
    getNewSession() {
        this.setState(assign({}, this.state, this.getInitialState()));
    },
    goToLogin() {
        var { history } = this.props;
        history.push('/login');
    }
});

export default App;