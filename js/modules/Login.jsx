import React from 'react';

import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';

import AlertStore from '../stores/AlertStore.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

import Credentials from '../components/authentication/Credentials.jsx';
import SocialMedia from '../components/authentication/SocialMedia.jsx';

var LoginWithPassword = React.createClass({
    mixins: [Credentials],

    render() {
        return(
            <form href="#" onSubmit={this.onSubmit} >
                { this.email_input() }
                { this.input('password', true) }
                <div className="form-options clearfix">
                    <a className="pull-right" href="#">Forgot password?</a>
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
    getInitialState() {
        return {
            active: false,
            alerts: AlertStore.data()
        };
    },

    refresh() {
        this.setState( this.getInitialState() );
    },

    componentDidMount() {
        document.body.classList.add('login1');
        SessionStore.addChangeListener(this.toOriginalPage);
        AlertStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        document.body.classList.remove('login1');
        SessionStore.removeChangeListener(this.toOriginalPage);
        AlertStore.removeChangeListener(this.refresh);
    },

    toOriginalPage() {
        if ( !SessionStore.loggedIn() )
            return;

        const { location, history } = this.props;
        if (location.state && location.state.nextPathname) {
            history.push(location.state.nextPathname);
        } else {
            history.push('/');
        }
    },

    render() {
        return (
            <div className="login-wrapper">
                <div id="login-container" className='login-container active'>
                    <a href="#">
                        <img width="100" height="30" src="/assets/images/logo-login@2x.png" />
                    </a>
                    <LoginWithPassword />
                    <div className="social-login clearfix">
                        <SocialMedia align={'left'} source={'Facebook'} />
                        <SocialMedia align={'right'} source={'Twitter'} />
                    </div>
                    <p className="signup">
                        <span>Don't have an account yet?</span>
                        <span>{"  "}</span>
                        <a href="sign_up">
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