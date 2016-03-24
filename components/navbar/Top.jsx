import React from 'react';

class NavBarPullRight extends React.Component {
    render() {
        return (
            <div className="pull-right">
                <ul className="nav navbar-nav pull-right">
                    <li className="dropdown notifications hidden-xs">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span aria-hidden="true" className="icon se7en-flag" />
                            <div className="sr-only">
                                Notifications
                            </div>
                            <p className="counter">
                                4
                            </p>
                        </a>
                        <ul className="dropdown-menu">
                            <li><a href="#">
                                <div className="notifications label label-info">
                                    New
                                </div>
                                <p>
                                    New user added: Jane Smith
                                </p></a>

                            </li>
                            <li><a href="#">
                                <div className="notifications label label-info">
                                    New
                                </div>
                                <p>
                                    Sales targets available
                                </p></a>

                            </li>
                            <li><a href="#">
                                <div className="notifications label label-info">
                                    New
                                </div>
                                <p>
                                    New performance metric added
                                </p></a>

                            </li>
                            <li><a href="#">
                                <div className="notifications label label-info">
                                    New
                                </div>
                                <p>
                                    New growth data available
                                </p></a>

                            </li>
                        </ul>
                    </li>
                    <li className="dropdown messages hidden-xs">
                        <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span aria-hidden="true" className="icon se7en-envelope" />
                            <div className="sr-only">
                                Messages
                            </div>
                            <p className="counter">
                                3
                            </p>
                        </a>
                        <ul className="dropdown-menu messages">
                            <li><a href="#">
                                <img width="34" height="34" src="assets/images/avatar-male2.png" />Could we meet today? I wanted...</a>
                            </li>
                            <li><a href="#">
                                <img width="34" height="34" src="assets/images/avatar-female.png" />Important data needs your analysis...</a>
                            </li>
                            <li><a href="#">
                                <img width="34" height="34" src="assets/images/avatar-male2.png" />Buy Se7en today, it's a great theme...</a>
                            </li>
                        </ul>
                    </li>
                    <li className="dropdown user hidden-xs"><a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <img width="34" height="34" src="assets/images/avatar-male.jpg" />John Smith<b className="caret" /></a>
                        <ul className="dropdown-menu">
                            <li><a href="#">
                                <i className="fa fa-user" />My Account</a>
                            </li>
                            <li><a href="#">
                                <i className="fa fa-gear" />Account Settings</a>
                            </li>
                            <li><a href="login1.html">
                                <i className="fa fa-sign-out" />Logout</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

class NavBarTop extends React.Component {
    render() {
        return (
            <div className="container-fluid top-bar">
                <NavBarPullRight />
                <button className="navbar-toggle"><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button><a className="logo" href="index.html">se7en</a>
                <form className="navbar-form form-inline col-lg-2 hidden-xs">
                    <input className="form-control" placeholder="Search" type="text" />
                </form>
            </div>
        );
    }
}

export default NavBarTop;