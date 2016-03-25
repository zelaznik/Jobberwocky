import React from 'react';
import TableStore from '../../stores/UniversalStore.jsx';
import TableActions from '../../actions/TableActions.jsx';

import { Header } from './Table-Cells.jsx';
import Row from './Table-Row.jsx';

var AddRow = React.createClass({
    render() {
       return (
           <a className="btn btn-sm btn-primary-outline pull-right" id="add-row" onClick={this.onClick}>
               <i className="fa fa-plus" />Add row
           </a>
       );
    },

    onClick() {
        alert("HELLO");
    }
});

var Table = React.createClass({
    addRow() {
        return (<AddRow />);
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