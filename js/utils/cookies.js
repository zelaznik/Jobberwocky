module.exports = {
    all: function() {
        var data = {};
        var items = document.cookie.split(";");
        items.forEach(function(item) {
            var eq = item.search("=");
            var key = item.slice(0, eq);
            var val = item.slice(eq + 1);
            data[key.trim()] = val;
        });
        return data;
    },
    get: function(name) {
        return Cookies.all()[name];
    },
    set: function(name, value) {
        document.cookie = name + '=' + value + ';';
    },
    del: function(name) {
        this.set(name, '');
    },
    replace: function(newStuff) {
        document.cookie.replace(document.cookie, newStuff);
    },
    reset: function() {
        var pairs = this.all();
        for (var name in pairs) {
            this.del(name);
        }
    }
};