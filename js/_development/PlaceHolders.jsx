import React from 'react';

class PlaceHolder extends React.Component {
    render() { return (<h1><center>{this.constructor.name}</center></h1>); }
}

class Home extends PlaceHolder {}
class Users extends PlaceHolder {}
class Charts extends PlaceHolder {}
class Gallery extends PlaceHolder {}

export { PlaceHolder, Home, Users, Charts, Gallery };