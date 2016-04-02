var ApiRoot = 'http://api.jobberwocky.dev';

var ApiEndpoints = {};

ApiEndpoints.ROOT_URL = ApiRoot;
ApiEndpoints.VERSION = 'application/vnd.marketplace.v1';

ApiEndpoints.SIGN_IN = `${ApiRoot}/users/sign_in`;
ApiEndpoints.SIGN_OUT = `${ApiRoot}/users/sign_out`;
ApiEndpoints.SIGN_UP = `${ApiRoot}/users`;

ApiEndpoints.PRODUCTS = `${ApiRoot}/products`;

module.exports = ApiEndpoints;

