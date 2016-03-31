import React from 'react';
import NavBarTop from './top/Top.jsx';
import NavBarMain from './main/Main.jsx';
import NavBarStore from '../../stores/NavBarStore.jsx';

var NavBar = React.createClass({
    getInitialState() {
        return {
            data: NavBarStore.data()
        };
    },

    componentDidMount() {
        NavBarStore.addChangeListener(this.refresh);
    },

    componentWillUnmount() {
        NavBarStore.removeChangeListener(this.refresh);
    },

    render() {
        return (
            <div className="navbar navbar-fixed-top scroll-hide">
                <NavBarTop data={this.state.data} />
                <NavBarMain routes={this.props.routes} />
            </div>
        );
    },

    refresh() {
        this.setState({data: NavBarStore.data()});
    }
});



export default NavBar;
