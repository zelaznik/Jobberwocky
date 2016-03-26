import React from 'react';
import { Link } from 'react-router';

class Error404 extends React.Component {
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
    }

    componentDidMount() {
        document.body.classList.add('fourofour');
    }

    componentWillUnmount() {
        document.body.classList.remove('fourofour');
    }
}

export { Error404 }