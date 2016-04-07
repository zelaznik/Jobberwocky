import React from 'react';
import StringFormat from '../../utils/StringFormat.jsx';

var SocialMedium = React.createClass({
    render() {
        var align = this.props.align.toLowerCase(),
            source = this.props.source.toLowerCase(),
            label = StringFormat.capitalize(source);

        return (
            <a className={`btn btn-primary ${align} ${source}`} href="index.html">
                <i className={`fa fa-${this.props.source.toLowerCase()}`} />
                <span>{label} Login</span>
            </a>
        )
    }
});

var SocialMedia = React.createClass({
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