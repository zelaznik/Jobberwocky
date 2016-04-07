var Cookies = {
    all() {
        return JSON.parse(document.cookie || "{}");
    },
    get(name) {
        return Cookies.all()[name];
    },
    set(name, value) {
        var cookies = Cookies.all();
        cookies[name] = value;
        document.cookie = JSON.stringify(cookies);
    },
    del(name) {
        var cookies = Cookies.all();
        delete cookies[name];
        document.cookie = JSON.stringify(cookies);
    },
    reset() {
        document.cookie = "{}";
    }
};

export default Object.freeze(Cookies);