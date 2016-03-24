import React from 'react';
import DropDownMixin from './mixins/Mixin-DropDown.jsx';
import RenderTop from './mixins/Mixin-RenderTop.jsx';

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
    mixins: [DropDownMixin, RenderTop],
    params: {
        icon:          'se7en-envelope',
        category:      'messages',
        counter:        (items) => (items.length),
        renderItem:     (item, key) => <Message key={key} item={item} />
    }
});

export default NewMessagesDropDown;