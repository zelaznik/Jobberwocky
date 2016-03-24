import React from 'react';
import Table from './tables/Root.jsx';

var columns = [
    'First Name','Last Name','Email','Date Added','Status'
];
var data = [
    ['Robert','Kelso','robert@gmail.com','8-15-2013','Approved'],
    ['John','Dorian','john@gmail.com','2-6-1984','Rejected']
];

class MainContent extends React.Component {
    render() {
        return (
            <div className="container-fluid main-content">
                <div className="page-title">
                    <h1>
                        Editable DataTables
                    </h1>
                </div>

                {/* DataTables Example */}
                <div className="row">
                    <div className="col-lg-12">
                        <Table fields={columns} data={data} />
                    </div>
                </div>
                {/* end DataTables Example */}
            </div>
        );
    }
}

export default MainContent;