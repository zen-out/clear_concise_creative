const fs = require("fs-extra")
    /**
     * @Description 
     * ccc.deletePath("./test/deleteThis2")
     * ccc.deletePath("./test/deleteThis2/delete.js")
     * @author zen-out
     * @date 2022-03-04
     * @param {any} path
     * @returns {any}
     */
function deletePath(path) {
    fs.removeSync(path)
}

module.exports = { deletePath };