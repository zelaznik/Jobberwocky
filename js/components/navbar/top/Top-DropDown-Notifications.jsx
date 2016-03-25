import React from 'react';
import CurrentObjectMixin from '../../_mixins/Mixin-CurrentObject.jsx';
import RenderTop from '../_mixins/Mixin-RenderTop.jsx';

var Notification = React.createClass({
    newFlag() {
        if (this.props.item.new) {
            return (<div className="notifications label label-info">New</div>)
        } else {
            return null;
        }
    },

    render() {
        return (
            <li>
                <a href="#">
                    { this.newFlag() }
                    <p>{this.props.item.message}</p>
                </a>
            </li>
        );
    }
});

var NotificationsDropDown = React.createClass({
    mixins: [CurrentObjectMixin, RenderTop],
    params: {
        icon:          'se7en-flag',
        category:      'notifications',
        counter:        (items) => items.filter((v) => v.new).length ,
        renderItem:     (item, key) => <Notification key={key} item={item} />
    }
});

export default NotificationsDropDown;