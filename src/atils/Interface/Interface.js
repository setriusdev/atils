const { Any, SmallInt } = require("./data/Other Types.js");
const InterfaceTypes = require("../../enums/Interface Types.js");

const Bitfield = require("../Bitfield/Bitfield.js");
const Collection = require("../Collection/Collection.js");
const BaseError = require("../Error/Base Error.js");
const EnumParent = require("../Enum/Enum Parent.js");
const Placebo = require("../Placebo/Placebo.js");

class Interface {
    static Types = InterfaceTypes;
    
    static implement(instance) {
        instance.apply = function(intf, runOnlyOnce) {
            intf._instances.push(instance);
            if(!runOnlyOnce) runOnlyOnce = true;

            if(runOnlyOnce === true) {
                let gate = true;
                Object.keys(instance).forEach(key => {
                    if(IgnoredKeys.includes(key)) return;
                    else {
                        let finalizedType;
                        const interfaceItemType = intf[key];
                        Object.keys(types).forEach(item => {
                            if(item.includes(interfaceItemType)) {
                                finalizedType = item[0];
                            }
                        });

                        if(finalizedType === this.Types.Any) return;
                        else if(finalizedType === this.Types.Array) {
                            if(!Array.isArray(instance[key])) gate = false;
                        }

                        else if(finalizedType === this.Types.BigInt) {
                            if(typeof instance[key] !== "bigint") gate = false;
                        }

                        else if(finalizedType === this.Types.Bitfield) {
                            if(!instance[key] instanceof Bitfield) gate = false;
                        }

                        else if(finalizedType === this.Types.Boolean) {
                            if(typeof instance[key] === "boolean") gate = false;
                        }

                        else if(finalizedType === this.Types.Collection) {
                            if(!instance[key] instanceof Collection) gate = false;
                        }

                        else if(finalizedType === this.Types.Enum) {
                            if(!instance[key] instanceof EnumParent) gate = false;
                        }

                        else if(finalizedType === this.Types.Error) {
                            if(!instance[key] instanceof Error) gate = false;
                        }

                        else if(finalizedType === this.Types.Function) {
                            if(typeof instance[key] !== "function") gate = false;
                        }

                        else if(finalizedType === this.Types.Interface) {
                            if(!instance[key] instanceof Interface) gate = false;
                        }

                        else if(finalizedType === this.Types.Number) {
                            if(typeof instance[key] !== "number" && typeof instance[key] !== "bigint") gate = false;
                        }

                        else if(finalizedType === this.Types.Object) {
                            if(typeof instance[key] !== "object" || instance[key] === null || Array.isArray(instance[eky])) gate = false;
                        }

                        else if(finalizedType === this.Types.Placebo) {
                            if(!instance[key] instanceof Placebo) gate = false;
                        }

                        else if(finalizedType === this.Types.SmallInt) {
                            if(typeof instance[key] !== "number") gate = false;
                        }

                        else if(finalizedType === this.Types.String) {
                            if(typeof instance[key] !== "string") gate = false;
                        }

                        else if(finalizedType === this.Types.Symbol) {
                            if(typeof instance[key] !== "symbol") gate = false;
                        }

                        else if(finalizedType === this.Types.URL) {
                            try {
                                new URL(instance[key]);
                            } catch(_) {
                                gate = false;
                            }
                        }
                    }
                });

                if(gate === false) {
                    throw new BaseError("Interface Error", "Invalid Structure.");
                }
            } else {
                let gate = true;
                intf.stop = function() {
                    clearInterval(intf.interval);
                }

                intf.interval = setInterval(() => {
                    Object.keys(instance).forEach(key => {
                        if(IgnoredKeys.includes(key)) return;
                        else {
                            let finalizedType;
                            const interfaceItemType = intf[key];
                            Object.keys(types).forEach(item => {
                                if(item.includes(interfaceItemType)) {
                                    finalizedType = item[0];
                                }
                            });

                            if(finalizedType === this.Types.Any) return;
                            else if(finalizedType === this.Types.Array) {
                                if(!Array.isArray(instance[key])) gate = false;
                            }

                            else if(finalizedType === this.Types.BigInt) {
                                if(typeof instance[key] !== "bigint") gate = false;
                            }

                            else if(finalizedType === this.Types.Bitfield) {
                                if(!instance[key] instanceof Bitfield) gate = false;
                            }

                            else if(finalizedType === this.Types.Boolean) {
                                if(typeof instance[key] === "boolean") gate = false;
                            }

                            else if(finalizedType === this.Types.Collection) {
                                if(!instance[key] instanceof Collection) gate = false;
                            }

                            else if(finalizedType === this.Types.Enum) {
                                if(!instance[key] instanceof Enum) gate = false;
                            }

                            else if(finalizedType === this.Types.Error) {
                                if(!instance[key] instanceof Error) gate = false;
                            }

                            else if(finalizedType === this.Types.Function) {
                                if(typeof instance[key] !== "function") gate = false;
                            }

                            else if(finalizedType === this.Types.Interface) {
                                if(!instance[key] instanceof Interface) gate = false;
                            }

                            else if(finalizedType === this.Types.Number) {
                                if(typeof instance[key] !== "number" && typeof instance[key] !== "bigint") gate = false;
                            }

                            else if(finalizedType === this.Types.Object) {
                                if(typeof instance[key] !== "object" || instance[key] === null || Array.isArray(instance[eky])) gate = false;
                            }

                            else if(finalizedType === this.Types.Placebo) {
                                if(!instance[key] instanceof Placebo) gate = false;
                            }

                            else if(finalizedType === this.Types.SmallInt) {
                                if(typeof instance[key] !== "number") gate = false;
                            }

                            else if(finalizedType === this.Types.String) {
                                if(typeof instance[key] !== "string") gate = false;
                            }

                            else if(finalizedType === this.Types.Symbol) {
                                if(typeof instance[key] !== "symbol") gate = false;
                            }

                            else if(finalizedType === this.Types.URL) {
                                try {
                                    new URL(instance[key]);
                                } catch(_) {
                                    gate = false;
                                }
                            }
                        }
                    });

                    if(gate === false) throw new BaseError("Interface Error", "Invalid Structure.");
                }, 1000);
            }
        }
    }

