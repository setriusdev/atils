const InterfaceTypes = require("../../enums/Interface Types.js");
const BaseError = require("../Error/Base Error.js");

const { Any, SmallInt } = require("./data/Other Types.js");

class Type {
    #type = null;
    constructor(type) {
        Object.keys(types).forEach(key => {
            if(types[key].includes(type)) {
                this.#type = types[key][1];
            } else return;
        });

        if(!this.#type) this.#type = type;
        return this;
    }

    applyTo(parameter, optional) {
        if(this.#type == null) throw new BaseError("Type Error", "Invalid type.");
        else {
            if(parameter === undefined && optional === true) return;
            else if(typeof parameter === this.#type || parameter === this.#type || parameter instanceof this.#type) return true;
            else throw new BaseError("Type Error", "Parameter does not match required type.");
        }
    }
}

const types = {
    Any: [InterfaceTypes.Any, "any", "*", Any],
    Array: [InterfaceTypes.Array, "array", "[]", [], Array],
    BigInt: [InterfaceTypes.BigInt, "bigint", 1n, "n", BigInt],
    Boolean: [InterfaceTypes.Boolean, "boolean", true, false, [true, false], Boolean],
    Function: [InterfaceTypes.Function, "function", "fn", "()", Function],
    Number: [InterfaceTypes.Number, "number", "#", Number],
    Object: [InterfaceTypes.Object, "object", "{}", {}, Object],
    String: [InterfaceTypes.String, "string", "'", "''", '"', '""', "`", "``", String],
    Symbol: [InterfaceTypes.Symbol, "symbol", "$", Symbol],
    URL: [InterfaceTypes.URL, "url", "https://", "://", URL],
}

module.exports = Type;