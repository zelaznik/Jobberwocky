import React from 'react';

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

var NavDropDown = React.createClass({
    render: function() {
        var open = this._isCurrent() ? " open" : "";
        return (
            <li className={'dropdown' + open} onClick={this._onClick} >
                <a data-toggle="dropdown" href="#">
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

    _key: function() {
      return this.props.reactKey;
    },

    _isCurrent: function() {
        return this.props.parent.current() === this._key();
    },

    _onClick: function() {
        this.props.parent.setCurrent(this._key());
    }
});

export default NavDropDown;
