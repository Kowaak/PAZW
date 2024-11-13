const path = require("path");
const utils = require("util");

var log = utils.format("Nazwa pliku to %s", path.basename(__filename));

console.log(log);