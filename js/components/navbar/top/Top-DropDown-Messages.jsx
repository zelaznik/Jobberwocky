import React from 'react';
import CurrentObjectMixin from '../../_mixins/Mixin-CurrentObject.jsx';
import RenderTop from '../_shared/Mixin-RenderTop.jsx';

var Message = React.createClass({
    render() {
        return (
            <li>
                <a href="#">
                    <img width="34" height="34" src={`assets/images/${this.props.item.img}`} />
                    {this.props.item.body}
                </a>
            </li>
        );
    }
});

var NewMessagesDropDown = React.createClass({
    mixins: [CurrentObjectMixin, RenderTop],
    params: {
        icon:          'se7en-envelope',
        category:      'messages',
        counter:        (items) => (items.length),
        renderItem:     (item, key) => <Message key={key} item={item} />
    }
});

export default NewMessagesDropDown;