    constructor(object) {
        Object.keys(object).forEach(key => {
            if(IgnoredKeys.includes(key)) throw new Error("Interface Error", "Invalid Key.");
            Object.keys(types).forEach(type => {
                if(types[type].includes(object[key])) {
                    this[key] = object[key];
                }
            });
        });
    }
}

const types = {
    Any: [Interface.Types.Any, "any", "*", Any],
    Array: [Interface.Types.Array, "array", "[]", [], Array],
    BigInt: [Interface.Types.BigInt, "bigint", 1n, "n", BigInt],
    Bitfield: [Interface.Types.Bitfield, "bitfield", Bitfield],
    Boolean: [Interface.Types.Boolean, "boolean", true, false, [true, false], Boolean],
    Collection: [Interface.Types.Collection, "collection", "(*)", Collection],
    Enum: [Interface.Types.Enum, "enum", "{*}", EnumParent],
    Error: [Interface.Types.Error, "error", "!", Error],
    Function: [Interface.Types.Function, "function", "fn", "()", Function],
    Interface: [Interface.Types.Interface, "interface", "i", Interface],
    Number: [Interface.Types.Number, "number", "#", Number],
    Object: [Interface.Types.Object, "object", "{}", {}, Object],
    Placebo: [Interface.Types.Placebo, "placebo", "**", Placebo],
    SmallInt: [Interface.Types.SmallInt, "smallint", "#<", SmallInt],
    String: [Interface.Types.String, "string", "'", "''", '"', '""', "`", "``", String],
    Symbol: [Interface.Types.Symbol, "symbol", "$", Symbol],
    URL: [Interface.Types.URL, "url", "https://", "://", URL],
}

const IgnoredKeys = [
    "Types",
    "implement",
    "apply",
    "_instances",
];

module.exports = Interface;