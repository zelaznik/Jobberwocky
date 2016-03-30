import AppDispatcher from '../dispatcher/AppDispatcher.jsx';
import TableConstants from '../constants/TableConstants.jsx';
import { EventEmitter } from 'events';
import assign from 'object-assign';

import deepCopy from '../utils/deepCopy';
import getValues from '../utils/getValues';
import { Sequence, SequenceProxy } from '../utils/sequence.js';

import { CHANGE_EVENT } from '../constants/EventConstants.jsx';

class BaseStore extends EventEmitter {
    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
}

export default BaseStore;