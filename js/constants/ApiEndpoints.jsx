const ApiRoot = 'http://api.marketplaceapi.dev';

const ApiEndpoints = {
    SIGN_IN:   `${ApiRoot}/users/sign_in`,
    SIGN_OUT: (id) => (`${ApiRoot}/sessions/${id}`),
    SIGN_UP:  `${ApiRoot}/users`
};

export default ApiEndpoints;

