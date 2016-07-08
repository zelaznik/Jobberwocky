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

        const { md5, data } = this.props.location.query;
        var serialized = base64.decode(data);
        var actual_md5 = get_md5(serialized);
        if (md5 !== actual_md5) {
            AlertActions.danger({
                "invalid md5 checksums": ("expected " + md5 + ", got " + actual_md5)
            });
        } else {
            var auth = JSON.parse(serialized);
            SessionActions.auth_callback(auth);
        }
    }

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.toRoot);
        App.prototype.componentWillUnmount.call(this);
    }
}

export default OAuth;