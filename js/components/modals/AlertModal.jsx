import React from 'react';
var ReactDOM = require('react-dom');
import { Button, Modal, closeButton } from 'react-bootstrap';

import AlertActions from '../../actions/AlertActions.jsx';
import KeyCodes from '../../constants/keycodes.jsx';

var AlertModal = React.createClass({
    close() {
        AlertActions.clear();
    },

    open() {
        AlertActions.display();
    },

    visible() {
        return this.props.alerts.displayStatus;
    },

    render() {
        var renderedMessages = this.props.alerts.messages.map((msg, key) => (
            <div key={key}>
                <h3><strong>{msg.content.status}</strong>: {msg.content.statusText}</h3>
                <p>{msg.content.responseText}</p>​
            </div>
        ));

        return (
            <Modal show={this.visible()}  onKeyDown={this._handleKeyDown} >
                <Modal.Header closeButton
                              onClick={this.close}
                              onMouseDown={this._handleMouseDown}
                              onMouseUp={this._handleMouseUp} >
                    <Modal.Title>Error:</Modal.Title>
                </Modal.Header>

                <Modal.Body onMouseDown={this._handleMouseDown}
                            onMouseUp={this._handleMouseUp} >
                    { renderedMessages }
                </Modal.Body>

                <Modal.Footer onMouseDown={this._handleMouseDown}
                              onMouseUp={this._handleMouseUp} >
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    },

    componentDidMount() {
        document.addEventListener('click', this._handlePageClick);
    },

    componentWillUnmount() {
        document.removeEventListener('click', this._handlePageClick);
    },

    _handlePageClick(e) {
        var wasDown = this.mouseDownOnModal;
        var wasUp = this.mouseUpOnModal;
        this.mouseDownOnModal = false;
        this.mouseUpOnModal = false;
        if (!wasDown && !wasUp)
            this.close();
    },

    _handleMouseDown() {
        this.mouseDownOnModal = true;
    },

    _handleMouseUp() {
        this.mouseUpOnModal = true;
    },

    _handleKeyDown(e) {
        switch(e.keyCode) {
            case KeyCodes.ESCAPE:
                this.close();
                break;

            case KeyCodes.ENTER:
                if (!this.intersectsWith(e))
                    this.close();
                break;
        }
    }

});

export default AlertModal;