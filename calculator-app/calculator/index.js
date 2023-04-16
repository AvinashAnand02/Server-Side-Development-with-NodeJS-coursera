const { add, subtract, multiply, divide } = require('./math');

function calculate(operation, {lhs, rhs}) {
  let result;
  switch(operation) {
    case 'A':
    case 'a':
      result = add(lhs, rhs);
      break;
    case 'S':
    case 's':
      result = subtract(lhs, rhs);
      break;
    case 'M':
    case 'm':
      result = multiply(lhs, rhs);
      break;
    case 'D':
    case 'd':
      result = divide(lhs, rhs);
      break;
    default:
      result = 'Unknown operation';
      break;
  }

  return result;
}

module.exports = calculate;
