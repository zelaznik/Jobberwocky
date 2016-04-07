import Store from './_templates/Store.jsx';
import SessionStore from './SessionStore.jsx';
import deepCopy from '../utils/deepCopy.jsx';

var _navBarData = {
    notifications: [
        {message: 'New user added: Jane Smith', new: true},
        {message: 'Sales Targets Available'},
        {message: 'New performance Metrics Added', new: true},
        {message: 'Growth data available'}
    ],
    messages: [
        {body: 'Could we meet today? I wanted...', img: 'avatar-male2.png'},
        {body: 'Important data needs your analysis...', img: 'avatar-female.png'},
        {body: "Buy Se7en today, it's a great theme...", img: 'avatar-male2.png'},
        {body: 'I just won the lottery...', img: 'avatar-female.png'}
    ]
};

var NavBarStore = new Store({
    data() {
        var data = deepCopy(_navBarData);
        data.user = {
            email: SessionStore.data().email
        };
        return data;
    }
});

SessionStore.addChangeListener( ()=> {
    NavBarStore.emitChange()
});


export default NavBarStore;
