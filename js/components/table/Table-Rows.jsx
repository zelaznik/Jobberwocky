import React from 'react';
var ReactDOM = require('react-dom');

import TableActions from '../../actions/TableActions.jsx';
import { Action, Cell } from './Table-Cells.jsx';
import KeyCodes from '../../constants/keycodes.jsx'

var BaseRow = {
    render() {
        return (
            <tr>
                { this.values() }
                { this.actionItems() }
            </tr>
        );
    },

    values() {
        return this.props.fields.map((field, i) => (
            <Cell row={this} field={field} key={i}
                  value={this.props.values[field]}
                  editMode={ this.state.editMode }
                  onDoubleClick = { this.edit }
                  immutable={this.props.immutable[field]}
            />
        ));
    },

    registerPendingChange(key, value) {
        this.state.pendingChanges[key] = value;
    },

    wasModified() {
        var pending = this.state.pendingChanges;
        for (var field in pending) {
            var newVal = pending[field];
            var oldVal = this.props.values[field];
            if (newVal !== oldVal) {
                return true;
            }
        }
        return false;
    },

    create() {
        if (this.wasModified()) {
          TableActions.create(
              this.state.pendingChanges
          )
        }
        this.setState(  this.getInitialState  );
    },

    update() {
        if (this.wasModified()) {
            TableActions.update(
                this.props.values.id,
                this.state.pendingChanges
            );
        }
        this.setState( this.getInitialState() );
    },

    edit() {
        this.setState({editMode: true});
    },

    destroy() {
        TableActions.destroy(
            this.props.values.id
        );
        this.setState( this.getInitialState() );
    },

    componentDidMount() {
        document.addEventListener('dblclick', this._OutsideDoubleClick, false);
        document.addEventListener('keydown', this._handleKeyDown, false);
    },

    componentWillUnmount() {
        document.removeEventListener('dblclick', this._OutsideDoubleClick, false);
        document.removeEventListener('keydown', this._handleKeyDown, false);
    },

    _OutsideDoubleClick(e) {
        var inside = (ReactDOM.findDOMNode(this).contains(e.target));
        if (!inside) {
            this.setState( this.getInitialState() );
        }
    },

    _handleKeyDown(e) {
        switch(e.keyCode) {
            case KeyCodes.ESCAPE:
                this._handleEscape(e);
                break;

            case KeyCodes.ENTER:
                this._handleEnter(e);
                break;
        }
    }
};

var Row = React.createClass({
    mixins: [BaseRow],

    getInitialState() {
        return {
            pendingChanges: {},
            editMode: false
        };
    },

    actionItems() {
        if ( this.state.editMode ) {
            return [
                <Action key='0' label="Save" onClick={ this.update } />,
                <Action key='1' label="Cancel" onClick={ this.cancel } />
            ];
        } else {
            return [
                <Action key='0' label="Edit" onClick={this.edit} />,
                <Action key='1' label="Delete" onClick={this.destroy} />
            ];
        }
    },

    cancel() {
        this.setState( this.getInitialState() );
    },

    _handleEscape(e) {
        this.setState({editMode: false});
    },

    _handleEnter(e) {
        this.update();
    }

});

var NewRow = React.createClass({
    mixins: [BaseRow],

    getInitialState() {
        return {
            pendingChanges: {},
            editMode: true
        };
    },

    actionItems() {
        return [
            <Action key='0' label="Add" onClick={this.create} />,
            <Action key='1' label="Cancel" onClick={this.cancel} />
        ];
    },

    cancel() {
        this.props.cancelFcn();
    },

    _handleEscape(e) {
        this.cancel();
    },

    _handleEnter(e) {
        this.create();
    }

});

export { Row, NewRow };