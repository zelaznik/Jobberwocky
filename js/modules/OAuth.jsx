import React from 'react';

import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import App from './App.jsx';

class OAuth extends App {
    componentDidMount() {
        App.prototype.componentDidMount.call(this);

        var obj = this;
        this.toRoot = function() {
            obj.goToRoot();
        };
        SessionStore.addChangeListener(this.toRoot);

        const { query } = this.props.location;
        const { auth_token, email, id , image , name } = query;
        var auth = { auth_token, email, id, image, name };
        SessionActions.auth_callback(auth);
    }

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.toRoot);
        App.prototype.componentWillUnmount.call(this);
    }
}

export default OAuth;