import React from 'react';
import NavBarTop from './NavBarTop.jsx';
import NavBarMain from './NavBarMain.jsx';

var Span = React.createClass({
   render: function() {
       return React.createElement('span', this.props, this.props.text);
   }
});

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-fixed-top scroll-hide">
                <NavBarTop />
                <NavBarMain />
            </div>
        );
    }
}

export default NavBar;
