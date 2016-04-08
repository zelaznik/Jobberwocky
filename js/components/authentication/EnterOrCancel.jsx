import React from 'react';
import { Link } from 'react-dom';

import StringFormat from '../../utils/StringFormat.jsx';
import SessionStore from '../../stores/SessionStore.jsx';

var ButtonChoice = React.createClass({
    align() { return this.props.align; },
    source() { return this.props.source.toLowerCase(); },
    label() { return StringFormat.snake_to_label(this.props.source); },
    icon() { return ((!this.props.icon) ? '' : <i className={ 'fa fa-' + this.props.icon } />); },

    clsName() {
        var c = this.props.category ? 'btn-' + this.props.category : '';
        return 'btn ' + c + ' ' + (this.align() || '');
    },

    render() {
        return (
            <a href={ this.props.href } className={ this.clsName() } >
                { this.icon() }
                <span>{ this.label() }</span>
            </a>
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
                <ButtonChoice align='left' category="primary" icon="envelope-o" source="reset_password" href="#" />
                {"   "}
                <ButtonChoice align='right' category="info" icon="sign-in" source="return_to_login" href="/login" />
            </div>
        );
    }
});



export default EnterOrCancel;