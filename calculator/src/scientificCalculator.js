// Return the ceil value of the number, check if the number is < or = zero, then throw an Error
const computeCeil = (number) => {
  if(number <= 0)
  throw("ERROR::Number is less than or equal to zero..!");
  return Math.ceil(number);
}
// Return the floor value of the number, check if the number is < or = zero, then throw an Error
const computeFloor = (number) => {
  if(number <= 0)
  throw("ERROR::Number is less than or equal to zero..!");
  return Math.floor(number);
}
// Return the square root of the number, check if the number is < or = zero, then throw an Error
const computeSquareRoot = (number) => {
  if(number <= 0)
  throw("ERROR::Number is less than or equal to zero..!");
  return Math.sqrt(number);
}
// Return the exponent value of the number, check if the number is < or = zero, then throw an Error
const computePower = (number, powerOf) => {
  if(number <= 0 || powerOf <= 0)
  throw("ERROR::Number or power is less than or equal to zero");
  return Math.pow(number,powerOf);
}

module.exports = {
  computeCeil, computeFloor, computeSquareRoot, computePower
}
