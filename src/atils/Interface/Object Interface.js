const Type = require("./Type.js");

class ObjectOrientedInterface {
    constructor(object) {
        this.structure = {};
        Object.keys(object).forEach(key => {
            if(key.startsWith("_")) {
                this.structure[key.slice(1, key.length)] = {
                    type: new Type(object[key].type, true),
                    default: object[key].default ?? null,
                };
            } else {
                this.structure[key] = new Type(object[key], false);
            }
        });
    }

    applyTo(object) {
        Object.keys(this.structure).forEach(key => {
            if(this.structure[key].type) {
                this.structure[key].type.applyTo(object[key]);
            } else this.structure[key].applyTo(object[key]);

            if(!object[key] && this.structure[key].default) object[key] = this.structure[key].default;
        });

        return object;
    }
}

module.exports = ObjectOrientedInterface;