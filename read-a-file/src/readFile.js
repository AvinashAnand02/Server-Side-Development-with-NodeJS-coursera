const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  let newArr = [];
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      let fileContents = data.toString();
      fileContents.split(/\r?\n/).forEach(line => {
        newArr.push(line.toUpperCase());
      });
      return newArr;
      resolve(newArr);
    })

  });

};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {

  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = (fileName, cb) => {
  let newArr = [];
  if (fs.existsSync(fileName)) {
    fs.readFile(fileName, (err, data) => {
      let fileContents = data.toString();
      fileContents.split(",").forEach(line => {
        newArr.push(line.toUpperCase());
      });
      cb(null, newArr);
    })
  }
  else
    cb("Encountered error while reading file contents..!",null)


};

module.exports = {
  readAndConvertFileContents,
};
