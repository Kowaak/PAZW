const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "files", filename);
}

fs.watch(file("lorem1.txt"), function(eventType, filename) {

    fs.readFile(file(filename), "utf8", function(err, data) {

        if(!err) {
            fs.writeFile(file("lorem1uppercase.txt"), data.toUpperCase());
        }

    });

});