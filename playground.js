/**********************************************
 * Organization of Folders
 * ==================================
 * problem: we need to have a place for everything. 
 * what should be: we should be quite organized in our code
 * what actually is: it's hard, like, really hard, to keep our directories and things organized. 
 * hypothesis: have a better method of keeping things organized, follow the marie kondon methodology in cleaning folders, function, classes, files in your work, spark complete joy here. 
 * 
 * Feature: 
 * 
 * 
 ********************************************/
const ccc = require("./index.js")
const fs = require("fs-extra")
const test_waters = require("test_waters")
const { see, hourglass } = require("code_clarity")

ccc.appendFile("./readMe.txt", { yo: "whatsup" })
let objectDir = ["opts", "theme_opts", "codepen"]
ccc.replaceJSON("./data/appendToMe.json", ["opts", "theme_opts", "codepen"], {
    "enable_for": [
        "examples"
    ],
    "options": {
        "js_external": "hellooo",
        "js_pre_processor": "babel"
    }
})