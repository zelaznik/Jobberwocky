import React from 'react';
import { Link } from 'react-router';

var Error404 = React.createClass({
    render() {
        return (
            <div className="fourofour-container">
                <h1>404</h1>
                <h2>It looks like you're lost.</h2>
                <Link to="/" className="btn btn-lg btn-default-outline">
                    <i className="fa fa-home" />
                    <span>Go to the homepage</span>
                </Link>
            </div>
        );
    },

    componentDidMount() {
        document.body.classList.add('fourofour');
    },
    componentWillUnmount() {
        document.body.classList.remove('fourofour');
    }
});

var Alert = React.createClass({
    render() {
        var alert_id = "alert." + this.props.params.alert_id;
        var markup = localStorage.getItem(alert_id);
        localStorage.removeItem(alert_id);
        return (
            <div dangerouslySetInnerHTML={{__html: markup}} />
        );
    }
});

export { Error404, Alert }