const BitEnum = require("../atils/Enum/Bit Enum.js");

module.exports = new BitEnum({ frozen: false },
    "Any",
    "Array",
    "BigInt",
    "Bitfield",
    "Boolean",
    "Collection",
    "Enum",
    "Error",
    "Function",
    "Interface",
    "Number",
    "Object",
    "Placebo",
    "SmallInt",
    "String",
    "Symbol",
    "URL",
)
    .addFunction("ArrayOf", function(type) {
        return [1 << 17, type];
    })
    .freeze();