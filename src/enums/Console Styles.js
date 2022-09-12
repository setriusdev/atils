const Enum = require("../atils/Enum/Frozen Flag Based Enum.js");

const ConsoleStyles = new Enum({
    TextStyles: new Enum({
        Bright: `\x1b[1m`,
        Dim: `\x1b[2m`,
        Underscore: `\x1b[4m`,
        Blink: `\x1b[5m`,
        Reverse: `\x1b[7m`,
        Invisible: `\x1b[8m`,

        Bold: '\x1b[1m',
        Dark: '\x1b[2m',
        Hidden: '\x1b[8m',
        Light: '\x1b[1m',

        Default: '\x1b[0m',
        Reset: '\x1b[0m',
    }),

    TextColors: new Enum({
        Black: '\x1b[30m',
        Red: '\x1b[31m',
        Green: '\x1b[32m',
        Yellow: '\x1b[33m',
        Blue: '\x1b[34m',
        Magenta: '\x1b[35m',
        Cyan: '\x1b[36m',
        White: '\x1b[37m',

        Default: '\x1b[37m',
        Reset: '\x1b[0m',
    }),

    BackgroundColors: new Enum({
        Black: '\x1b[40m',
        Red: '\x1b[41m',
        Green: '\x1b[42m',
        Yellow: '\x1b[43m',
        Blue: '\x1b[44m',
        Magenta: '\x1b[45m',
        Cyan: '\x1b[46m',
        White: '\x1b[47m',

        Default: '\x1b[47m',
        Reset: '\x1b[0m',
    }),

    validate(item) {
        let items = [
            '\x1b[0m',
            '\x1b[1m',
            '\x1b[2m',
            '\x1b[4m',
            '\x1b[5m',
            '\x1b[7m',
            '\x1b[8m',

            '\x1b[30m',
            '\x1b[31m',
            '\x1b[32m',
            '\x1b[33m',
            '\x1b[34m',
            '\x1b[35m',
            '\x1b[36m',
            '\x1b[37m',

            '\x1b[40m',
            '\x1b[41m',
            '\x1b[42m',
            '\x1b[43m',
            '\x1b[44m',
            '\x1b[45m',
            '\x1b[46m',
            '\x1b[47m',
        ];

        if(items.includes(item)) return true;
        else return false;
    }
});

module.exports = ConsoleStyles;