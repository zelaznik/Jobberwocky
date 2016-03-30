import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import MainContent from './components/MainContent.jsx';
import { Error404 } from './components/Errors.jsx';

import Login from './components/authentication/Login.jsx';

function placeHolder(name) {
    return class PlaceHolder extends React.Component {
        render() {return (<h1><center>{name}</center></h1>)}
    }
}

let Home = placeHolder('Home');
let Social = placeHolder('Social');
let Charts = placeHolder('Charts');
let Gallery = placeHolder('Gallery');

var routes = (
    <Router history={ browserHistory } >
        <Route path="/" component={ App } >
            <IndexRoute component={Home} />
            <Route path="/dashboard" component={ MainContent } />
            <Route path="/social" component={Social} />
            <Route path="/charts" component={Charts} />
            <Route path="/gallery" component={Gallery} />
        </Route>
        <Route path="/login1" component={Login} />
        <Route path="*" component={ Error404 } />
    </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(routes, document.getElementById('main'))
});
