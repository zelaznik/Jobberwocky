import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const TableConstants = uniqueKeySet({
    NEW:     null,
    CREATE:  null,
    UPDATE:  null,
    DESTROY: null,

    SEND_INDEX: null,
    RECEIVE_INDEX: null
});

export default TableConstants;
