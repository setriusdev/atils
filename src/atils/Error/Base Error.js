class BaseError extends Error {
    /**
     * 
     * @param {string} name The name of the Error.
     * @param {string} message The message of the Error.
     * @param {[Object]} styles The provided Styles for the Title and Message. 
     */
    constructor(name, message, styles) {
        const s = Object.assign({
            title: '\x1b[31m',
            message: '\x1b[0m',
        }, styles);

        super(`${s.message}${message}`);
        this.name = `${s.title}${name}\x1b[0m`;
    }
}

module.exports = BaseError;