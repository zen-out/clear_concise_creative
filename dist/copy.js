const automate_me = require("automate_me")
const { checkPath } = require("./checkPath")
const fs = require("fs-extra")
const copyFiles = require("copyFiles")
var path = require('path');
var process = require("process");


/**
 * @example
 * ccc.copyEverything("./src", "./test")
 * @author github.com/zen-out
 */
function copyEverything(moveFrom, moveTo) {
    // Loop through all the files in the temp directory
    fs.readdir(moveFrom, function(err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
            process.exit(1);
        }

        files.forEach(function(file, index) {
            // Make one pass and make the file complete
            var fromPath = path.join(moveFrom, file);
            var toPath = path.join(moveTo, file);
            console.log(fromPath)
            console.log(toPath)
            fs.stat(fromPath, function(error, stat) {
                if (error) {
                    console.error("Error stating file.", error);
                    return;
                }
                if (stat.isFile()) {
                    console.log("'%s' is a file.", fromPath);
                } else if (stat.isDirectory()) {
                    console.log("'%s' is a directory.", fromPath);
                }

                fs.copy(fromPath, toPath, function(error) {
                    if (error) {
                        console.error("File moving error.", error);
                    } else {
                        console.log("Moved file '%s' to '%s'.", fromPath, toPath);
                    }
                });
            });
        });
    })
}
/**
 * @example 
 * ccc.copy("./src/ ** /* ", "dist") // dist folder needs to exist first, moves 
 * ccc.copy("./src", "./dist", true)  // moves everything from src to dist
 * @author github.com/zen-out
 */
function copy(toCopy, copyTo, all = false) {
    console.log("path exists")
    if (all) {
        automate_me.runCommand(`rm -rf ${copyTo}/** && cp -r ${toCopy} ${copyTo}`)
    } else {
        copyFiles([toCopy, copyTo], {
            up: true
        }, () => {
            console.log(`you moved file(s) from ${toCopy} to ${copyTo}`)
        })
    }
}


module.exports = { copy, copyEverything };