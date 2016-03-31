var getID = (function() {
    var id = 0;
    return function getID() {
        return id++;
    };
})();

function define(obj, key, val) {
    var withId = "id-" + getID() + "_name-" + val;
    Object.defineProperty(obj, key, {
        get: function() { return withId; }
    });
}

function uniqueKeySet(params) {
    var obj = {};
    for (var key in params) {
        var val = params[key] || key;
        define(obj, key, val);
    }
    return obj;
}

module.exports = uniqueKeySet;