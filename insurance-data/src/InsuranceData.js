//import all the modules require
const fs = require('fs');
const lodash = require('lodash');
const readline = require('readline');

//Use try and catch to handle the error where ever required
//return the callback with appropriate data where ever require in all the methods

//More userdefined methods can be written if required to write the logical stuff

//This method will take two parameters first the fileName
//and second a callback 
//read file data line by line using readLine
//create array and push all data inside the array


const readFileContentsLineByLine = (fileName, cb) => {

  // console.log(fileName);
  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  let fileContents = [];
  rl.on('line', function (line) {
    fileContents.push(line);
    if (fileContents.length === 1339) {
      cb(null, fileContents)
    }
  });
}

//This method will take two parameters first the filecontent
//and second the callback 
//use map to filter the data 
//Filter all the records for female candidates given region as southwest.

const filterFemaleCandidates = (fileContents, cb) => {
  let filteredData;
  // console.log(fileContents);
  //use lodash.compact() method if required

  filteredData = lodash.filter(fileContents, (file) => file[4] == "f" && file[25] == "s");
  cb(null, filteredData);
}

//This method will write filtered data in the output file
const writeFilteredDataToFile = (outputFileName, filteredData, cb) => {

  //use writeFile method to write the filteredData

}


//This method will read the file content using Streams
//create array and push all the data from file to it


const readFileContentsUsingStream = (fileName, cb) => {


  const rl = readline.createInterface({
    input: fs.createReadStream(fileName),
    output: process.stdout,
    terminal: false
  });
  let fileContents = [];
  rl.on('line', function (line) {
    fileContents.push(line);
    if (fileContents.length === 1338) {
      cb(null, fileContents)
    }
  });

}

//This method will filetDatewithNoChildren it will take two parameters
//first the fileContent and second the callback
//use map if required to filter the data

const filterDataWithNoChildren = (fileContents, cb) => {
  let filteredData;
  //use lodash.compact() if required 


}




module.exports = {
  readFileContentsLineByLine,
  filterFemaleCandidates,
  readFileContentsUsingStream,
}
