import React from 'react';
import NavBarTop from './Top.jsx';
import NavBarMain from './Main.jsx';

var data = {
    notifications: [
        {message: 'New user added: Jane Smith', new: true},
        {message: 'Sales Targets Available'},
        {message: 'New performance Metrics Added', new: true},
        {message: 'Growth data available'}
    ],
    messages: [
        {body: 'Could we meet today? I wanted...', img: 'avatar-male2.png'},
        {body: 'Important data needs your analysis...', img: 'avatar-female.png'},
        {body: "Buy Se7en today, it's a great theme...", img: 'avatar-male2.png'},
        {body: 'I just won the lottery...', img: 'avatar-female.png'},
    ]
};

class NavBar extends React.Component {
    render() {
        return (
            <div className="navbar navbar-fixed-top scroll-hide">
                <NavBarTop data={data} />
                <NavBarMain items={this.props.items} />
            </div>
        );
    }
}

export default NavBar;
