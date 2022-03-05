const path = require("path")
const { see, hourglass } = require("code_clarity")
const fs = require("fs-extra")
    /**
     * @Description 
     * writeJSON('./db.json', array)
     * writeJSON('./db.json', object)
     * @author zen-out
     * @date 2022-03-04
     * @param {any} filePath
     * @param {any} object
     */
function writeJSON(filePath, object) {
    fs.outputJsonSync(filePath, object)
}

/**
 * @Description 
 * let getJSON = readJSON("./db.json")
 * @author zen-out
 * @date 2022-03-04
 * @param {any} filePath
 * @returns {object}
 */
function readJSON(filePath) {
    let readFromFile = fs.readJsonSync(filePath)
    return readFromFile
}

// let getDirectory = getDirectoryStructure("./tree")
// let structuredPath = "./tree/structure/index.json"

// // writeJSON("./tree/structure/index.json", getDirectory)
// let readFromFile = readJSON(structuredPath)
//     // console.log("🚀 ~ file: playground.js ~ line 23 ~ readFromFile", JSON.stringify(readFromFile))

/**
 * @example
 * ccc.appendToJSON("./data/appendToMe.json", "test", { id: "lesley" })
 * @Description
 * 1. Grabs JSON from json file
 * 2. If the key does not exist, then it will create a new key and assign the object 
 * 3. If the key does exist, and it is not an array 
 * 4. It will create an array and it will push the object into the array 
 * @author zen-out
 * @date 2022-03-04
 * @param {any} "1:30PM"
 * @returns {any}
 */
function appendToJSON(filePath, key, object) {
    let readFromFile = readJSON(filePath)
    let getKey = readFromFile[key]
    if (getKey === undefined) {
        readFromFile[key] = object
    } else {
        if (Array.isArray(getKey)) {
            getKey = getKey.push(object)
            readFromFile[key] = getKey;
        } else {
            let newArr = []
            newArr.push(getKey)
            newArr.push(object)
            readFromFile[key] = newArr;
        }
    }
    writeJSON(filePath, readFromFile)
}

/**
 * @Description 
 * 1. Reads from json file 
 * 2. Replaces object depeneding on array passed in 
 * @example
 * let objectDir = ["opts", "theme_opts", "codepen"]
ccc.replaceJSON("./data/appendToMe.json", objectDir, { "sexylink": "link" })
 * @author zen-out
 * @date 2022-03-05
 * @param {any} filePath
 * @param {any} filePath
 * @returns {any}
 */
function replaceJSON(filePath, arrDir, objectToReplace) {
    let readFromFile = readJSON(filePath)
    let currObj = readFromFile
    for (let i = 0; i < arrDir.length; i++) {
        let getName = arrDir[i]
        currObj = currObj[getName]
    }
    let nameOne = arrDir[0]
    if (arrDir.length === 3) {
        let nameTwo = arrDir[1]
        let nameThree = arrDir[2]
        readFromFile[nameOne][nameTwo][nameThree] = objectToReplace
        writeJSON(filePath, readFromFile)
    } else if (arrDir.length == 2) {
        let nameTwo = arrDir[1]
        readFromFile[nameOne][nameTwo] = objectToReplace
        writeJSON(filePath, readFromFile)
    } else {
        readFromFile[nameOne] = objectToReplace
        writeJSON(filePath, readFromFile)
    }
}

module.exports = { writeJSON, readJSON, appendToJSON, replaceJSON }