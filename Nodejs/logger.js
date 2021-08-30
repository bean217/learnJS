const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', { id: 1234, msg: msg});
    }
}

module.exports = Logger;