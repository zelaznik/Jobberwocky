import React from 'react';

import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import App from './App.jsx';

class OAuth extends App {
    componentDidMount() {
        App.prototype.componentDidMount.call(this);
        SessionStore.addChangeListener(this.toRoot);
        this.toRoot = () => (this.goToRoot());

        const { query } = this.props.location;
        const { params } = this.props;
        const { auth_token, email, id } = query;
        var auth = { auth_token, email, id };
        SessionActions.auth_callback(auth);
    }

    componentWillUnmount() {
        console.log("OAuth.componentDidMount");
        SessionStore.removeChangeListener(this.toRoot);
        App.prototype.componentWillUnmount.call(this);
    }
}

export default OAuth;