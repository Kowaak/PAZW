const fs = require("fs");
const path = require("path");

// fs.exists(path.join(__dirname, "files", "lorem1.txt"), function(exists) {

//     if(exists) {
//         console.log("Plik istnieje");
//     } else {
//         console.log("Plik nie istnieje");
//     }

// });

// console.log("To wykona się przed wyświetleniem czy plik istnieje.");

// fs.stat(path.join(__dirname, "files", "lorem2.txt"), function(err, stats) {

//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}.`);
//         throw err;
//     }

//     console.log(`Data utworzenia: ${stats.birthtime}`);
//     console.log(`Data ostatniej modyfikacji: ${stats.mtime}`);
//     console.log(`isFile: ${stats.isFile()}`);
//     console.log(`isDirectory: ${stats.isDirectory()}`);

// });

// console.log("To wykona się przed wyświetleniem statystyk.");

try {
    var stats = fs.statSync(path.join(__dirname, "files", "lorem4.txt"));

    console.log(stats);
} catch(e) {
    console.log(`Wystąpił błąd: ${e.message}.`);
}

// fs.readdir(path.join(__dirname, "files"), function(err, files) {

//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}.`);
//         throw err;
//     }

//     files.forEach(function(filename) {

//         fs.stat(path.join(__dirname, "files", filename), function(err, stats) {

//             if(err) {
//                 console.log(`Wystąpił błąd: ${err.message}.`);
//                 throw err;
//             }

//             console.log(`Informacje o pliku ${filename}:`);
//             console.log(`Data utworzenia: ${stats.birthtime.getFullYear()}\n`);

//         });

//     });

// });

// console.log("To wykona się przed wyświetleniem zawartości katalogu.");