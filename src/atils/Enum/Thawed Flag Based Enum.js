const Type = require("../Interface/Type.js");
const EnumParent = require("./Enum Parent.js");

const StringType = new Type(String);

class ThawedFlagBasedEnum extends EnumParent {
    #json = {};
    #frozenEnum;
    constructor(object, frozenEnum) {
        super();

        this.#frozenEnum = frozenEnum;
        Object.keys(object).forEach(key => {
            this[key] = object[key];
            this.#json[key] = object[key];
        });
    }

    set(key, value) {
        StringType.applyTo(key);

        this[key] = value;
        this.#json[key] = value;

        return this;
    }

    toJSON() {
        return this.#json;
    }

    freeze() {
        return new this.#frozenEnum.constructor(this.#json);
    }
}

module.exports = ThawedFlagBasedEnum;