/* REACT AND NODE LIBRARIES */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/* APPS AND MODULES */
import App from './modules/App.jsx';

/* STANDALONE COMPONENTS */
import MainContent from './components/Products.jsx';
import { Error404, Alert } from './components/Errors.jsx';
import OAuth from './modules/OAuth.jsx';
import Login from './modules/Login.jsx';
import SignUp from './modules/SignUp.jsx';
import Reset from './modules/Reset.jsx';

/* UTILITIES */
import requireAuth from './utils/requireAuth.jsx';

/* DEVELOPMENT TOOLS */
import {Home, Users, Charts, Gallery } from './_development/PlaceHolders.jsx';

var router = (
    <Router history={ browserHistory } >
        <Route path="/auth_callback" component={ OAuth } />
        <Route path="/" component={ App } onEnter={ requireAuth }>
            <IndexRoute component={ Home } />
            <Route path="/products" component={ MainContent } />
            <Route path="/users" component={Users} />
            <Route path="/charts" component={Charts} />
            <Route path="/gallery" component={Gallery} />
        </Route>

        <Route path="/login" component={ Login } />
        <Route path="/sign_up" component={ SignUp } />
        <Route path="/reset" component={ Reset } />

        <Route path="/alerts/:alert_id" component={Alert} />
        <Route path="*" component={ Error404 } status="404" />
    </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
    /* DEBUGGING */
    (function() {
        window.SessionStore = require('./stores/SessionStore.jsx');
        window.Cookies = require('./utils/cookies.js');
    })();

    ReactDOM.render(router, document.getElementById('main'))
});
