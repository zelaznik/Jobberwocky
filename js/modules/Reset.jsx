import React from 'react';
import SessionActions from '../actions/SessionActions.jsx';

import EnterOrCancel from '../components/authentication/EnterOrCancel.jsx';
import Credentials from '../components/authentication/Credentials.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

var SignUpWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form href="#" onSubmit={this.onSubmit} >
                { this.email_input('email', false) }
                { this.email_input('email_confirmation', true) }
                <p class="signup">{""}</p>
            </form>
        );
    },

    onSubmit(e) {
        e.preventDefault();
        SessionActions.password_reset({
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
                    <EnterOrCancel />
                    <h3 className="signup">
                        Reset Your Password By Email
                    </h3>
                </div>

                <AlertModal alerts={this.state.alerts} />

            </div>
        );
    }
});

export default SignUp;