/* REACT AND NODE LIBRARIES */
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

/* APPS AND MODULES */
import App from './modules/App.jsx';

/* STANDALONE COMPONENTS */
import MainContent from './components/MainContent.jsx';
import { Error404 } from './components/Errors.jsx';
import Login from './components/authentication/Login.jsx';
import AlertModal from './components/modals/AlertModal.jsx';

/* UTILITIES */
import requireAuth from './utils/requireAuth.jsx';

/* Turn on the API's */
(function() {
    require('./web-api/WebApi.jsx');
})();


/* DEVELOPMENT TOOLS */
import {Home, Social, Charts, Gallery } from './_development/PlaceHolders.jsx';

var router = (
    <Router history={ browserHistory } >
        <Route path="/" component={ App } onEnter={ requireAuth }>
            <IndexRoute component={Home} />
            <Route path="/dashboard" component={ MainContent } />
            <Route path="/social" component={Social} />
            <Route path="/charts" component={Charts} />
            <Route path="/gallery" component={Gallery} />
        </Route>
        <Route path="/login" component={Login} />
        <Route path="*" component={ Error404 } status="404" />
    </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(router, document.getElementById('main'))
});
