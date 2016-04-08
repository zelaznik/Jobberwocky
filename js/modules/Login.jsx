import React from 'react';
import { Link } from 'react-dom';

import SessionActions from '../actions/SessionActions.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

import Credentials from '../components/authentication/Credentials.jsx';
import SocialMedia from '../components/authentication/SocialMedia.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';

var LoginWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form onSubmit={this.onSubmit} >
                { this.email_input('email', false) }
                { this.password_input('password', true) }
                <div className="form-options clearfix">
                    <a href="/reset" className="pull-right">
                        Forgot password?
                    </a>
                </div>
            </form>
        )
    },

    onSubmit(e) {
        e.preventDefault();
        SessionActions.create({
            email: this.state.email,
            password: this.state.password
        });
    }
});

var Login = React.createClass({
    mixins: [AuthHandler],

    render() {
        return (
            <div className="login-wrapper">
                <div id="login-container" className='login-container active'>
                    <a>
                        <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <LoginWithPassword />
                    <SocialMedia />
                    <p className="signup">
                        <span>Don't have an account yet?</span>
                        <span>{"  "}</span>
                        <a href="/sign_up">
                            <span>Sign Up now</span>
                        </a>
                    </p>
                </div>

                <AlertModal alerts={this.state.alerts} />
            </div>
        );
    }
});

export default Login;