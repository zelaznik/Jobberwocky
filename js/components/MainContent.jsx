import React from 'react';
import Table from './table/Table.jsx';

var MainContent = React.createClass({
    render() {
        console.log(this.props.table);
        return (
            <div className="container-fluid main-content">
                <div className="page-title">
                    <h1>
                        Editable DataTables
                    </h1>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <Table headers = {this.props.table.headers}
                               fields  = {this.props.table.fields}
                               records = {this.props.table.records} />
                    </div>
                </div>
            </div>
        );
    }
});

export default MainContent;