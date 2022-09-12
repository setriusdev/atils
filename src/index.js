const atils = require("./atils/exports.js");
const DefaultClientIntents = require("./enums/Client Intents.js");
const ConsoleStyles = require("./enums/Console Styles.js");
const InterfaceTypes = require("./enums/Interface Types.js");

const finalized = Object.assign({
    DefaultClientIntents,
    ConsoleStyles,
    InterfaceTypes,
}, atils);

exports.Bitfield = atils.Bitfield;
exports.BitfieldUtility = atils.Bitfield;

exports.Client = atils.Client;
exports.ClientUtility = atils.Client;

exports.Collection = atils.Collection;
exports.CollectionUtility = atils.Collection;

exports.Console = atils.Console;
exports.ConsoleUtility = atils.Console;

exports.Dataset = atils.Dataset;
exports.DatasetUtility = atils.Dataset;

exports.Date = atils.Date;
exports.DateUtility = atils.Date;

exports.Enum = atils.FrozenFlagBasedEnum;
exports.EnumUtility = atils.FrozenFlagBasedEnum;
exports.EnumParent = atils.EnumParent;
exports.BitEnum = atils.BitEnum;
exports.FrozenFlagBasedEnum = atils.FrozenFlagBasedEnum;
exports.ThawedFlagBasedEnum = atils.ThawedFlagBasedEnum;

exports.Error = atils.ErrorBuilder;
exports.ErrorUtility = atils.ErrorBuilder;
exports.BaseError = atils.BaseError;
exports.ErrorBuilder = atils.ErrorBuilder;
exports.ErrorSaver = atils.ErrorSaver;

exports.Interface = atils.Interface;
exports.InterfaceUtility = atils.Interface;
exports.Type = atils.Type;
exports.InterfaceTypeAny = atils.InterfaceTypeAny;
exports.InterfaceTypeSmallInt = atils.InterfaceTypeSmallInt;

exports.Merge = atils.Merge;
exports.MergeUtility = atils.Merge;

exports.Placebo = atils.Placebo;
exports.PlaceboUtility = atils.Placebo;

exports.DefaultClientIntents = DefaultClientIntents;
exports.ClientIntents = DefaultClientIntents;

exports.ConsoleStyles = ConsoleStyles;
exports.CS = ConsoleStyles;

exports.InterfaceTypes = InterfaceTypes;
exports.IFTypes = InterfaceTypes;