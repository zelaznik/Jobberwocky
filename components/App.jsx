import React from 'react';
import NavBar from './navbar/Root.jsx';
import MainContent from './MainContent.jsx';

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

export default App;
