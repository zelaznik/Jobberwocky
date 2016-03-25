import React from 'react';
import MainDropDown from './Main-DropDown.jsx';

var NavItem = React.createClass({
    render() {
        return (
            <li>
                <a href={this.props.href}>
                    <span aria-hidden="true" className={`icon ${this.props.icon}`} />
                    <span>{this.props.label}</span>
                </a>
            </li>
        );
    }
});

function DropDown(params, block) {
    this.href = params.href;
    this.label = params.label;
    this.icon = params.icon;
    this.items = block();
}

var NavBarMain = React.createClass({
    _renderDropDown(row, key) {
        return (<MainDropDown key={key} href={row.href} icon={row.icon} label={row.label} items={row.items}/>);
    },

    _renderMain(row, key) {
        return (<NavItem key={key} href={row.href} icon={row.icon} label={row.label}/>);
    },

    _renderRoutes() {
        var r = {
            dropdown: (params, block) => new DropDown(params, block)
        };


        var withDropDowns = this.props.routes(r);
        return withDropDowns.map((row, key) => {
            if (row instanceof DropDown) {
                return this._renderDropDown(row, key);
            } else {
                return this._renderMain(row, key);
            }
        });
    },

    render() {
        return (
            <div className="container-fluid main-nav clearfix">
                <div className="nav-collapse">
                    <ul className="nav">
                        { this._renderRoutes() }
                    </ul>
                </div>
            </div>
        );
    }
});

export default NavBarMain;
