const { expect } = require("chai");

const scientificCalculator = require("../src/scientificCalculator");

describe("Testing scientific calculator methods", function () {
  it("Testing compute ceil value of number", function () {
    expect(scientificCalculator.computeCeil(9.5)).to.be.equal(10);
    expect(scientificCalculator.computeCeil(9.1)).to.be.equal(10);
    expect(scientificCalculator.computeCeil(9.666)).to.be.equal(10);
    expect(() => scientificCalculator.computeCeil(0)).to.throw("ERROR::Number is less than or equal to zero..!");
    expect(() => scientificCalculator.computeCeil(-10)).to.throw("ERROR::Number is less than or equal to zero..!");
  });

  it("Testing compute floor value of number", function () {
    expect(scientificCalculator.computeFloor(9.5)).to.be.equal(9);
    expect(scientificCalculator.computeFloor(9.1)).to.be.equal(9);
    expect(scientificCalculator.computeFloor(9.006)).to.be.equal(9);
    expect(() => scientificCalculator.computeFloor(0)).to.throw("ERROR::Number is less than or equal to zero..!");
    expect(() => scientificCalculator.computeFloor(-10)).to.throw("ERROR::Number is less than or equal to zero..!");
  });

  it("Testing compute square root of number", function () {
    expect(scientificCalculator.computeSquareRoot(4)).to.be.equal(2);
    expect(scientificCalculator.computeSquareRoot(15.8)).to.be.equal(3.9749213828703582);
    expect(() => scientificCalculator.computeSquareRoot(0)).to.throw("ERROR::Number is less than or equal to zero..!");
    expect(() => scientificCalculator.computeSquareRoot(-10)).to.throw("ERROR::Number is less than or equal to zero..!");
  });

  it("Testing compute exponential of number", function () {
    expect(scientificCalculator.computePower(1, 10)).to.be.equal(1);
    expect(scientificCalculator.computePower(3, 3)).to.be.equal(27);
    expect(() => scientificCalculator.computePower(-3, 3)).to.throw("ERROR::Number or power is less than or equal to zero");
    expect(() => scientificCalculator.computePower(5, 0)).to.throw("ERROR::Number or power is less than or equal to zero");
  });
});