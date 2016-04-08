var env = process.env.NODE_ENV;
console.log("NODE_ENV: " + env);
if (env === undefined) {
    throw new Error("You must specify an environment variable, NODE_ENV.");
}
module.exports = require('./environment/' + end + '.json');
