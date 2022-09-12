const BitEnum = require("../atils/Enum/Bit Enum.js");

module.exports = new BitEnum({ frozen: false },
    "DefaultEvents", 
    "Uptime"
)
    .freeze();