import React from 'react';
import DropDownMixin from './mixins/_Mixin-DropDown.jsx';

var AccountSetting = React.createClass({
    render() {
        return (
            <li>
                <a href={this.props.href || '#'}>
                    <i className={`fa fa-${this.props.icon}`} />
                    <span>{this.props.label}</span>
                </a>
            </li>
        )
    }
});


var AccountSettingsDropDown = React.createClass({
    mixins: [DropDownMixin],

    render() {
        return (
            <li className={`dropdown ${this._clsOpen()} user hidden-xs`}>
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <img width="34" height="34" src="assets/images/avatar-male.jpg" />John Smith<b className="caret" />
                </a>
                <ul className="dropdown-menu">
                    <AccountSetting icon="user"     label="My Account" />
                    <AccountSetting icon="gear"     label="Account Settings" />
                    <AccountSetting icon="sign-out" label="Logout" />
                </ul>
            </li>
        );
    }
});

export default AccountSettingsDropDown;