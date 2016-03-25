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

class Header extends React.Component {
    render() {
        return (<th>{this.props.value}</th>)
    }
}

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
        this.cancel();
    },

    edit() {
        this.setState({editMode: true});
    },

    destroy() {
        TableActions.destroy(
            this.props.values.id
        );
        this.cancel();
    },

    cancel() {
        this.setState({pendingChanges: {}, editMode: false});
    }

});

var Table = React.createClass({
    addRow() {
        return (
            <a className="btn btn-sm btn-primary-outline pull-right" id="add-row">
                <i className="fa fa-plus" />Add row
            </a>
        );
    },

    head() {
        return (
            <thead>
                <tr>
                    {this.props.fields.map((field,i) => {
                        return <Header value={this.props.headers[field]} key={i} />
                    })}
                    <th width="60" />
                    <th width="75" />
                </tr>
            </thead>
        );
    },

    body() {
        return (
            <tbody>
                {this.props.records.map((row, key) => (
                    <Row values={row} key={row.id} fields={this.props.fields} />
                ))}
            </tbody>
        );
    },

    render() {
        return (
            <div className="widget-container fluid-height clearfix">
                <div className="heading">
                    <i className="fa fa-table" />DataTable with Sorting
                    { this.addRow() }
                </div>
                <div className="widget-content padded clearfix">
                    <table className="table table-bordered table-striped" id="datatable-editable">
                        { this.head() }
                        { this.body() }
                    </table>
                </div>
            </div>
        );
    }

});

export default Table;