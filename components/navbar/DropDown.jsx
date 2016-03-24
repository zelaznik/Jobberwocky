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
    getInitialState: function() {
        return {collapsed: true};
    },
    render: function() {
        var open = this.state.collapsed ? "" : " open";
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

    _onClick: function() {
        this.setState({collapsed: !this.state.collapsed});
    }
});

export default NavDropDown;
