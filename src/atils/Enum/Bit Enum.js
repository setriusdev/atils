const BaseError = require("../Error/Base Error.js");
const EnumParent = require("./Enum Parent.js");

class BitEnum extends EnumParent {
    constructor(options, ...keys) {
        super();

        let index = 0;
        keys.sort().forEach(key => {
            if(typeof key !== "string") throw new BaseError("Type Error", "Invalid type.");

            this[key] = 1 << index;
            index += 1;
        });
        
        if(options && options.frozen) {
            Object.freeze(this);
        }
    }

    freeze() {
        Object.freeze(this);
        return this;
    }

    addFunction(key, fn) {
        if(typeof fn !== "function") throw new BaseError("Type Error", "Invalid type.");
        this[key] = fn;

        return this;
    }
}

module.exports = BitEnum;