const Type = require("../Interface/Type.js");
const BaseError = require("../Error/Base Error.js");
const ThawedFlagBasedEnum = require("./Thawed Flag Based Enum.js");
const EnumParent = require("./Enum Parent.js");

class FrozenFlagBasedEnum extends EnumParent {
    #json = {};
    constructor(object) {
        super();

        Object.keys(object).forEach(key => {
            this[key] = object[key];
            this.#json[key] = object[key];
        });
    }

    toJSON() {
        return this.#json;
    }

    thaw() {
        return new ThawedFlagBasedEnum(this.toJSON(), this);
    }
}

module.exports = FrozenFlagBasedEnum;