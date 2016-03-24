function counter() {
    var i = 0;
    return function seq() {
        i++;
        return i;
    }
}

export default counter;
