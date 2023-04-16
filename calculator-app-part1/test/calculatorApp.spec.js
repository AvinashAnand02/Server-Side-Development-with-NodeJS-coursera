const chai = require('chai');
const expect = chai.expect;
const { addition, subtraction } = require('../src/calculatorApp');

describe('Addition Functionality', () => {
  
  it('Check for addition of two positive numbers and return the sum as positive number', () => {
    // Write Test Case Here
    expect(addition(5,9)).to.be.equal(14);
  });

  it('Check for addition of two negative numbers and return the sum as negative number.', () => {
    // Write Test Case Here
    expect(addition(-3,-5)).to.be.equal(-8);
  });

  it('Check if either of number is negative produce subtracted output.', () => {
    // Write Test Case Here
    expect(addition(7,-2)).to.be.equal(5);
  });


});

describe('Subtraction Functionality', () => {
  it('Check for subtracting two positive number and return positive subtraction', () => {
    // Write Test Case Here
    expect(subtraction(9,6)).to.be.equal(3);
  });
  it('Check if either of number is negative produce sum as output', () => {
    // Write Test Case Here
    expect(subtraction(4,-7)).to.be.equal(11);
  });
  it('Subtracting zero will produce zero as subtraction.', () => {
    // Write Test Case Here
    expect(subtraction(5,0)).to.be.equal(5);
  });
});
