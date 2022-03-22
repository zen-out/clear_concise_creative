const { checkPath } = require("./checkPath")
const { copy } = require("./copyFiles")
const { deletePath } = require("./deletePath")
const { readJSON, writeJSON, appendToJSON, replaceJSON, mergeJSONObject, getJSONObject, addToNestedJSON } = require("./json")
const { listDir, readFile, writeFile, appendFile, getDirNames } = require("./readWrite")

function list() {
    let string = `const { checkPath } = require(". / checkPath ")
        const { copy } = require("./copyFiles")
        const { deletePath } = require("./deletePath")
        const { readJSON, writeJSON, appendToJSON, replaceJSON, mergeJSONObject, getJSONObject, addToNestedJSON } = require("./json")
        const { listDir, readFile, writeFile, appendFile, getDirNames } = require("./readWrite")
        "`
    console.log(string)
    return string;
}
module.exports = { list, listDir, checkPath, copy, readJSON, writeJSON, deletePath, readFile, writeFile, appendToJSON, replaceJSON, appendFile, mergeJSONObject, getJSONObject, addToNestedJSON, getDirNames }