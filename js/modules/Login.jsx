import React from 'react';

import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';

import AlertStore from '../stores/AlertStore.jsx';
import AlertModal from '../components/modals/AlertModal.jsx';

import deepCopy from '../utils/deepCopy.jsx';

var WithPassword = React.createClass({
    getInitialState() {
        return {email: '', password: ''};
    },
    render() {
        return(
            <form href="#" onSubmit={this.onSubmit} >
                <div className="form-group">
                    <input className="form-control"
                           placeholder="Email Address"
                           field="email"
                           type="text"
                           value={this.state.email}
                           onChange={ (e) => this.updateForm(e, 'email') }
                           autoComplete="off"
                    />
                </div>
                <div className="form-group">
                    <input className="form-control"
                           placeholder="Password"
                           type="password"
                           value={this.state.password}
                           onChange={ (e) => this.updateForm(e, 'password') }
                           autoComplete="off"
                    />
                    <input type="submit" value='&#xf054;' />
                </div>
                <div className="form-options clearfix">
                    <a className="pull-right" href="#">Forgot password?</a>
                </div>
            </form>
        )
    },

    updateForm(e, key) {
        this.state[key] = e.target.value;
        this.setState(deepCopy(this.state));
    },

    onSubmit(e) {
        e.preventDefault();
        SessionActions.create({
            email: this.state.email,
            password: this.state.password
        });
    }
});

var WithSocialMedia = React.createClass({
    render() {
        var align = this.props.align.toLowerCase(),
            source = this.props.source.toLowerCase(),
            label = source[0].toUpperCase() + source.slice(1);

        return (
            <a className={`btn btn-primary ${align} ${source}`} href="index.html">
                <i className={`fa fa-${this.props.source.toLowerCase()}`} />
                <span>{label} Login</span>
            </a>
        )
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
                    <WithPassword />
                    <div className="social-login clearfix">
                        <WithSocialMedia align={'left'} source={'Facebook'} />
                        <WithSocialMedia align={'right'} source={'Twitter'} />
                    </div>
                    <p className="signup">
                        <span>Don't have an account yet?</span>
                        <a href="signup1.html">
                            <span>Sign up now</span>
                        </a>
                    </p>
                </div>

                <AlertModal alerts={this.state.alerts}
                            onMouseDown={this.mouseDownHandler}
                />

            </div>
        );
    }
});

export default Login;