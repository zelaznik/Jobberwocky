var SessionStore = require('../stores/SessionStore.jsx');
var ENV = require('../../config.js');

['NODE_ENV','API_ROOT_URL'].forEach(function(name) {
    console.warn(name + ": " + ENV[name]);
});

var ApiRoot = getEnv('API_ROOT_URL');
var ApiEndpoints = {};

ApiEndpoints.ROOT_URL = ApiRoot;
ApiEndpoints.VERSION = 'application/vnd.marketplace.v1';

ApiEndpoints.SIGN_IN =  ApiRoot + '/users/sign_in';
ApiEndpoints.SIGN_OUT = ApiRoot + '/users/sign_out';
ApiEndpoints.SIGN_UP =  ApiRoot + '/users';

ApiEndpoints.AUTH = {
    NEW: ApiRoot + '/auth/new'
};

function userProductsUrl(id) {
    var usersUrl = ApiRoot + '/users/' + SessionStore.currentUserId();
    var subUrl = '/products/' + (id || '');
    return usersUrl + subUrl;
}

function productsUrl(id) {
    return ApiRoot + '/products/' + (id || '');
}

ApiEndpoints.PRODUCTS = Object.freeze({
    CREATE: userProductsUrl,
    UPDATE: userProductsUrl,
    DESTROY: userProductsUrl,

    SHOW: productsUrl,
    INDEX: productsUrl
});

module.exports = Object.freeze(ApiEndpoints);

