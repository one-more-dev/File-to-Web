const path = require("path");

function pageTitle(fileInUse){
        const file = path.parse(fileInUse);
        return file.name
}

module.exports = { pageTitle }