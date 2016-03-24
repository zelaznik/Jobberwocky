import React from 'react';

class Cell extends React.Component {
    render() {
        return (
            <td>{this.props.value}</td>
        )
    }
}

class Row extends React.Component {
    render() {
        return (
            <tr>
                {this.props.values.map( (v,k) => <Cell value={v} key={k} /> )}
                <td><a className="edit-row" href="">Edit</a></td>
                <td><a className="delete-row" href="">Delete</a></td>
            </tr>
        )
    }
}

class Table extends React.Component {
    render() {
        return (
            <div className="widget-container fluid-height clearfix">
                <div className="heading">
                    <i className="fa fa-table"></i>DataTable with Sorting<a className="btn btn-sm btn-primary-outline pull-right" href="#" id="add-row"><i className="fa fa-plus"></i>Add row</a>
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

    head() {
        return (
            <thead>
                <tr>
                    {this.props.fields.map((f, key) => <th key={key}>{f}</th>)}
                    <th width="60" />
                    <th width="75" />
                </tr>
            </thead>
        );
    }

    body() {
        return (
            <tbody>
                {this.props.data.map((row, key) => <Row values={row} key={key} />)}
            </tbody>
        );
    }
}

export default Table;