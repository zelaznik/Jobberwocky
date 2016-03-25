import React from 'react';
import ReactDOM from 'react-dom';

import TableActions from '../../actions/TableActions.jsx';
import { Action, Cell } from './Table-Cells.jsx';
import KeyCodes from '../../constants/keycodes.jsx'

var Row = React.createClass({
    getInitialState() {
        return {pendingChanges: {}, editMode: false};
    },

    render() {
        return (
            <tr>
                { this.values() }
                { this.actionItems() }
            </tr>
        )
    },

    values() {
        return this.props.fields.map((field, i) => (
            <Cell row={this} field={field} value={this.props.values[field]}
                  key={i} editMode={ this.state.editMode } />
        ));
    },

    actionItems() {
        if ( this.state.editMode ) {
            return [
                <Action key='0' label="Save" onClick={this.save}/>,
                <Action key='1' label="Cancel" onClick={this.cancel}/>
            ];
        } else {
            return [
                <Action key='0' label="Edit" onClick={this.edit}/>,
                <Action key='1' label="Delete" onClick={this.destroy}/>
            ];
        }
    },

    registerPendingChange(key, value) {
        console.log(`key: ${key}, value: ${value}`);
        this.state.pendingChanges[key] = value;
    },

    save() {
        TableActions.update(
            this.props.values.id,
            this.state.pendingChanges
        );
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

    cancel() {
        this.setState( this.getInitialState() );
    },

    componentWillMount: function() {
        document.addEventListener('click', this._handleClick, false);
        document.addEventListener('keydown', this._handleKeyDown, false);
        document.addEventListener('doubleClick', this._handleDoubleClick, false);
    },

    componentWillUnmount: function() {
        document.removeEventListener('click', this._handleClick, false);
        document.removeEventListener('keydown', this._handleKeyDown, false);
        document.removeEventListener('doubleClick', this._handleDoubleClick, false);
    },

    _handleDoubleClick: function(e) {
        alert("Hello");
    },

    _handleClick: function(e) {
        var inside = (ReactDOM.findDOMNode(this).contains(e.target));
        if (!inside) {
            this.setState({editMode: false});
        }
    },

    _handleKeyDown: function(e) {
        switch(e.keyCode) {
            case KeyCodes.ESCAPE:
                this.setState({editMode: false});
                break;

            case KeyCodes.ENTER:
                this.save();
                break;
        }
    }

});

export default Row;