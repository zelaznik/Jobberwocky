import React from 'react';
import { Link } from 'react-router';

import StringFormat from '../../utils/StringFormat.jsx';
import SessionStore from '../../stores/SessionStore.jsx';

var ButtonChoice = React.createClass({
    align() { return this.props.align; },
    source() { return this.props.label.toLowerCase(); },
    label() { return StringFormat.snake_to_label(this.props.label); },
    icon() { return (<i className={ 'fa fa-' + this.props.icon } />); },
    clsName() { return 'btn btn-primary ' + this.align() + ' ' + this.props.category; },

    render() {
        return (
            <Link to={ this.props.href } className={ this.clsName() } >
                { this.icon() }
                <span>{ this.label() }</span>
            </Link>
        );
    }
});

var EnterOrCancel = React.createClass({
    getInitialState() {
        return {dummy: {}};
    },

    refresh() {
        this.setState({dummy: {}});
    },

    componentDidMount() {
        SessionStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        SessionStore.removeChangeListener(this.refresh);
    },

    render() {
        return (
            <div className="social-login clearfix">
                <ButtonChoice href="#"      align='left'  label="reset_password"  category="facebook" icon="envelope-o" />
                {"   "}
                <ButtonChoice href="/login" align='right' label="return_to_login" category="twitter"  icon="sign-in" />
            </div>
        );
    }
});



export default EnterOrCancel;