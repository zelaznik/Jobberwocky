var SessionStore = require('../stores/SessionStore.jsx');

var NODE_ENV = (process.env.NODE_ENV || 'development');
var ApiEndpoints = {};
var ApiRoot = {
    'development': 'http://localhost:3000',
    'production': 'http://api.jobberwocky.net'
}[NODE_ENV];

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

