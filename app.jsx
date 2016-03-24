import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

document.addEventListener("DOMContentLoaded", () => {
   var body = document.getElementsByTagName('body')[0];
   var main = document.getElementById('main');
   ReactDOM.render(<App />, main);
});