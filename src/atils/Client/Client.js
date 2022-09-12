const Type = require("../Interface/Type.js");
const ClientIntents = require("../../enums/Client Intents.js");

const EventEmitter = require("node:events");

class Client extends EventEmitter {
    #options;
    constructor(options) {
        super({ captureRejections: true });
        this.#options = Object.assign({
            intents: [
                ClientIntents.DefaultEvents,
                ClientIntents.Uptime
            ]
        }, options);

        if(this.#options.intents.includes(ClientIntents.DefaultEvents)) {
            this.emit("ready");
        }

        if(this.#options.intents.includes(ClientIntents.Uptime)) {
            this.uptime = 0;
            setInterval(() => {
                this.uptime += 1;
            }, 1000);
        }
    }
}

module.exports = Client;