import React from 'react';
import SessionActions from '../actions/SessionActions.jsx';

import Credentials from '../components/authentication/Credentials.jsx';
import AuthHandler from '../components/authentication/AuthHandler.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

var SignUpWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form onSubmit={this.onSubmit} >
                { this.email_input('email', false) }
                { this.email_input('email_confirmation', true) }
                <p class="signup">{""}</p>
                <div className="btn btn-primary right facebook" onClick={this.onSubmit}>
                    <i className="fa fa-envelope-o" />
                    <span>Submit</span>
                </div>
            </form>
        );
    },

    onSubmit(e) {
        e.preventDefault();
        SessionActions.request_new_password({
            email: this.state.email,
            email_confirmation: this.state.email_confirmation
        });
    }
});

var RequestPasswordReset = React.createClass({
    mixins: [AuthHandler],

    render() {
        return (
            <div className="login-wrapper">
                <div id="login-container" className='login-container active'>
                    <a>
                      <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <SignUpWithPassword />
                    <h3 className="signup">
                        Reset Your Password By Email
                    </h3>
                </div>

                <AlertModal alerts={this.state.alerts} />
            </div>
        );
    }
});

export default RequestPasswordReset;
