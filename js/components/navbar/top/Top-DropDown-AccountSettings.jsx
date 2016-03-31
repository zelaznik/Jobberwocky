import React from 'react';

import SessionActions from '../../../actions/SessionActions.jsx';

import CurrentObjectMixin from '../../_mixins/Mixin-CurrentObject.jsx';

const AccountSetting = React.createClass({
    render() {
        return (
            <li>
                <a href={this.props.href || '#'} onClick={ this.props.onClick } >
                    <i className={`fa fa-${this.props.icon}`} />
                    <span>{this.props.label}</span>
                </a>
            </li>
        )
    }
});

var AccountSettingsDropDown = React.createClass({
    mixins: [CurrentObjectMixin],

    render() {
        return (
            <li className={`dropdown ${this._clsOpen()} user hidden-xs`}>
                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                    <img width="34" height="34" src="assets/images/avatar-male.jpg" />
                    {this.props.user.email}
                    <b className="caret" />
                </a>
                <ul className="dropdown-menu">
                    <AccountSetting icon="user"     label="My Account" />
                    <AccountSetting icon="gear"     label="Account Settings" />
                    <AccountSetting icon="sign-out" label="Logout"
                                    onClick={ () => SessionActions.destroy() } />
                </ul>
            </li>
        );
    }
});

export default AccountSettingsDropDown;