import React from 'react';

import StringFormat from '../../utils/StringFormat.jsx';
import SessionActions from '../../actions/SessionActions.jsx';
import SessionStore from '../../stores/SessionStore.jsx';

var SocialMedium = React.createClass({
    align() { return this.props.align.toLowerCase(); },
    source() { return this.props.source.toLowerCase(); },
    label() { return StringFormat.capitalize(this.props.source); },

    componentWillMount() {
        if (!SessionStore.omni_auth_url(this.source())) {
            SessionActions.new_auth(this.source());
        }
    },

    render() {
        return (
            <a href={ SessionStore.omni_auth_url(this.source()) || '#' }
               className={`btn btn-primary ${this.align()} ${this.source()}`}
            >
                <i className={`fa fa-${this.source()}`} />
                <span>{this.label()}{" "}Login</span>
            </a>
        );
    }
});

var SocialMedia = React.createClass({
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
                <SocialMedium align={'left'} source={'Facebook'} />
                {"   "}
                <SocialMedium align={'right'} source={'Twitter'} />
            </div>
        );
    }
});



export default SocialMedia;