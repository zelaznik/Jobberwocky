import React from 'react';
import { Header } from './Table-Cells.jsx';
import { Row, NewRow } from './Table-Rows.jsx';

var AddRow = React.createClass({
    render() {
       return (
           <a className="btn btn-sm btn-primary-outline pull-right" id="add-row" onClick={ this.props.onClick } >
               <i className="fa fa-plus" />Add row
           </a>
       );
    }
});

var Table = React.createClass({
    getInitialState() {
        return { newMode: false}
    },

    componentWillMount() {
        this.props.actions.fetch();
    },

    showNewRow() {
        this.setState({newMode: true});
    },

    hideNewRow() {
        this.setState({newMode: false});
    },

    createRow() {
        this.props.actions.create()
    },

    head() {
        return (
            <thead>
                <tr>
                    {this.props.fields.map( (field, i) => (
                        <Header value={this.props.headers[field]} key={i} />
                    ))}
                    <th width="60" />
                    <th width="75" />
                </tr>
            </thead>
        );
    },

    body() {
        return (
            <tbody>
                { this.optionalNewRecord() }
                {this.props.records.map((mapper, key) => (
                    <Row key={ key }
                         values={ mapper.toJSON() }
                         fields={ this.props.fields }
                         immutable={ this.props.immutable }
                         actions={this.props.actions}
                    />
                ))}
            </tbody>
        );
    },

    optionalNewRecord() {
        if (this.state.newMode) {
            var key = this.props.store.tempID();
            return <NewRow key={key}
                           tempID={key}
                           values={{}}
                           fields={this.props.fields}
                           immutable = { this.props.immutable}
                           cancelFcn = { this.hideNewRow }
                           actions = { this.props.actions }
                    />
        }
    },

    render() {
        return (
            <div className="widget-container fluid-height clearfix">
                <div className="heading">
                    <i className="fa fa-table" />DataTable with Sorting
                    <AddRow   key='0'
                              onClick={ this.showNewRow }
                              actions={ this.props.actions }
                    />
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