import React from 'react';

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
                        <div className="widget-container fluid-height clearfix">
                            <div className="heading">
                                <i className="fa fa-table"></i>DataTable with Sorting<a className="btn btn-sm btn-primary-outline pull-right" href="#" id="add-row"><i className="fa fa-plus"></i>Add row</a>
                            </div>
                            <div className="widget-content padded clearfix">
                                <table className="table table-bordered table-striped" id="datatable-editable">
                                    <thead>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                    </th>
                                    <th className="hidden-xs">
                                        Email
                                    </th>
                                    <th className="hidden-xs">
                                        Date Added
                                    </th>
                                    <th className="hidden-xs">
                                        Status
                                    </th>
                                    <th width="60"></th>
                                    <th width="75"></th>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>
                                            Robert
                                        </td>
                                        <td>
                                            Kelso
                                        </td>
                                        <td className="hidden-xs">
                                            robert@gmail.com
                                        </td>
                                        <td className="hidden-xs">
                                            8-15-2013
                                        </td>
                                        <td className="hidden-xs">
                                            Approved
                                        </td>
                                        <td>
                                            <a className="edit-row" href="">Edit</a>
                                        </td>
                                        <td>
                                            <a className="delete-row" href="">Delete</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            John
                                        </td>
                                        <td>
                                            Dorian
                                        </td>
                                        <td className="hidden-xs">
                                            john@gmail.com
                                        </td>
                                        <td className="hidden-xs">
                                            8-15-2013
                                        </td>
                                        <td className="hidden-xs">
                                            Approved
                                        </td>
                                        <td>
                                            <a className="edit-row" href="">Edit</a>
                                        </td>
                                        <td>
                                            <a className="delete-row" href="">Delete</a>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end DataTables Example */}
            </div>
        );
    }
}

export default MainContent;