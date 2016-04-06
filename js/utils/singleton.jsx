/* Easy way to make any class into a singleton in ES6.
class DbConnection extends singleton() {
    constructor() {
        super();
        [your code here]
    }
}
class LogFile extends singleton() {
    [ In this example, LogFile and DbConnection do NOT share
      a common parent / ancestor class.  The function singleton()
      generates a new class every time it's invoked.
    ]
}
*/

function singletonWithParent(Parent) {
    var instance;
    return class Singleton extends Parent {
        constructor() {
            if (instance)
                throw new Error(`Cannot create multiple instances of ${instance.constructor.name}.`);
            super(...arguments);
            instance = this;
        }
        static instance() {
            return instance;
        }
    };
}

function singleton(Parent = null) {
    if (this instanceof singleton) {
        throw new TypeError(`cannot call singleton as a constructor function.`);
    }
    if (Parent) {
        return singletonWithParent(Parent);
    }

    var instance;
    return class Singleton {
        constructor() {
            if (instance)
                throw new Error(`Cannot create multiple instances of ${instance.constructor.name}.`);
            instance = this;
        }

        static instance() {
            return instance;
        }
    };
}

export default singleton;