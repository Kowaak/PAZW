const calc = require("./calculator");

console.log("Moduł main.js");

console.log( calc.add(5, 6) );

console.log("Nazwa modułu: " + calc.config.name + ". Wersja: " + calc.config.version);