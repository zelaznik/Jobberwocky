import React from 'react';
import { Link } from 'react-router';
import CurrentObjectMixin from '../../_mixins/Mixin-CurrentObject.jsx';

class DropDownItem extends React.Component {
    render() {
        return (
            <li key={this.props.key}>
                <Link to={this.props.item.href}>
                    <p>{this.props.item.label}</p>
                </Link>
            </li>
        );
    }
}

var NavMainDropDown = React.createClass({
    mixins: [CurrentObjectMixin],

    render: function() {
        return (
            <li className={`dropdown ${ this._clsOpen() }` }>
                <a data-toggle="dropdown">
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
    }
});

export default NavMainDropDown;
