const fs = require("fs");
const directory = ".";
fs.readdir(directory, (err, files) => {
    
    if (err) {
    console.error(err);
    return;
    }
    for (let file of files) {
    console.log(file);
    }
    });