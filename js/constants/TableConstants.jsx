import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const TableConstants = uniqueKeySet({
    NEW:     null,
    CREATE:  null,
    UPDATE:  null,
    DESTROY: null,

    FETCH: null,
    FETCH_SUCCESS: null,
    FETCH_ERROR: null
});

export default TableConstants;
