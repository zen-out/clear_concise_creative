function list() {
    let string = `
    const ccc = require("clear_concise_creative")
    ccc.checkPath("./docs") // returns boolean
    ccc.copy("./src/**.js", "./dist") 
    // dist folder needs to exist first, moves src into dist/src/**// 
    // ccc.copy("./src/**/*", "dist")
    // moves everything from src to dist
    // ccc.copyEverything("./src", "./test")
    ccc.deletePath("./test/deleteThis2")
    ccc.deletePath("./test/deleteThis2/delete.js")
    ccc.writeJSON('./db.json', array)
    ccc.writeJSON('./db.json', object)
    ccc.readJSON("./db.json")
    ccc.appendToJSON(fileName, string, object)
    ccc.replaceJSON(stringFile, arrOfDescendingKeys, object)
    ccc.getJSONObject(stringFile, arrOfDescendingKeys)
    ccc.mergeJSONObject(stringFile, arrOfDescendingKeys, object)
    ccc.addToNestedJSON(stringFile, arrOfDescendingKeys, objectToAppend)
    ccc.listDir("./")
    ccc.getDirNames("./", ".html")
    ccc.writeFile(stringFile, string)
    ccc.readFile(stringFile)
    ccc.appendFile(stringFile, data)
    ccc.rename("./test", "jsx", "js")
    `
    console.log(string)
    return string;
}
module.exports = { list }