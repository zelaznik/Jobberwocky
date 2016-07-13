import React from 'react';
import assign from 'object-assign';
import { browserHistory } from 'react-router';
import Pusher from 'pusher-js';

import { LOGOUT, REDIRECT_TO_LOGIN , SIGN_IN_SUCCESS } from '../constants/EventConstants.jsx';
import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import ChatActions from '../actions/ChatActions.jsx';
import AlertStore from '../stores/AlertStore.jsx';

import AlertModal from '../components/modals/AlertModal.jsx';
import NavBar from './../components/navbar/NavBar.jsx';
import routes from '../routes.jsx';

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

    socketSetup() {
        this.pusher = new Pusher(process.env.PUSHER_KEY, {encrypted: true});
        this.notifications = this.pusher.subscribe(''+SessionStore.currentUserId());
        this.notifications.bind('NEW_MESSAGE', ChatActions.receive_message);
    },

    socketTakedown() {
        this.notifications.bind('NEW_MESSAGE', ChatActions.receive_message);
    },

    componentDidMount() {
        document.addEventListener('click', this.pageClick);
        SessionStore.addChangeListener(this.getNewSession);
        SessionStore.on(SIGN_IN_SUCCESS, SessionActions.toPreviousPage);
        SessionStore.on(REDIRECT_TO_LOGIN, this.goToLogin);
        SessionStore.on(LOGOUT, this.goToLogin);
        AlertStore.addChangeListener(this.getNewSession);
    },

    componentWillUnmount() {
        document.removeEventListener('click', this.pageClick);
        SessionStore.removeListener(SIGN_IN_SUCCESS, SessionActions.toPreviousPage);
        SessionStore.removeChangeListener(this.getNewSession);
        AlertStore.removeChangeListener(this.getNewSession);
        SessionStore.removeListener(LOGOUT, this.goToLogin);
    },

    getNewSession() {
        this.setState(assign({}, this.state, this.getInitialState()));
    },

    goToLogin() {
        browserHistory.push('/login');
    },

    goToRoot() {
        browserHistory.push('/');
    }
});

export default App;
