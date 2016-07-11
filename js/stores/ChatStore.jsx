import AppDispatcher from '../dispatcher/appDispatcher.jsx';
import ChatConstants from '../constants/ChatConstants.jsx';
import Store from './_templates/Store.jsx';
var Immutable = require('immutable');

var contactList = Object.freeze(
    Immutable.List([
        {
            "id": 618,
            "email": "melike.özkara@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/56.jpg",
            "name": "melike özkara"
        },
        {
            "id": 619,
            "email": "celina.barros@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/6.jpg",
            "name": "celina barros"
        },
        {
            "id": 620,
            "email": "aïda.zalm@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/7.jpg",
            "name": "aïda zalm"
        },
        {
            "id": 621,
            "email": "حسین.احمدی@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/54.jpg",
            "name": "حسین احمدی"
        },
        {
            "id": 622,
            "email": "gonca.yazıcı@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/35.jpg",
            "name": "gonca yazıcı"
        },
        {
            "id": 623,
            "email": "çetin.tekand@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/96.jpg",
            "name": "çetin tekand"
        },
        {
            "id": 624,
            "email": "marilou.ambrose@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/81.jpg",
            "name": "marilou ambrose"
        },
        {
            "id": 625,
            "email": "tristan.harvey@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/50.jpg",
            "name": "tristan harvey"
        },
        {
            "id": 626,
            "email": "charlene.wells@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/37.jpg",
            "name": "charlene wells"
        },
        {
            "id": 627,
            "email": "berilo.fogaça@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/83.jpg",
            "name": "berilo fogaça"
        },
        {
            "id": 628,
            "email": "ken.castro@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/90.jpg",
            "name": "ken castro"
        },
        {
            "id": 629,
            "email": "joris.marchand@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/69.jpg",
            "name": "joris marchand"
        },
        {
            "id": 630,
            "email": "vedat.yetkiner@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/20.jpg",
            "name": "vedat yetkiner"
        },
        {
            "id": 631,
            "email": "lotta.mattila@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/85.jpg",
            "name": "lotta mattila"
        },
        {
            "id": 632,
            "email": "norah.lemaire@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/45.jpg",
            "name": "norah lemaire"
        },
        {
            "id": 633,
            "email": "cathy.richardson@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/23.jpg",
            "name": "cathy richardson"
        },
        {
            "id": 634,
            "email": "ayla.thomas@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/66.jpg",
            "name": "ayla thomas"
        },
        {
            "id": 635,
            "email": "abby.nelson@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/42.jpg",
            "name": "abby nelson"
        },
        {
            "id": 636,
            "email": "nick.green@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/men/27.jpg",
            "name": "nick green"
        },
        {
            "id": 637,
            "email": "kelya.renaud@jobberwocky.net",
            "image": "https://randomuser.me/api/portraits/thumb/women/73.jpg",
            "name": "kelya renaud"
        }
    ])
);


var ChatStore = new Store({
    contact_list() {
        return contactList;
    }
});

AppDispatcher.register((payload) => {
    switch(payload.actionType) {
        case ChatConstants.NEW:
            break;
    }
});

export default ChatStore;