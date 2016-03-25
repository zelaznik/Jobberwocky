import ReactDOM from 'react-dom';
import KeyCodes from '../../constants/keycodes.jsx';

const CurrentObjectMixin = Object.freeze({

    getInitialState: function() {
        return {current: false};
    },

    _clsOpen: function() {
        return this.state.current ? 'open' : '';
    },

    _clsCurrent: function() {
        return this.state.current ? 'current' : '';
    },

    componentWillMount: function() {
        document.addEventListener('click', this._handleClick, false);
        document.addEventListener('keydown', this._handleEscape, false);
    },

    componentWillUnmount: function() {
        document.removeEventListener('click', this._handleClick, false);
        document.removeEventListener('keydown', this._handleEscape, false);
    },

    _handleClick: function(e) {
        if (ReactDOM.findDOMNode(this).contains(e.target)) {
            this.setState({current: !this.state.current})
        } else {
            this.setState({current: false})
        }
    },

    _handleEscape: function(e) {
        switch(e.keyCode) {
            case KeyCodes.ESCAPE:
                this.setState({current: false});
                break;
        }
    }
});

export default CurrentObjectMixin;