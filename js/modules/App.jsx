import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './../components/navbar/NavBar.jsx';
import MainContent from './../components/MainContent.jsx';
import UniversalStore from './../stores/UniversalStore.jsx';
import routes from './../routes.jsx';

const App = React.createClass({
    getInitialState() {
        return UniversalStore.data();
    },

   render() {
      return (
          <div className="modal-shiftfix">
             <NavBar routes={routes} />
              {this.props.children}
          </div>
      );
   },

    componentDidMount() {
        UniversalStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        UniversalStore.removeChangeListener(this._onChange);
    },

    _onChange() {
        this.setState( this.getInitialState() );
    }
});

export default App;