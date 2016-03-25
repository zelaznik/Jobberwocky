function counter() {
    var i = 0;
    return {
        get next() { return ++i; },
        get value() {  return i; }
    };
}

export default counter;
