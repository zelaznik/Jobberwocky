import $ from 'jquery';
import assign from 'object-assign';

import ApiEndpoints from '../constants/ApiEndpoints.js';
import SessionActions from '../actions/SessionActions.jsx';
import SessionStore from '../stores/SessionStore.jsx';

function corsHeaders() {
    return {
        'Authorization': SessionStore.token(),
        'Content-Type': 'application/json'
    };
}

function full_url(url, params) {
    if (url && params.url)
        throw new Error("Duplicate URL arguments for AJAX call");
    else if (!url && !params.url)
        throw new Error("Missing URL argument for AJAX call");

    url = url || params.url;
    if (url[0] === '/') {
        if (ApiEndpoints.ROOT_URL)
            url = ApiEndpoints.ROOT_URL + url;
        else
            throw new Error("ApiEndpoints.ROOT_URL is not defined.");
    }

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
    var settings = {
        url: url,
        type: method,
        success(response) {
            callback(null, response);
        },
        error(error) {
            if (error.status == 401) {
                SessionActions.redirect_to_login();
            } else {
                callback(error, null);
            }
        }
    };
    for (var key in data) {
        settings.data = JSON.stringify(data);
    }
    ajaxWrapper(settings);
}

var GET = (url, data, cb) => (apiRequest('GET', url, data, cb)),
    POST = (url, data, cb) => (apiRequest('POST', url, data, cb)),
    PUT = (url, data, cb) => (apiRequest('PUT', url, data, cb)),
    PATCH = (url, data, cb) => (apiRequest('PATCH', url, data, cb)),
    DELETE = (url, data, cb) => (apiRequest('DELETE', url, data, cb));

export { GET , POST , PUT , PATCH , DELETE };