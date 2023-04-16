/* eslint no-console: 0 */
const readlineSync = require('readline-sync');
const calculator = require('./calculator');

let options = ['Add', 'Subtract', 'Multiply', 'Division'];

let keepDoing = true;
while (keepDoing) {
  console.log('------------------------------------------------');

  let opIndex = readlineSync.keyInSelect(options, 'What operation you want to do?');

  if (opIndex === -1) {
    break;
  } else {
    let lhs = readlineSync.questionInt('Enter first value ');
    let rhs = readlineSync.questionInt('Enter second value ');

    let result = calculator(options[opIndex].split('')[0], { lhs, rhs });
    console.log(`\n\t\tResult of ${options[opIndex]} is ${result}`);
  }
}
console.log('Thanks for using the calculator, bye...!');
