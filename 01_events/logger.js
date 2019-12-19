const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        this.emit('londonCalling', { id: 2, url: 'https://' });
    }
}

module.exports = Logger;