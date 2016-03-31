import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import App from './modules/App.jsx';
import MainContent from './components/MainContent.jsx';
import { Error404 } from './components/Errors.jsx';
import Login from './components/authentication/Login.jsx';

import SessionStore from './stores/SessionStore.jsx';

class PlaceHolder extends React.Component {
    render() { return (<h1><center>{this.constructor.name}</center></h1>); }
}
class Home extends PlaceHolder {}
class Social extends PlaceHolder {}
class Charts extends PlaceHolder {}
class Gallery extends PlaceHolder {}

const requireAuth = (nextState, replace, callback) => {
    if ( !SessionStore.loggedIn() ) {
        replace({
            pathname: '/login',
            state: {nextPathname: nextState.location.pathname}
        });
    }

    if (callback)
        callback();
};

window.browserHistory = browserHistory;
window.SessionStore = SessionStore;

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
        <Route path="*" component={ Error404 } />
    </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(router, document.getElementById('main'))
});
