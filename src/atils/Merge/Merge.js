class Merge {
    #classes;
    #vessel;
    constructor(...classes) {
        this.#classes = classes.reverse();
        this.#vessel = this.#build();
        return this.#vessel;
    }

    #build() {
        const classes = this.#classes;
        const vessel = class {
            constructor(...params) {
                classes.forEach(item => {
                    if(Array.isArray(params[classes.indexOf(item)])) Object.assign(this, new item(...params[classes.indexOf(item)]));
                    else Object.assign(this, new item(params[classes.indexOf(item)]));
                });
            }
        }

        classes.forEach(item => {
            if(item === undefined) return;
            Object.getOwnPropertyNames(item.prototype)
                .filter(propertyName => propertyName != "constructor")
                .map(propertyName => {
                    vessel.prototype[propertyName] = item.prototype[propertyName];
                });
        });

        return vessel;
    }
}

module.exports = Merge;