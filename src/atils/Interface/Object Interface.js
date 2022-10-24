const Type = require("./Type.js");

class ObjectOrientedInterface {
    constructor(object) {
        this.structure = {};
        Object.keys(object).forEach(key => {
            if(key.startsWith("_")) {
                if(Array.isArray(object[key].type)) {
                    this.structure[key.slice(1, key.length)] = {
                        type: object[key].type ?? [],
                        default: object[key].default ?? null,
                    };
                } else {
                    this.structure[key.slice(1, key.length)] = {
                        type: new Type(object[key].type, true),
                        default: object[key].default ?? null,
                    };
                }
            } else {
                if(Array.isArray(object[key])) {
                    this.structure[key] = object[key];
                } else {
                    this.structure[key] = new Type(object[key], false);
                }
            }
        });
    }

    applyTo(object) {
        Object.keys(this.structure).forEach(key => {
            if(this.structure[key]?.type) {
                if(!object[key]) object[key] = this.structure[key]?.default ?? null;
                if(Array.isArray(this.structure[key].type)) {
                    this.structure[key].type.forEach(item => {
                        const type = new Type(item, true);
                        type.applyTo(object[key][this.structure[key].type.indexOf(item)]);
                    });
                } else {
                    this.structure[key].type.applyTo(object[key]);
                }
            } else {
                if(Array.isArray(this.structure[key])) {
                    this.structure[key].forEach(item => {
                        const type = new Type(item, false);
                        type.applyTo(object[key][this.structure[key].indexOf(item)]);
                    });
                } else {
                    this.structure[key].applyTo(object[key]);
                }
            }
        });
    }
}

module.exports = ObjectOrientedInterface;