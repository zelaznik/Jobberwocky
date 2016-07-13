import React from 'react';

import NotificationsDropDown   from './Top-DropDown-Notifications.jsx';
import NewMessagesDropDown     from './Top-DropDown-Messages.jsx';
import AccountSettingsDropDown from './Top-DropDown-AccountSettings.jsx';
import SearchBarActions from '../../../actions/SearchBarActions.jsx';

var NavBarTopRight = React.createClass({
    render() {
        return (
            <div className="pull-right">
                <ul className="nav navbar-nav pull-right">
                    <NotificationsDropDown items={this.props.data.notifications} />
                    <NewMessagesDropDown items={this.props.data.messages} />
                    <AccountSettingsDropDown user={this.props.data.user} />
                </ul>
            </div>
        );
    }
});

var SearchBar = React.createClass({
    onChange(e) {
        SearchBarActions.update(e.target.value);
    },

    render() {
        return (
            <form className="navbar-form form-inline col-lg-2 hidden-xs">
                <input className="form-control" placeholder="Search"
                       type="text" onChange={this.onChange}
                />
            </form>
        );
    }
});

var NavBarTop = React.createClass({
    render() {
        return (
            <div className="container-fluid top-bar">
                <NavBarTopRight  data={this.props.data} />
                <button className="navbar-toggle">
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                    <span className="icon-bar" />
                </button>
                <a className="logo" href="index.html">se7en</a>
                <SearchBar />
            </div>
        );
    }
});

export default NavBarTop;