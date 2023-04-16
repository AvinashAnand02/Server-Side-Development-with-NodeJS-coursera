const fs = require('fs')
const readline = require('readline')
const lodash = require('lodash');
//import all the require modules

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName 
//and second the callback
const readFileContents = (fileName, cb) => {
  try {
    if (fs.existsSync(fileName)) {

      const rl = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout,
        terminal: false
      });
      let fileContents = [];
      rl.on('line', function (line) {
        fileContents.push(line);
        if (fileContents.length === 19922) {
          cb(null, fileContents)
        }
      });
    }
    else
      cb("Encountered error while reading file contents..!", null)
  }
  catch (err) {
    console.log(err);
  }
}

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  let sortedData = lodash.sortBy(fileContents, file => "retail_price");
  let RsortedData = lodash.reverse(sortedData);
  cb(null, RsortedData);
}

//This method will sortDataonRating 
const sortDataOnRating = (fileContents, cb) => {
  //use map where ever required 
  fileContents.shift();

  //use lodash sortBy() and compact() if required
  let sortedData = lodash.sortBy(fileContents, file => "product_rating");

  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
}

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {

}





module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,

}