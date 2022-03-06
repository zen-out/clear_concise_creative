const { deletePath } = require("./src/deletePath")
const { readJSON, writeJSON, appendToJSON, replaceJSON } = require("./src/json")
const { readFile, writeFile, appendFile } = require("./src/readWrite")
module.exports = { readJSON, writeJSON, deletePath, readFile, writeFile, appendToJSON, replaceJSON, appendFile }