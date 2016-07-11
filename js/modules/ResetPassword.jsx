import React from 'react';
import SessionActions from '../actions/SessionActions.jsx';

import AlertModal from '../components/modals/AlertModal.jsx';
import Credentials from '../components/authentication/Credentials.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';

var ResetInputs = React.createClass({
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
        SessionActions.reset_password({
            email: this.state.email,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation
        });
    }
});

var ResetPassword = React.createClass({
    mixins: [AuthHandler],

    render() {
        return (
            <div className="login-wrapper">
                <div id="login-container" className='login-container active'>
                    <a>
                        <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <ResetInputs />
                    <h3 className="signup">
                        Please enter your email along with your new password.
                    </h3>
                </div>
                <AlertModal alerts={this.state.alerts} />
            </div>
        );
    }
});

export default ResetPassword;
