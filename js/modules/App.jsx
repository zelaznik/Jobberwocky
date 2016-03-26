import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './../components/navbar/NavBar.jsx';
import routes from './../routes.jsx';

const App = React.createClass({
   render() {
      return (
          <div className="modal-shiftfix">
             <NavBar routes={routes} />
              {this.props.children}
          </div>
      );
   }
});

export default App;