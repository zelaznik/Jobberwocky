import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App.jsx';
import { Error404 } from './components/Errors.jsx';

function placeHolder(name) {
    return class PlaceHolder extends React.Component {
        render() {return (<h1><center>{name}</center></h1>)}
    }
}

let Home = placeHolder('Home');
let Dashboard = placeHolder('Dashboard');
let Social = placeHolder('Social');
let Charts = placeHolder('Charts');
let Gallery = placeHolder('Gallery');

var routes = (
    <Router history={ browserHistory } >
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/social" component={Social} />
            <Route path="/charts" component={Charts} />
            <Route path="/gallery" component={Gallery} />
        </Route>
        <Route path="*" component={ Error404 } />
    </Router>
);

document.addEventListener('DOMContentLoaded', ()=> {
    ReactDOM.render(routes, document.getElementById('main'))
});
