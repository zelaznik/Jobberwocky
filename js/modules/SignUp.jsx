import React from 'react';

import AlertModal from '../components/modals/AlertModal.jsx';
import Credentials from '../components/authentication/Credentials.jsx';
import SocialMedia from '../components/authentication/SocialMedia.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';

var SignUpWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form href="#" onSubmit={this.onSubmit} >
                { this.email_input() }
                { this.input('password', false) }
                { this.input('password_confirmation', true) }
                <p class="signup">{""}</p>
            </form>
        );
    },

    onSubmit(e) {
        e.preventDefault();
        UserActions.create({
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
                    <a href="#">
                        <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <SignUpWithPassword />
                    <div className="social-login clearfix">
                        <SocialMedia align={'left'} source={'Facebook'} />
                        <SocialMedia align={'right'} source={'Twitter'} />
                    </div>
                    <p className="signup">
                        <span>Already have an account?</span>
                        <span>{"  "}</span>
                        <a href="login">
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