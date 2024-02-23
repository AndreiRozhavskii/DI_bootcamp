const fs = require("fs");

function displayFileContent() {
    
    fs.readFile("./text.txt", "utf8", (err, data) => {
    
    if (err) {
    console.error(err);
    return;
    }
   
    console.log(data);
    });
    }
    
   
    module.exports = displayFileContent;
    