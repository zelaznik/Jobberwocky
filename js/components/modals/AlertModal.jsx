import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import AlertActions from '../../actions/AlertActions.jsx';

var AlertModal = React.createClass({
    close() {
        AlertActions.clear();
    },

    open() {
        AlertActions.display();
    },

    _renderedMessages() {
        return this.props.alerts.messages.map((msg, key) => (
            <div key={key}>
                <h3><strong>{msg.content.status}</strong>: {msg.content.statusText}</h3>
                <p>{msg.content.responseText}</p>​
            </div>
        ));
    },

    render() {
        return (
            <Modal show={ this.props.alerts.displayStatus } >
                <Modal.Header closeButton onClick={this.close} >
                    <Modal.Title>Error:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    {this._renderedMessages()}
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default AlertModal;