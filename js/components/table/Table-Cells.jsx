import React from 'react';
import TableStore from '../../stores/UniversalStore.jsx';
import TableActions from '../../actions/TableActions.jsx';

var Cell = React.createClass({
    render() {
        if ( this.props.editMode && !this.props.immutable )
            return this._editView();
        else
            return this._standardView();
    },

    _editView() {
        return (
            <td>
                <input type="text"
                       defaultValue={this.props.value}
                       onChange={this.onChange}
                       disabled={this.props.immutable} />
            </td>
        );
    },

    _standardView() {
        return (
            <td onDoubleClick={ this.props.onDoubleClick } >
                {this.props.value}
            </td>
        );
    },


    edit() {
        this.setState({editMode: true});
    },

    onChange(e) {
        this.props.row.registerPendingChange(
            this.props.field, e.target.value
        );
    }

});

var Header = React.createClass({
    render() {
        return (<th>{this.props.value}</th>)
    }
});

var Action = React.createClass({
    /* Created For Editing, Saving, Deleting, and Cancelling */
    render() {
        return (
            <td onClick={this.props.onClick}>
                <a className="edit-row">
                    { this.props.label }
                </a>
            </td>
        );
    }
});

export { Header, Action, Cell }