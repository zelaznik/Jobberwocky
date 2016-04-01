var $ = require('jquery');
import assign from 'object-assign';
import SessionStore from '../stores/SessionStore.jsx';

function corsHeaders() {
    return {
        'Accept': 'application/vnd.marketplace.v1',
        'Content-Type': 'application/json',
        'Authorization': SessionStore.token()
    };
}

/* Written to inject into my version of
   BackboneJS To allow CORS requests. */
function ajaxWrapper() {
    var origParams = arguments[arguments.length - 1];
    var params = assign({}, origParams);
    var h = params.headers || {};

    params.headers = assign({}, h, corsHeaders());
    params.url = params.url || arguments[0];

    $.ajax(params);
}

module.exports = ajaxWrapper;