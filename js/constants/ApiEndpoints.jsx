const ApiRoot = 'http://api.marketplaceapi.dev';

export default {
    SIGN_IN:   `${ApiRoot}/users/sign_in`,
    SIGN_OUT: (id) => (`${ApiRoot}/sessions/${id}`),
    SIGN_UP:  `${ApiRoot}/users`
};

