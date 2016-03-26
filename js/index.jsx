import React from 'react';
import { render } from 'react-dom';

import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './modules/App';

function placeHolder(name) {
    return class PlaceHolder extends React.Component {
        render() {return (<h1>{name}</h1>)}
    }
}

let Home = placeHolder('Home');
let Dashboard = placeHolder('Dashboard');
let Social = placeHolder('Social');
let Charts = placeHolder('Charts');
let Gallery = placeHolder('Gallery');

render((
    <Router history={ browserHistory } >
        <Route path="/" component={App} >
            <IndexRoute component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/social" component={Social} />
            <Route path="/charts" component={Charts} />
            <Route path="/gallery" component={Gallery} />
        </Route>
    </Router>
),document.getElementById('main'))