var ApiEndpoints = {};
var ApiRoot = process.env.API_ROOT_URL;
var FrontUrl = process.env.FRONT_END_URL;

ApiEndpoints.ROOT_URL = ApiRoot;
ApiEndpoints.SIGN_IN =  ApiRoot + '/users/sign_in';
ApiEndpoints.SIGN_OUT = ApiRoot + '/users/sign_out';
ApiEndpoints.SIGN_UP =  ApiRoot + '/users';

ApiEndpoints.AUTH = function(src) {
    return ApiRoot + '/users/auth/' + src;
};

ApiEndpoints.AUTH_CALLBACK = FrontUrl + "/auth_callback";
ApiEndpoints.CURRENT_USER =  ApiRoot + '/current_user';

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

module.exports = ApiEndpoints;