const fs = require("fs");
const Console = require("console").Console;
const gzip = require("zlib").createGzip();

var stream = fs.createReadStream("./text.txt", {
    highWaterMark: 32 * 1024
});

var logs = fs.createWriteStream("./logs.txt");
var errors = fs.createWriteStream("./errors.txt");

const myConsole = new Console(logs, errors);

var compressed = fs.createWriteStream("./text.txt.gz");

console.time("gzip");
stream.pipe(gzip).pipe(compressed).on("close", function() {

    console.timeEnd("gzip");

});

// stream.on("data", function(chunk) {

//     console.log("Wielkość kawałka: " + Math.round( (chunk.length / 1024) ) + "KB");
//     console.log(chunk);

// });

// stream.on("end", function() {

//     console.log("Odczytywanie pliku zakończone");

// });

// stream.pipe(process.stdout);

myConsole.log("Pierwsza wiadomość");
myConsole.log("Druga wiadomość");
myConsole.error("Wiadomość z błędem");