const Type = require("../Interface/Type.js");
const InternalError = require("./Internal Error.js");

const StringType = new Type(String);
const ObjectType = new Type(Object);

class ErrorBuilder {
    constructor(name, message, options) {
        StringType.applyTo(name, false);
        StringType.applyTo(message, false);
        ObjectType.applyTo(options, true);

        this.name = name;
        this.message = message;
        
        this.options = Object.assign({
            date: false,
            stack: true,
            logStacks: false,
        }, options);

        return new InternalError(this.name, this.message, this.options);
    }
}

module.exports = ErrorBuilder;