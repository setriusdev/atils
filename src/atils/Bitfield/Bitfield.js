const Type = require("../Interface/Type.js");

const NumberType = new Type(Number);
const BooleanType = new Type(Boolean);
const FunctionType = new Type(Function);

/**
 * @class
 * @name Bitfield
 * @description Standard Bitfield Utility.
 */
class Bitfield {
    /**
     * 
     * @param {Boolean} value The boolean value of the Bit.
     * @returns {Boolean} The value of the created Bit.
     * @deprecated
     */
    static createSingularBit(value) {
        const temporary = new this(1);
        temporary.set(0, value);

        return temporary.get(0);
    }

    bits = [];
    /**
     * @description Constructor method for the Bitfield.
     * @param {Number} bits The amount of bits within the Bitfield.
     */
    constructor(bits) {
        NumberType.applyTo(bits);

        for(var i = 0; i < bits; i++) {
            this.bits[i] = 0;
        }
    }

    /**
     * @description Sets a value for the specified Bit.
     * @param {Number} index The index of the Bit being modified.
     * @param {Boolean} value The value of the Bit.
     * @returns {Bitfield} The Bitfield.
     */
    set(index, value) {
        NumberType.applyTo(index);
        BooleanType.applyTo(value);

        let finalValue;
        if(value === true) finalValue = 1;
        else finalValue = 0;

        this.bits[index] |= (1 << finalValue);

        return this;
    }

    /**
     * @description Gets the value of the specified Bit.
     * @param {Number} index The index of the Bit being returned.
     * @returns {Boolean} The value of the Bit.
     */
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

    /**
     * Clears the value at a specified Bit.
     * @param {Number} index The index of the Bit being modified. 
     * @returns {Bitfield} The Bitfield instance.
     */
    clear(index) {
        NumberType.applyTo(index);

        this.bits[index] &= ~(1 << (this.get(index) ?? 0));
        return this;
    }

    /**
     * Iterates through each Bit and returns a function for each.
     * @param {Function} callback The function to be used.
     * @returns {Bitfield} The Bitfield instance.
     */
    forEach(callback) {
        FunctionType.applyTo(callback);
        this.bits.forEach(bit => {
            callback(bit, this);
        });

        return this;
    }
}

module.exports = Bitfield;