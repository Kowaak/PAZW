const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "files", filename);
}

// fs.mkdir(path.join(__dirname, "files"), function(err) {

//     if(err) {

//         if(err.code === "EEXIST") {
//             console.log("Katalog już istnieje.");
//             return;
//         }

//         console.log(`Nie udało się utworzyć katalogu. Powód: ${err.message}.`);

//         throw err;
//     }

//     console.log("Katalog files został utworzony.");

// });

// fs.writeFile(file("lorem1.txt"), "", function(err) {

//     if(err) {
//         console.log(`Nie udało się utworzyć pliku. Powód: ${err.message}.`);
//         return;
//     }

//     console.log("Plik lorem1.txt został utworzony.");

// });

// fs.appendFile(file("lorem1.txt"), Date.now() + "\n", function(err) {

//     if(err) {
//         console.log(`Nie udało się dodać treści do pliku. Powód: ${err.message}.`);
//         return;
//     }

//     console.log("Dodano treść do pliku lorem1.txt.");

// });

// var lorem2 = fs.createWriteStream(file("lorem2.txt"));

// lorem2.on("finish", function() {

//     console.log("Zakończono kopiowanie treści pliku.");

// });

// var lorem1 = fs.createReadStream(file("lorem1.txt"));

// lorem1.pipe(lorem2);

// fs.mkdtemp(path.join(__dirname, "uploads-"), function(err, dir) {

//     if(err) {
//         console.log(`Nie udało sie utworzyć tymczasowego katalogu. Powód: ${err.message}.`);
//         return;
//     }

//     console.log(`Utworzono tymczasowy katalog: ${dir}`);

// });

var tempDir = fs.mkdtempSync(path.join(__dirname, "uploads-"));

console.log(`Utworzono tymczasowy katalog: ${tempDir}`);