import { EventEmitter } from 'events';
import assign from 'object-assign';
const CHANGE_EVENT = 'change';

import NavBarStore from './NavBarStore.jsx';
import TableStore from './TableStore.jsx';

var UniversalStore = assign({}, EventEmitter.prototype, {
    data: function() {
        return {
            navbar: NavBarStore.data(),
            table: TableStore.data()
        };
    },

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

function emitUniversal() {
    UniversalStore.emitChange();
}

 TableStore.addChangeListener(emitUniversal);
NavBarStore.addChangeListener(emitUniversal);

export default UniversalStore;