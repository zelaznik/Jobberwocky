import React from 'react';
import CurrentObjectMixin from '../../_mixins/Mixin-CurrentObject.jsx';

class DropDownItem extends React.Component {
    render() {
        return (
            <li key={this.props.key}>
                <a href={this.props.item.href}>
                    <p>{this.props.item.label}</p>
                </a>
            </li>
        );
    }
}

var NavMainDropDown = React.createClass({
    mixins: [CurrentObjectMixin],

    render: function() {
        return (
            <li className={`dropdown ${ this._clsOpen() }` }>
                <a className={ this._clsCurrent() } data-toggle="dropdown" href="#">
                    <span aria-hidden='true' className={this.props.icon} />
                    {this.props.label}
                    <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                    {this.props.items.map((item, key) => {
                        return <DropDownItem item={item} key={key} />;
                    })}
                </ul>
            </li>
        );
    },


});

export default NavMainDropDown;
