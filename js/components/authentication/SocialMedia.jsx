import React from 'react';
import StringFormat from '../../utils/StringFormat.jsx';

var SocialMedia = React.createClass({
    render() {
        var align = this.props.align.toLowerCase(),
            source = this.props.source.toLowerCase(),
            label = StringFormat.snake_to_label(source);

        return (
            <a className={`btn btn-primary ${align} ${source}`} href="index.html">
                <i className={`fa fa-${this.props.source.toLowerCase()}`} />
                <span>{label} Login</span>
            </a>
        )
    }
});

export default SocialMedia;