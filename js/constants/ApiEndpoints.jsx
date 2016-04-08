if (process.env.NODE_ENV === 'production') {
    let ApiRoot = 'http://api.jobberwocky.net';
} else {
    let ApiRoot = 'http://api.jobberwocky.dev';
}

import SessionStore from '../stores/SessionStore.jsx';

var ApiEndpoints = {};

ApiEndpoints.ROOT_URL = ApiRoot;
ApiEndpoints.VERSION = 'application/vnd.marketplace.v1';

ApiEndpoints.SIGN_IN = `${ApiRoot}/users/sign_in`;
ApiEndpoints.SIGN_OUT = `${ApiRoot}/users/sign_out`;
ApiEndpoints.SIGN_UP = `${ApiRoot}/users`;

ApiEndpoints.AUTH = {
    NEW: `${ApiRoot}/auth/new`
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

