import React from 'react';
import NavBar from './../components/navbar/NavBar.jsx';
import SessionStore from '../stores/SessionStore.jsx';
import routes from '../routes.jsx';

const App = React.createClass({
    getInitialState() {
        return {
            loggedIn: SessionStore.loggedIn()
        };
    },
    render() {
        return (
            <div className="modal-shiftfix">
                <NavBar routes={routes} />
                <h1>Logged In:{` ${this.state.loggedIn}`}</h1>
                {this.props.children}
            </div>
        );
    },
    componentDidMount() {
        SessionStore.addChangeListener(this.getNewSession);
    },
    componentWillUnmount() {
        SessionStore.removeChangeListener(this.getNewSession);
    },
    getNewSession() {
        alert("NEW SESSION DATA");
        this.setState({session: SessionStore.data() });
    }
});

export default App;