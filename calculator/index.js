const chalk = require("chalk");

const mathCalculator = require("./src/mathCalculator");
const scientificCalculator = require("./src/scientificCalculator");

// Read choice from console and execute `npm start math` or `npm start scientific`
const choice = process.argv[2]; 
console.log(choice);
const mathNum1 = 20;
const mathNum2 = 4;
const scfNum = 9.5;


if (choice === "math") {
 // Display all math operations
 console.log(mathCalculator.addNumbers(mathNum1,mathNum2));
 console.log(mathCalculator.subNumbers(mathNum1,mathNum2));
 console.log(mathCalculator.mulNumbers(mathNum1,mathNum2));
} else if (choice === "scientific") {
  // Display all scientific operations
  console.log(scientificCalculator.computeCeil(scfNum));
  console.log(scientificCalculator.computeFloor(scfNum));
  console.log(scientificCalculator.computeSquareRoot(scfNum));
  
} else {
  console.log("Please enter valid choice..!");
}