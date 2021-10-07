const { errorMonitor } = require('events');
const EventEmitter = require('events');

const myEmitter = new EventEmitter()

let x = 1;

// emitters will be invoked in order of registration
myEmitter.on('start', () => {
  console.log('starting!');
});

myEmitter.on('start', () => {
  console.log('starting a second handler!');
});

myEmitter.on('end', () => {
  console.log('ending!');
});

// once will only even be handled on first emit - subsequent emits are ignored
myEmitter.once('single', () => {
  console.log('this event will only be executed once!');
})

// you can listen for an error event and handle gracefully without crashing node
myEmitter.on('error', (err) => {
  console.log(err);
})

myEmitter.on('add', () => {
  x++;
  console.log(`x is now ${x}`);
})

myEmitter.on('async', (time) => {
  console.log(`waited ${time} to execute`);
})


// Showing the sync behavior of events
console.log('starting example!');
myEmitter.emit('start');

myEmitter.emit('single');
myEmitter.emit('single');

myEmitter.emit('add');
myEmitter.emit('add');

myEmitter.emit('error', new Error('whoops!'));

// can use in conjunction with async programming methods such as setTimeout to run events async
// remember that events themselves execute syncnerously!
// from node docs: "When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. Any values returned by the called listeners are ignored and discarded." https://nodejs.org/api/events.html
setTimeout(() => myEmitter.emit('async', 1000), 1000)

myEmitter.emit('end');