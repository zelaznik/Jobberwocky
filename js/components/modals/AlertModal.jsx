var React = require('react');
import { Button, Modal } from 'react-bootstrap';
import assign from 'object-assign';

import { DISPLAY, HIDE } from '../../constants/EventConstants.jsx';
import AlertStore from '../../stores/AlertStore.jsx';
import AlertActions from '../../actions/AlertActions.jsx';

var AlertModal = React.createClass({
    close() {
        AlertActions.hide();
    },

    open() {
        AlertActions.display();
    },

    updateState(args) {
        this.setState(assign({}, this.state, args));
    },

    refresh() {
        this.setState(this.getInitialState());
    },

    render() {
        return (
            <Modal show={ this.props.alerts.displayStatus } >
                <Modal.Header closeButton onClick={this.close} >
                    <Modal.Title>Error:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <h3><strong>422</strong>: Unprocessable Entity</h3>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>​
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
});

export default AlertModal;