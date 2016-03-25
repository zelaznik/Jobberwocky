import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import TableConstants from '../constants/TableConstants.jsx';
    
const TableActions = Object.freeze({
    create(params) {
        AppDispatcher.dispatch({
            actionType: TableConstants.CREATE,
            params: params
        });
    },
    update(id, params) {
        AppDispatcher.dispatch({
            actionType: TableConstants.UPDATE,
            params: params,
            id: id
        });
    },
    destroy(id) {
        AppDispatcher.dispatch({
            actionType: TableConstants.DESTROY,
            id: id
        });
    }
});

export default TableActions;