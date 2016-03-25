import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar/NavBar.jsx';
import MainContent from './components/MainContent.jsx';
import UniversalStore from './stores/UniversalStore.jsx';
import routes from './routes.jsx';

var App = React.createClass({
    getInitialState() {
        return UniversalStore.data();
    },

   render() {
      return (
          <div className="modal-shiftfix">
             <NavBar routes={routes} />
             <MainContent table={this.state.table} />
          </div>
      );
   },

    componentDidMount() {
        UniversalStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        UniversalStore.removeChangeListener(this._onChange);
    },

    _newState() {

    },

    _onChange() {
        this.setState( this.getInitialState() );
    }

});

document.addEventListener("DOMContentLoaded", () => {
   var body = document.getElementsByTagName('body')[0];
   var main = document.getElementById('main');
   ReactDOM.render(<App />, main);
});