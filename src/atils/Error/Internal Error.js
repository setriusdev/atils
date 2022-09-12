const CS = require("../../enums/Console Styles.js");
const Date = require("../Date/Date.js");

const fs = require("fs");

// This Error is only utilized by the ErrorBuilder!
class InternalError extends Error {
    constructor(name, message, options) {
        name = `${CS.TextStyles.Bright + CS.TextColors.Red}${name}${CS.TextStyles.Reset}`;
        options = Object.assign({
            date: false,
            stack: true,
            logStacks: false
        }, options);

        if(options.date == true) {
            message = message + `\n${CS.TextStyles.Dim + CS.TextColors.Magenta}${new Date().toString()}${CS.TextStyles.Reset}`;
        }

        super(message);
        this.name = name;

        if(options.stack === false) {
            this.stack = undefined;
        } else {
            if(options.logStacks === true) {
                if(!fs.existsSync("./atils")) {
                    fs.mkdirSync("./atils");
                }

                let fileNumber = 0;

                fs
                    .readdirSync("./atils")
                    .filter(f => f.endsWith(".atils.error"))
                    .map(file => {
                        fileNumber += 1;
                    });

                fs
                    .writeFileSync(`./atils/${fileNumber + 1}.atils.error`, `atils threw an Error\n\n${this.name}: ${message}\n${this.stack}`, 
                        (error) => {
                            if(error) return;
                        });
            }
        }
    }
}

module.exports = InternalError;