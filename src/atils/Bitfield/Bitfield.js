const Type = require("../Interface/Type.js");

const NumberType = new Type(Number);
const BooleanType = new Type(Boolean);
const FunctionType = new Type(Function);

class Bitfield {
    static createSingularBit(value) {
        const temporary = new this(1);
        temporary.set(0, value);

        return temporary.get(0);
    }

    bits = [];
    constructor(bits) {
        NumberType.applyTo(bits);

        for(var i = 0; i < bits; i++) {
            this.bits[i] = 0;
        }
    }

    set(index, value) {
        NumberType.applyTo(index);
        BooleanType.applyTo(value);

        let finalValue;
        if(value === true) finalValue = 1;
        else finalValue = 0;

        this.bits[index] |= (1 << finalValue);

        return this;
    }

    get(index) {
        NumberType.applyTo(index);

        let value = (this.bits[index] & (1 << 0));
        if(value === 0) value = (this.bits[index] & (1 << 1));

        let v;
        if(value === 2) v = true;
        else if(value === 1) v = false;
        else v = undefined;

        return v;
    }

    clear(index) {
        NumberType.applyTo(index);

        this.bits[index] &= ~(1 << (this.get(index) ?? 0));
        return this;
    }

    forEach(callback) {
        FunctionType.applyTo(callback);
        this.bits.forEach(bit => {
            callback(bit, this);
        });

        return this;
    }
}

module.exports = Bitfield;