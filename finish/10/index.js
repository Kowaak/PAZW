const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// var prize = [100, 1000, 2000, 400000, 50000];

// rl.question("Wybierz sejf od 1 do 5\n", function(answer) {

//     console.log(`Wygrałeś ${prize[parseInt(answer) - 1]} PLN.`);

//     rl.close();

// });

// rl.setPrompt("Wpisz coś:\n>>> ");

// rl.on("line", function(line) {

//     if(line === "exit") {
//         return rl.close();
//     }

//     console.log(`Wpisałeś: ${line}\n`);

//     rl.prompt();

// });

var percentage = 0;

function printPercentage() {

    if(percentage >= 100) {
        rl.write("\nZakończono wczytywanie.");
        return rl.close();
    }

    percentage += 5;

    readline.clearLine(rl, 0);
    readline.cursorTo(rl, 0);
    rl.write(`Postęp: ${percentage}%`);

    setTimeout(printPercentage, 200);

}

printPercentage();