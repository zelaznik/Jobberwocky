import React from 'react';
var base64 = require('node-base64-urlsafe');

import SessionActions from '../actions/SessionActions.jsx';
import App from './App.jsx';

class OAuth extends App {
    componentDidMount() {
        App.prototype.componentDidMount.call(this);
        const { data } = this.props.location.query;
        var serialized = base64.decode(data);
        var auth = JSON.parse(serialized);
        SessionActions.auth_callback(auth);
    }

    componentWillUnmount() {
        App.prototype.componentWillUnmount.call(this);
    }
}

export default OAuth;