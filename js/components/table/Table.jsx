import React from 'react';

import TableActions from '../../actions/TableActions.jsx';
import TableStore from '../../stores/TableStore.jsx';

import { Header } from './Table-Cells.jsx';
import { Row, NewRow } from './Table-Rows.jsx';

var AjaxCall = React.createClass({
    render() {
        return (
            <a className="btn btn-sm btn-primary-outline pull-right" id="ajax-call" onClick={ this.props.onClick } >
                <i className="fa fa-plus" />AJAX Call
            </a>
        );
    }
});

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
        return {newMode: false}
    },

    componentWillMount() {
        TableActions.fetch();
    },

    showNewRow() {
        this.setState({newMode: true});
    },

    hideNewRow() {
        this.setState({newMode: false});
    },

    createRow() {
        TableActions.create()
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
                    />
                ))}
            </tbody>
        );
    },

    optionalNewRecord() {
        if (this.state.newMode) {
            var key = TableStore.tempID();
            return <NewRow key={key} values={{}}
                           fields={this.props.fields}
                           immutable = { this.props.immutable}
                           cancelFcn = { this.hideNewRow }
                    />
        }
    },

    render() {
        return (
            <div className="widget-container fluid-height clearfix">
                <div className="heading">
                    <i className="fa fa-table" />DataTable with Sorting
                    <AddRow   key='0' onClick={ this.showNewRow } />
                    <AjaxCall key='1' onClick={TableActions.fetch}
                                    style={{'margin-right': '20px'}}
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