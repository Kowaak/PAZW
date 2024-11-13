// const EventEmitter = require("events");

// var emitter = new EventEmitter();

// emitter.setMaxListeners(0);

// emitter.on("message", function(msg) {

//     console.log("Wiadomość: " + msg);

// });

// emitter.emit("message", "Witaj świecie!");

const Puller = require("./puller");

var puller = new Puller("http://api.example.com");

function printData(data) {

    console.log(`Otrzymane dane: ${data.data} z adresu: ${data.url}`);

}

puller.on("data", printData);

puller.pull();

setTimeout(function() {

    puller.stop(printData);

}, 5000);