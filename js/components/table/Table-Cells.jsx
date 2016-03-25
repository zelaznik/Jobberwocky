import React from 'react';
import TableStore from '../../stores/UniversalStore.jsx';
import TableActions from '../../actions/TableActions.jsx';

var Cell = React.createClass({
    getInitialState() {
        return {};
    },

    render() {
        if (this.props.editMode) {
            return (
                <td>
                    <input type="text" defaultValue={this.props.value} onChange={this.onChange} />
                </td>
            );
        } else {
            return (<td>{this.props.value}</td>);
        }
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