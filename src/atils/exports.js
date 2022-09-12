const Bitfield = require("./Bitfield/Bitfield.js");
const Client = require("./Client/Client.js");
const Collection = require("./Collection/Collection.js");
const Console = require("./Console/Console.js");
const Dataset = require("./Dataset/Dataset.js");
const Date = require("./Date/Date.js");
const EnumParent = require("./Enum/Enum Parent.js");
const BitEnum = require("./Enum/Bit Enum.js");
const FrozenFlagBasedEnum = require("./Enum/Frozen Flag Based Enum.js");
const ThawedFlagBasedEnum = require("./Enum/Thawed Flag Based Enum.js");
const BaseError = require("./Error/Base Error.js");
const ErrorBuilder = require("./Error/Error Builder.js");
const ErrorSaver = require("./Error/Error Saver.js");
const Interface = require("./Interface/Interface.js");
const Type = require("./Interface/Type.js");
const InterfaceTypeAny = require("./Interface/data/Other Types.js").Any;
const InterfaceTypeSmallInt = require("./Interface/data/Other Types.js").SmallInt;
const Merge = require("./Merge/Merge.js");
const Placebo = require("./Placebo/Placebo");

module.exports = {
    Bitfield,
    Client,
    Collection,
    Console,
    Dataset,
    Date,
    EnumParent,
        BitEnum,
        FrozenFlagBasedEnum,
        ThawedFlagBasedEnum,
    BaseError,
        ErrorBuilder,
        ErrorSaver,
    Interface,
        Type,
        InterfaceTypeAny,
        InterfaceTypeSmallInt,
    Merge,
    Placebo,
};