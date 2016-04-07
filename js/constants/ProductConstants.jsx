import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const TableConstants = uniqueKeySet('Products', {
    NEW: null,
    EDIT: null,

    CREATE:  null,
    CREATE_SUCCESS: null,
    CREATE_ERROR: null,

    FETCH: null,
    FETCH_SUCCESS: null,
    FETCH_ERROR: null,

    UPDATE:  null,
    UPDATE_SUCCESS: null,
    UPDATE_ERROR: null,

    DESTROY: null,
    DESTROY_SUCCESS: null,
    DESTROY_ERROR: null

});

export default TableConstants;
