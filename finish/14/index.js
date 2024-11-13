const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "files", filename);
}

// fs.rename(file("lorem1.txt"), file("lorem2.txt"), function(err) {

//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}.`);
//         return;
//     }

//     console.log("Zmieniono nazwę pliku lorem1.txt na lorem2.txt");

// });

// fs.rename(file("lorem2.txt"), path.join(__dirname, "newFiles", "lorem1.txt"), function(err) {

//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}.`);
//         return;
//     }

//     console.log("Przeniesiono plik files/lorem2.txt do newFiles/lorem1.txt");

// });

function moveFileTo(filepath, directory, cb) {

    filepath = path.join(__dirname, path.normalize(filepath));

    fs.mkdir(path.join(__dirname, directory), function(err) {

        if(err && err.code !== 'EEXIST') {
            return cb(err, filepath, directory);
        }

        fs.rename(filepath, path.join(__dirname, directory, path.basename(filepath)), function(err) {

            if(err) {
                return cb(err, filepath, directory);
            }

            cb(null, filepath, directory);

        });

    });

}

moveFileTo("files/lorem1.txt", "newFiles", function(err, filepath, directory) {

    if(err) {
        return console.log(`Wystąpił błąd: ${err.message}.`);
    }

    console.log(`Przeniesiono plik ${filepath} do katalogu ${directory}`);

});