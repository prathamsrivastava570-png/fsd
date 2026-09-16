const EventEmitter = require('events'); 
const myEmitter = new EventEmitter();

myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}! Welcome.`);
});

myEmitter.on('farewell', (name) => {
    console.log(`Goodbye, ${name}! See you soon.`);
});

myEmitter.emit('greet', 'Aman');
myEmitter.emit('farewell', 'Aman');