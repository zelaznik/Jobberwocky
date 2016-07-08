import React from 'react';
var get_md5 = require('md5');
var base64 = require('node-base64-urlsafe');

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

        const { md5, data } = this.props.location;
        var auth = base64.decode(data);
        if (md5 != get_md5(auth)) {
            console.warn("Hashes don't match: " + md5 + " vs " + get_md5(auth));
        } else {
            SessionActions.auth_callback(auth);
        }
    }

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.toRoot);
        App.prototype.componentWillUnmount.call(this);
    }
}

export default OAuth;