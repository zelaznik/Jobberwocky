import React from 'react';

import SessionActions from '../actions/SessionActions.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

import Credentials from '../components/authentication/Credentials.jsx';
import SocialMedia from '../components/authentication/SocialMedia.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';

var SignUpWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form onSubmit={this.onSubmit} >
                { this.email_input('email', false) }
                { this.password_input('password', false) }
                { this.password_input('password_confirmation', true) }
                <p class="signup">{""}</p>
            </form>
        );
    },

    onSubmit(e) {
        e.preventDefault();
        SessionActions.new_user({
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        });
    }
});

var SignUp = React.createClass({
    mixins: [AuthHandler],

    render() {
        return (
            <div className="login-wrapper">
                <div id="login-container" className='login-container active'>
                    <a>
                        <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <SignUpWithPassword />
                    <SocialMedia />
                    <p className="signup">
                        <span>Already have an account?</span>
                        <span>{"  "}</span>
                        <a href="/login">
                            <span>Log In Now</span>
                        </a>
                    </p>
                </div>

                <AlertModal alerts={this.state.alerts} />

            </div>
        );
    }
});

export default SignUp;
