import React from 'react';

var Span = React.createClass({
   render: function() {
       return React.createElement('span', this.props, this.props.text);
   }
});

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-fixed-top scroll-hide">
                <div className="container-fluid top-bar">
                    <div className="pull-right">
                        <ul className="nav navbar-nav pull-right">
                            <li className="dropdown notifications hidden-xs">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span aria-hidden="true" className="se7en-flag" />
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
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#"><span aria-hidden="true" className="se7en-envelope" />
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
                    <button className="navbar-toggle"><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button><a className="logo" href="index.html">se7en</a>
                    <form className="navbar-form form-inline col-lg-2 hidden-xs">
                        <input className="form-control" placeholder="Search" type="text" />
                    </form>
                </div>
                <div className="container-fluid main-nav clearfix">
                    <div className="nav-collapse">
                        <ul className="nav">
                            <li>
                                <a href="index.html"><span aria-hidden="true" className="se7en-home" />Dashboard</a>
                            </li>
                            <li><a href="social.html">
                                <span aria-hidden="true" className="se7en-feed" />Social Feed</a>
                            </li>
                            <li className="dropdown"><a data-toggle="dropdown" href="#">
                                <span aria-hidden="true" className="se7en-star" />UI Features<b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="buttons.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Buttons
                                        </p></a>

                                    </li>
                                    <li><a href="fontawesome.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Font Awesome Icons
                                        </p></a>

                                    </li>
                                    <li><a href="glyphicons.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Glyphicons
                                        </p></a>

                                    </li>
                                    <li>
                                        <a href="components.html">Components</a>
                                    </li>
                                    <li>
                                        <a href="widgets.html">Widgets</a>
                                    </li>
                                    <li>
                                        <a href="typo.html">Typography</a>
                                    </li>
                                    <li>
                                        <a href="grid.html">Grid Layout</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><a data-toggle="dropdown" href="#">
                                <span aria-hidden="true" className="se7en-forms" />Forms<b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="form-components.html">Form Components</a>
                                    </li>
                                    <li>
                                        <a href="form-advanced.html">Advanced Forms</a>
                                    </li>
                                    <li><a href="xeditable.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            X-Editable
                                        </p></a>

                                    </li>
                                    <li><a href="file-upload.html">
                                        <div className="notifications label label-warning">
                                            New
                                        </div>
                                        <p>
                                            Multiple File Upload
                                        </p></a>

                                    </li>
                                    <li><a href="dropzone-file-upload.html">
                                        <div className="notifications label label-warning">
                                            New
                                        </div>
                                        <p>
                                            Dropzone File Upload
                                        </p></a>

                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown"><a data-toggle="dropdown" className="current" href="#">
                                <span aria-hidden="true" className="se7en-tables" />Tables<b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="tables.html">Basic tables</a>
                                    </li>
                                    <li>
                                        <a href="datatables.html">DataTables</a>
                                    </li>
                                    <li><a className="current" href="datatables-editable.html">
                                        <div className="notifications label label-warning">
                                            New
                                        </div>
                                        <p>
                                            Editable DataTables
                                        </p></a>

                                    </li>
                                </ul>
                            </li>
                            <li><a href="charts.html">
                                <span aria-hidden="true" className="se7en-charts" />Charts</a>
                            </li>
                            <li className="dropdown"><a data-toggle="dropdown" href="#">
                                <span aria-hidden="true" className="se7en-pages" />Pages<b className="caret" /></a>
                                <ul className="dropdown-menu">
                                    <li><a href="chat.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Chat
                                        </p></a>

                                    </li>
                                    <li>
                                        <a href="calendar.html">Calendar</a>
                                    </li>
                                    <li><a href="timeline.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Timeline
                                        </p></a>

                                    </li>
                                    <li><a href="login1.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Login 1
                                        </p></a>

                                    </li>
                                    <li>
                                        <a href="login2.html">Login 2</a>
                                    </li>
                                    <li><a href="signup1.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Sign Up 1
                                        </p></a>

                                    </li>
                                    <li><a href="messages.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Messages/Inbox
                                        </p></a>

                                    </li>
                                    <li><a href="pricing.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Pricing Tables
                                        </p></a>

                                    </li>
                                    <li>
                                        <a href="signup2.html">Sign Up 2</a>
                                    </li>
                                    <li><a href="invoice.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            Invoice
                                        </p></a>

                                    </li>
                                    <li><a href="faq.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            FAQ
                                        </p></a>

                                    </li>
                                    <li>
                                        <a href="filters.html">Filter Results</a>
                                    </li>
                                    <li>
                                        <a href="404-page.html">404 Page</a>
                                    </li>
                                    <li><a href="500-page.html">
                                        <span className="notifications label label-warning">New</span>
                                        <p>
                                            500 Error
                                        </p></a>

                                    </li>
                                </ul>
                            </li>
                            <li><a href="gallery.html">
                                <span aria-hidden="true" className="se7en-gallery" />Gallery</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
