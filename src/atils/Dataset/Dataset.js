const Type = require("../Interface/Type.js");

const NumberType = new Type(Number);
const SymbolType = new Type(Symbol);

class Dataset {
    #index = 0;

    next() {
        let current = this.#index;
        this.#index += 1;

        return 1 << current;
    }

    previous() {
        this.#index -= 1;
        if(this.#index <= 0) this.#index = 0;
        return 1 << this.#index;
    }

    skip(amount) {
        NumberType.applyTo(amount);
        this.#index += amount;
        return 1 << this.#index;
    }
}

module.exports = Dataset;