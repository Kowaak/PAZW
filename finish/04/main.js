const add = require("./add");

add.number = 1;

const calculator = require("./calculator");

console.log( calculator.add.number );

// console.log("Moduł main.js");
// console.log( add(5, 6) );

// console.log(message);

// console.log("Ścieżka do pliku to: " + __filename);
// console.log("Ścieżka do katalogu to: " + __dirname);

// console.log("Czy to główny moduł? " + (require.main === module ? "Tak." : "Nie."));