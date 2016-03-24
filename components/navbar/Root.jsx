import React from 'react';
import NavBarTop from './Top.jsx';
import NavBarMain from './Main.jsx';

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
                <NavBarMain items={this.props.items} />
            </div>
        );
    }
}

export default NavBar;
