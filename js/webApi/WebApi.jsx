import $ from 'jquery';
import assign from 'object-assign';

import SessionStore from '../stores/SessionStore.jsx';
import ApiEndpoints from '../constants/ApiEndpoints.js';

function corsHeaders() {
    return {
        'Accept': ApiEndpoints.VERSION,
        'Content-Type': 'application/json',
        'Authorization': SessionStore.token()
    };
}

function full_url(url, params) {
    if (url && params.url)
        throw new Error("Duplicate URL arguments for AJAX call");
    else if (!url && !params.url)
        throw new Error("Missing URL argument for AJAX call");

    url = url || params.url;
    if (url[0] === '/')
        url = ApiEndpoints.ROOT_URL + url;

    return url;
}

function paramsWrapper(url_or_params, params_or_missing) {
    var url, params;
    if (!params_or_missing) {
        params = Object.assign({}, url_or_params);
    } else {
        url = url_or_params;
        params = Object.assign({}, params_or_missing);
    }

    params.headers = assign({}, params.headers, corsHeaders());
    params.url = full_url(url, params);
    params.crossDomain = true;

    return params;
}

function ajaxWrapper(url_or_params, params_or_missing) {
    $.ajax(paramsWrapper(url_or_params, params_or_missing));
}

function apiRequest(method, url, data, callback) {
    ajaxWrapper({
        url: url,
        type: method,
        data: JSON.stringify(data),
        success(response) {
            callback(null, response);
        },
        error(error) {
            callback(error, null);
        }
    });
}

var GET = (url, data, cb) => (apiRequest('GET', url, data, cb)),
    POST = (url, data, cb) => (apiRequest('POST', url, data, cb)),
    PUT = (url, data, cb) => (apiRequest('PUT', url, data, cb)),
    PATCH = (url, data, cb) => (apiRequest('PATCH', url, data, cb)),
    DELETE = (url, data, cb) => (apiRequest('DELETE', url, data, cb));

export { GET , POST , PUT , PATCH , DELETE };


