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

function singleton() {
    if (this instanceof singleton) {
        throw new TypeError(`cannot call singleton as a constructor function.`);
    }

    var instance;
    return class Singleton {
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

export default singleton;