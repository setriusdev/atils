const Type = require("../Interface/Type.js");
const ClientIntents = require("../../enums/Client Intents.js");

const EventEmitter = require("node:events");

/**
 * @class
 * @description Creates a simple Client using Node's Event Emitter.
 */
class Client extends EventEmitter {
    #options;
    /**
     * Constructor method for the Client Class.
     * @param {Object} options The options for the Client.
     * @param {Array} options.intents The Client Intents for atils' usage.
     */
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