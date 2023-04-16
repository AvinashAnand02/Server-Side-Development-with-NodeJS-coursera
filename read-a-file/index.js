const readFile = require("./src/readFile");

const fileName = "./resources/input.txt";

readFile.readAndConvertFileContents(fileName, (err, results) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Contents of ${fileName} after conversion is::`, results);
  }
});
