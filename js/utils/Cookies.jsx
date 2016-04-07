var Cookies = Object.freeze({
    get(name) {
        var cookies = JSON.parse(document.cookie || "{}");
        return cookies[name];
    },
    set(name, value) {
        var cookies = JSON.parse(document.cookie || "{}");
        cookies[name] = value;
        document.cookie = JSON.stringify(cookies);
    },
    del(name) {
        var cookies = JSON.parse(document.cookie || "{}");
        delete cookies[name];
        document.cookie = JSON.stringify(cookies);
    },
    reset() {
        document.cookie = "{}";
    }
});

export default Cookies;