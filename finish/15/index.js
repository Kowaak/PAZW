const fs = require("fs");
const path = require("path");

function file(filename) {
    return path.join(__dirname, "files", filename);
}

// fs.rmdir(path.join(__dirname, "files"), function(err) {

//     if(err) {
//         console.log(`Wystąpił błąd: ${err.message}`);
//     } else {
//         console.log("Udało się usunąć katalog.");
//     }

// });

function rmdir(dir, cb) {

    var dirname = path.join(__dirname, dir);

    fs.rmdir(dirname, function(err) {

        if(err) {

            if(err.code !== "ENOTEMPTY") {
                return cb(err, dirname);
            }

            fs.readdir(dirname, function(err, files) {

                if(err) {
                    return cb(err, dirname);
                }

                var counter = 0;

                files.forEach(function(file, index) {

                    fs.unlink(path.join(dirname, file), function(err) {

                        if(!err) {
                            counter++;
                        }

                        if(index + 1 === files.length && counter !== files.length) {
                            return cb(new Error('Nie wszystkie pliki udało się usunąć.'), dir);
                        }

                        if(counter === files.length) {
                            return rmdir(dir, cb);
                        }

                    });

                });

            });

        } else {

            cb(null, dir);

        }

    });

}

rmdir("files", function(err, dirname) {

    if(err) {
        return console.log(`Wystąpił błąd: ${err.message}`);
    }

    console.log(`Usunięto katalog ${dirname}`);

});