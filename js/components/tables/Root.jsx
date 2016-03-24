import React from 'react';

class Cell extends React.Component {
    render() {
        return (<td>{this.props.value}</td>)
    }
}

class Header extends React.Component {
    render() {
        return (<th>{this.props.value}</th>)
    }
}

class Row extends React.Component {
    render() {
        return (
            <tr>
                {this.props.values.map((v,k) => {
                    return <Cell value={v} key={k}/>;
                })}
                <td><a className="edit-row" href="">Edit</a></td>
                <td><a className="delete-row" href="">Delete</a></td>
            </tr>
        )
    }
}

class Table extends React.Component {
    addRow() {
        return (
            <a className="btn btn-sm btn-primary-outline pull-right" href="#" id="add-row">
                <i className="fa fa-plus" />Add row
            </a>
        );
    }

    head() {
        return (
            <thead>
                <tr>
                    {this.props.fields.map((field,i) => {
                        return <Header value={field} key={i} />
                    })}
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

}

export default Table;