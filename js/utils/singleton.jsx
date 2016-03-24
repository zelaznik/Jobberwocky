function singleton() {
    if (this instanceof singleton) {
        throw new Error("cannot call singleton as a constructor function.");
    }

    var instance;
    return class Singleton {
        constructor() {
            if (instance) {
                throw new Error(`Cannot create multiple instances of ${this.constructor.name}.`);
            } else {
                instance = this;
            }
        }
        static instance() {
            return instance;
        }
    };
}

export default singleton;