const chai = require('chai');
const expect = chai.expect;
const { multiplication, division } = require('../src/calculatorApp');

describe('Multiplication Functionality', () => {
  it('Check for multiplying two positive number and return positive product', () => {
    expect(multiplication(3, 8)).to.equal(24);
  });

  it('Check for multiplying two negative numbers and return positive product', () => {
    expect(multiplication(-3, -6)).to.equal(18);
  });

  it('Check if either of number is negative produce negative product', () => {
    expect(multiplication(3, -7)).to.equal(-21);
  });

  it('Multiply zero will produce zero as product', () => {
    expect(multiplication(0, 8)).to.equal(0);
  });
});
describe('Division Functionality', () => {
  it('Check for divide two positive number and return positive output', () => {
    expect(division(39, 13)).to.equal(3);
  });

  it('Check for divide two negative numbers and return positive output', () => {
    expect(division(-60, -12)).to.equal(5);
  });

  it('Check if either of number is negative produce negative output', () => {
    expect(division(44, -11)).to.equal(-4);
  });

  it('Divide zero must produce error', () => {
    expect(division(39, 0)).to.equal('error');
  });
});
