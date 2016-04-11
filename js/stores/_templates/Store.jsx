import { EventEmitter } from 'events';
import assign from 'object-assign';

import { CHANGE_EVENT } from '../../constants/EventConstants.jsx';

var StorePrototype = assign({}, EventEmitter.prototype, {
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

function Store(props) {
    assign(this, StorePrototype, props);
}

export default Store;