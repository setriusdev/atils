const Type = require("../Interface/Type.js");

const StringType = new Type(String);
const NumberType = new Type(Number);
const FunctionType = new Type(Function);

/**
 * @class @extends Map
 * @description An extension to the Map Class.
 */
class Collection extends Map {
    /**
     * Constructor method for the Collection Class.
     * @param {Collection} instance A Collection to merge with this one.
     * @returns {Collection} The Collection instance.
     */
    constructor(instance) {
        if(!instance) return this;
        else {
            CollectionType.applyTo(instance);
            instance.entries().forEach(entry => {
                this.set(entry[0], entry[1]);
            });
        }

        return this;
    }

    /**
     * Gets the value of the Collection at an index, as if it was an Array.
     * @param {Number} index 
     * @returns {any} The value where the index is.
     */
    at(index) {
        NumberType.applyTo(index);

        const array = [...this.values()];
        return array.at(index);
    }

    /**
     * Creates a clone of this Collection.
     * @returns {Collection} The clone of this Collection.
     */
    clone() {
        return new this.constructor(this);
    }

    /**
     * Creates a Collection from merging this Collection, as well as all provided collections.
     * @param  {...Collection} collections 
     * @returns {Collection} The conjoined Collection.
     */
    concat(...collections) {
        const newCollection = this.clone();
        for(const collection of collections) {
            CollectionType.applyTo(collection);
            for(const [key, val] of collection) newCollection.set(key, val);
        }

        return newCollection;
    }

    /**
     * Returns a new Collection of values not shared between each Collection (this and the provided Collection).
     * @param {Collection} collection The provided Collection.
     * @returns {Collection} The Collection of all differences.
     */
    difference(collection) {
        CollectionType.applyTo(collection);

        const newCollection = new this.construtor();
        for(const [key, value] of collection) {
            if(!this.has(key)) newCollection.set(key, value);
        }

        for(const [key, value] of this) {
            if(!collection.has(key)) newCollection.set(key, value);
        }

        return newCollection;
    }

    /**
     * Applies a function to each value in the Collection.
     * @param {Function} fn The Function to be used.
     * @returns {Collection} The Collection.
     */
    each(fn) {
        FunctionType.applyTo(fn);

        this.forEach((value, key) => {
            fn(value, key, this);
        });

        return this;
    }

    ensure(key, valueIfNone) {
        StringType.applyTo(key);

        if(this.has(key)) return this.get(key);
        else this.set(key, valueIfNone);

        return this.get(key);
    }

    equals(collection) {
        CollectionType.applyTo(collection);

        if(this === collection) return true;
        if(this.size !== collection.size) return false;
        for(const [key, value] of this) {
            if(!collection.has(key) || value !== collection.get(key)) {
                return false;
            }
        }

        return true;
    }

    every(fn) {
        FunctionType.applyTo(fn);
        
        for(const [key, value] of this) {
            if(!fn(value, key, this)) return false;
        }

        return true;
    }

    filter(fn) {
        FunctionType.applyTo(fn);

        const results = new this.constructor();
        for(const [key, value] of this) {
            if(fn(value, key, this)) results.set(key, value);
        }

        return results;
    }

    find(fn) {
        FunctionType.applyTo(fn);

        for(const [key, value] of this) {
            if(fn(value, key, this)) return value;
        }

        return undefined;
    }

    findKey(fn) {
        FunctionType.applyTo(fn);

        for(const [key, value] of this){ 
            if(fn(value, key, this)) return key;
        }

        return undefined;
    }

    first(amount) {
        NumberType.applyTo(amount);

        if(amount < 0) return this.last(amount * -1);
        amount = Math.min(this.size, amount);

        const iter = this.values();
        return Array.from({ length: amount}, () => iter.next().value);
    }

    firstKey(amount) {
        NumberType.applyTo(amount);

        if(amount < 0) return this.lastKey(amount * -1);
        amount = Math.min(this.size, amount);

        const iter = this.keys();
        return Array.from({ length: amount }, () => iter.next().value);
    }

    hasAll(...keys) {
        keys.forEach(key => {
            StringType.applyTo(key);

            if(!this.get(key)) return false;
        });

        return true;
    }

    hasAny(...keys) {
        keys.forEach(key => {
            StringType.applyTo(key);

            if(this.get(key)) return true;
        });

        return false;
    }

    keyAt(index) {
        NumberType.applyTo(index);

        const array = [...this.keys()];
        return array.at(index);
    }

    last() {
        return this.at(this.size - 1);
    }

    random() {
        return this.at(Math.floor(Math.random() * this.size - 1));
    }

    toJSON() {
        const object = {};
        this.keys().forEach(key => {
            object[key] = this.get(key);
        });

        return object;
    }
}

const CollectionType = new Type(Collection);

module.exports = Collection;