import { EventEmitter } from 'events';
import assign from 'object-assign';
import { CHANGE_EVENT } from '../../constants/EventConstants.jsx';

class Store extends EventEmitter {
    constructor(props) {
        super();
        assign(this, props);
    }

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

export default Store;