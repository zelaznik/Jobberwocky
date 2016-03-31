const ApiRoot = 'http://api.jobberwocky.dev';

const ApiEndpoints = Object.freeze({
    SIGN_IN:   `${ApiRoot}/users/sign_in`,
    SIGN_OUT:  `${ApiRoot}/users/sign_out`,
    SIGN_UP:   `${ApiRoot}/users`
});

export default ApiEndpoints;

