const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '..', 'tasks.json');


const readDataFromFile = () => {
    try {
      const data = fs.readFileSync(dataFilePath, 'utf8');
      return JSON.parse(data);
    } catch (err) {
      console.error('Error reading data from file:', err);
      return [];
    }
  };
  
  const writeDataToFile = (data) => {
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (err) {
      console.error('Error writing data to file:', err);
    }
  };

  module.exports = {
    readDataFromFile,
    writeDataToFile
}