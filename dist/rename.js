const fs = require("fs-extra")
const { getDirNames } = require("./readWrite")

/**
 * @example
 * rename("./test", "jsx", "js")
 * @author zen-out
 * @date 2022-03-25
 * @param {any} filepath
 * @param {any}  ext1
 * @param {any}  ext2
 * @returns {any}
 */
function rename(filepath, ext1, ext2) {
    let names = getDirNames(filepath, ext1)
    for (let i = 0; i < names.length; i++) {
        // console.log(names[i])
        fs.renameSync(`${filepath}/${names[i]}${ext1}`, `${filepath}/${names[i]}${ext2}`)
    }
}
module.exports = { rename }