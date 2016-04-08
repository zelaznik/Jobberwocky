/* Heroku doesn't like backslashes for relative paths.
   This is a decorator to wrap around existin require
   functions to make it work on all platforms.

   I suspect heroku runs on Windows.  It's been a while
   since I've seen backslashes for file paths.

 */

var path = require('path');

function herokuPath(orig) {
    var nodes = orig.split(/[/|\\]/);
    return path.join(nodes);
}

function herokuRequire(orig) {
    return require(herokuPath(orig))
}

module.exports = Object.freeze({
    herokuRequire: herokuRequire,
    herokuPath: herokuPath
});