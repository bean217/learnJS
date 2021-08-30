const EventEmitter = require('events');

// *** Event Emitter Module ***

// Create emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Create Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');