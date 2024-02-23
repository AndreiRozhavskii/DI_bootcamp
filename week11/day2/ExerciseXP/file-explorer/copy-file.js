const fs = require("fs");
const sourceFile = "source.txt";
const destinationFile = "destination.txt";

fs.readFile(sourceFile, "utf8", (err, data) => {
    if (err) {
    console.error(err);
    return;
    }
fs.writeFile(destinationFile, data, "utf8", (err) => {
       
    if (err) {
    console.error(err);
    return;
    }
console.log(`Copied content from ${sourceFile} to ${destinationFile}`);
});
});