const Type = require("../Interface/Type.js");
const ErrorBuilder = require("./Error Builder.js");

const StringType = new Type(String);
const ObjectType = new Type(Object);

class ErrorSaver {
    constructor(options) {
        ObjectType.applyTo(options, true);

        this.options = Object.assign({
            date: false,
            stack: true,
            logStacks: false,
        }, options);

        this.errors = {};
    }

    createError(name, message) {
        StringType.applyTo(name, false);
        StringType.applyTo(message, false);

        this.errors[name] = {
            name: name,
            message: message,
            options: this.options
        };

        return this;
    }

    throw(name) {
        StringType.applyTo(name, false);

        const error = this.errors[name];
        throw new ErrorBuilder(error.name, error.message, error.options);
    }
}

module.exports = ErrorSaver;