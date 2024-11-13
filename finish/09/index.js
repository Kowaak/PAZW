// process.stdout.write("Podaj wiadomość\n> ");

// process.stdin.on("readable", function() {

//     var line = process.stdin.read();

//     if(line === null) {
//         return;
//     }

//     if(line.toString().trim() === "close") {
//         return process.exit();
//     }

//     console.log(line);
//     process.stdout.write("Wpisałeś: " + line + "\n> ");

// });

// process.on("uncaughtException", function(err) {

//     console.log("Wystąpił błąd: " + err.message);

// });

// var a = b + 1;

// console.log("Program nadal działa.");

// console.log("Program wykonuje kod.");

// process.once("beforeExit", function() { // exit

//     console.log("Opóźniamy zamknięcie procesu o 2 sekundy.");

//     setTimeout(function() {
//         console.log("Zamykamy process.");
//     }, 2000);

// });

// console.log("Program nie ma już nic do wykonania.");

// console.log(process.argv.slice(2));

setTimeout(function() {}, 10000);

process.once("SIGINT", function() {
    console.log("Naciśnij CTRL+C by zakończyć");
});