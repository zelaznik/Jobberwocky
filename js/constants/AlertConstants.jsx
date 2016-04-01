import uniqueKeySet from '../utils/uniqueKeySet.jsx';

const AlertConstants = uniqueKeySet({
    SUCCESS: null,
    WARNING: null,
    INFO: null,
    DANGER: null,

    DISPLAY: null,
    HIDE: null,
    CLEAR: null
});

export default AlertConstants;