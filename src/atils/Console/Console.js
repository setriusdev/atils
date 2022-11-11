const Type = require("../Interface/Type.js");
const BaseError = require("../Error/Base Error.js");

const CS = require("../../enums/Console Styles.js");
const ErrorBuilder = require("../Error/Error Builder.js");

const ArrayType = new Type(Array);
const StringType = new Type(String);
const ObjectType = new Type(Object);

class Console {
    constructor(options) {
        if(options) ObjectType.applyTo(options, false);

        this.options = {
            styles: Object.assign({
                title: [CS.TextStyles.Bright, CS.TextStyles.Underscore, CS.TextColors.Cyan],
                message: [CS.TextStyles.Dim, CS.TextColors.White],
                info: [CS.TextStyles.Dim, CS.TextColors.Magenta],
            }, options?.styles),
        };

        ObjectType.applyTo(this.options?.styles);

        this.last_message = undefined;
        this.group_number = 0;
        this.timer_number = 0;

        this.basic_console = console;

        ArrayType.applyTo(this.options?.styles?.title, true);
        ArrayType.applyTo(this.options?.styles?.message, true);
        ArrayType.applyTo(this.options?.styles?.info, true);
    }

    assert(statement, info) {
        if(statement === true) return this;
        else this.warn(`Assertion Failed`, info);

        return this;
    }

    say(...message) {
        this.basic_console.log(`${this.options.styles.message.join('')}${message.join(' ')}${CS.TextStyles.Reset}`);
        return this;
    }

    setName(name) {
        StringType.applyTo(name);
        process.stdout.write(String.fromCharCode(27) + "]0" + name + String.fromCharCode(7));
        return this;
    }

    log(title, message, info) {
        const finalMessage = [];
        StringType.applyTo(title, false);
        StringType.applyTo(message, false);
        if(info) ObjectType.applyTo(info);

        if(this.options?.styles?.title) {
            const styles = [];
            this.options.styles.title.forEach(style => {
                const valid = CS.validate(style);
                if(valid === false) return;
                else styles.push(style);
            });

            finalMessage.push(styles.join(""));
        }
        
        finalMessage.push(title + CS.TextStyles.Reset + " ");

        if(this.options?.styles?.message) {
            const styles = [];
            this.options.styles.message.forEach(style => {
                const valid = CS.validate(style);
                if(valid === false) return;
                else styles.push(style);
            });

            finalMessage.push(message + CS.TextStyles.Reset);
        }

        if(info && this.options?.styles?.info) {
            const styles = [];
            this.options.styles.info.forEach(style => {
                const valid = CS.validate(style);
                if(valid === false) return;
                else styles.push(style);
            });

            finalMessage.push(styles.join(""));

            Object.keys(info).forEach(key => {
                finalMessage.push(`\n${key}${CS.TextStyles.Reset}: ${styles.join("")}${info[key]}${CS.TextStyles.Reset}`);
            });
        }

        console.log(finalMessage.join(""));
        return this;
    }

    count(...labels) {
        labels.forEach(label => {
            StringType.applyTo(label, false);
        });

        console.count(...labels);
        return this;
    }

    countReset(...labels) {
        labels.forEach(label => {
            StringType.applyTo(label, false);
        });

        console.countReset(...labels);
        return this;
    }

    group(title) {
        StringType.applyTo(title, false);

        let styles = [];
        if(this.options.styles.title.length > 0) {
            this.options.styles.title.forEach(style => {
                const valid = CS.validate(style);
                if(valid === false) return;
                else styles.push(style);
            });
        }

        styles = styles.join('');
        this.group_number += 1;
        console.group(`${styles}${title ?? `Console Grouping ${this.group_number}:${CS.TextStyles.reset}`}`);
        
        return this;
    }

    groupEnd() {
        console.groupEnd();
        this.group_number -= 1;

        return this;
    }

    error(title, message) {
        StringType.applyTo(title, false);
        StringType.applyTo(message, false);

        return new ErrorBuilder(title, message);
    }

    exception(title, message) {
        return this.error(title, message);
    }

    timer(title, action) {
        StringType.applyTo(title, false);
        StringType.applyTo(action, false);

        let styles = [];
        if(this.options.styles.title.length > 0) {
            this.options.styles.title.forEach(style => {
                const valid = CS.validate(style);
                if(valid === false) return;
                else styles.push(style);
            });
        }

        styles = styles.join('');

        if(action.toLowerCase() === "start") {
            this.timer_number += 1;
            console.time(`${styles}${title ?? `Console Timer ${this.timer_number}`}${CS.TextStyles.Reset}`);
        } else if(action.toLowerCase() === 'stop') {
            this.timer_number -= 1;
            console.timeEnd(`${styles}${title ?? `Console Timer ${this.timer_number}`}${CS.TextStyles.Reset}`);
        } else if(action.toLowerCase() === 'log') {
            console.timeLog(`${styles}${title ?? `Console Timer ${this.timer_number}`}${CS.TextStyles.Reset}`);
        }

        return this;
    }

    trace() {
        const error = new Error();
        return error.stack;
    }

    warn(message) {
        StringType.applyTo(message, true);

        const pS = `${CS.TextColors.Dim}${CS.TextColors.White}`;
        const tS = `${CS.TextColors.Red}`

        console.warn(`${pS}[${tS}!${pS}] ${tS}Warning${CS.TextStyles.Reset}: ${message ?? 'Something happened.'}`);
        return this;
    }
}

module.exports = Console;