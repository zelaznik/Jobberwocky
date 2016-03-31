var _hasBeenSet;
var _router;

const RouterStore = Object.freeze({
    assign(router) {
        if (_hasBeenSet)
            throw new Error("Cannot set router more than once");
        _hasBeenSet = true;
        _router = router;
        return router;
    },
    fetch() {
        return _router;
    }
});

export default RouterStore;