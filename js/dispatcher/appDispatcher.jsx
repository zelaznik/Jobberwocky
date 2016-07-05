import { Dispatcher } from 'flux';
import singleton from '../utils/singleton.jsx';

class DispatcherType extends singleton(Dispatcher) {
    dispatch(payload) {
        if (payload.actionType == undefined)
            throw new Error("Cannot dispatch undefined actionType.");
        super.dispatch(...arguments);
    }
    delayedDispatch(payload, dt=0) {
        setTimeout(() => this.dispatch(payload), dt);
    }
}

var AppDispatcher = new DispatcherType();

export default AppDispatcher;