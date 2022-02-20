const events = require('events');
const fs = require('fs');

// EventEmitter object is used to assign listener functions triggered on specific events
let myEmitter = new events.EventEmitter();

let newWelcomeMessage = (data) => {
  console.log(`Welcome to Nodejs, what's your name? ${data}.`);
};

myEmitter.on('welcome', newWelcomeMessage);
myEmitter.emit('welcome', 'Codey');

// Buffer objects are used to handle binary data
const buffer = Buffer.from('Hello World');
console.log(buffer);
console.log(buffer.toString());

let readDataCallback = (err, data) => {
  if (err) {
    console.log(`Something went wrong: ${err}`);
  } else {
    console.log(`Provided file contained: ${data}`);
  }
};

// file.txt file is loaded using the readFile method of the fs module
fs.readFile('./file.txt', 'utf-8', readDataCallback);

// setImmediate function runs immediately after the current poll phase is completed
setImmediate(() => {
  console.log('Welcome to Node.js');
});