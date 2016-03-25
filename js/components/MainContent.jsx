import React from 'react';
import Table from './table/Table.jsx';

var MainContent = React.createClass({
    render() {
        return (
            <div className="container-fluid main-content">
                <div className="page-title">
                    <h1>
                        Editable DataTables
                    </h1>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <Table headers   = {this.props.table.headers}
                               fields    = {this.props.table.fields}
                               records   = {this.props.table.records}
                               immutable = {this.props.table.immutable}
                        />
                    </div>
                </div>
            </div>
        );
    }
});

export default MainContent;