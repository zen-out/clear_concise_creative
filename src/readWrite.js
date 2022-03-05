const fs = require("fs-extra")
const make_legit = require("make_legit")

function readFile(fileLocation) {
    let string = fs.readFileSync(fileLocation, 'utf8')

    return string;
}


/**
     * @Description 
     * 1. Will format the type of data you have and then write to the file accordingly
     * @example
     * let writeThis = ccc.writeFile("./data/writeToMe.txt", [1, 2, 3])
let writeObject = ccc.writeFile("./data/writeToMe.txt", { id: 1, name: "lesley" })
     * @author zen-out
     * @date 2022-03-05
     * @param {any} type
     * @param {any} "string"
     * @returns {any}
     */
function writeFile(fileLocation, type) {
    let stringed = make_legit.format(type, "string")
    fs.writeFileSync(fileLocation, stringed)

}
module.exports = { readFile, writeFile }