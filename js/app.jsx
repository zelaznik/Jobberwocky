import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from './components/navbar/Combined.jsx';
import MainContent from './components/MainContent.jsx';

class App extends React.Component {
   render() {
      return (
          <div className="modal-shiftfix">
             <NavBar />
             <MainContent />
          </div>
      );
   }
}

document.addEventListener("DOMContentLoaded", () => {
   var body = document.getElementsByTagName('body')[0];
   var main = document.getElementById('main');
   ReactDOM.render(<App />, main);
});