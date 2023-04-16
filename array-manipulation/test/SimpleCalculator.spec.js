const { expect } = require("chai");

const SimpleCalculator = require("../src/SimpleCalculator");

describe("Testing simple calculator methods", function () {
  it("Testing addition of two numbers", function () {
    expect(SimpleCalculator.addNumbers(5, 10)).to.be.equal(15);
    expect(SimpleCalculator.addNumbers(-5, -10)).to.be.equal(-15);
    expect(SimpleCalculator.addNumbers(5, -10)).to.be.equal(-5);
    expect(SimpleCalculator.addNumbers(-5, 10)).to.be.equal(5);
  });

  it("Testing subtraction of two numbers", function () {
    expect(SimpleCalculator.subNumbers(5, 10)).to.be.equal(-5);
    expect(SimpleCalculator.subNumbers(10, 5)).to.be.equal(5);
    expect(SimpleCalculator.subNumbers(5, -10)).to.be.equal(15);
    expect(SimpleCalculator.subNumbers(-10, 5)).to.be.equal(-15);
  });

  it("Testing multiplication of two numbers", function () {
    expect(SimpleCalculator.mulNumbers(5, 10)).to.be.equal(50);
    expect(SimpleCalculator.mulNumbers(-5, 10)).to.be.eq(-50);
    expect(SimpleCalculator.mulNumbers(5, -10)).to.be.equal(-50);
    expect(SimpleCalculator.mulNumbers(-5, -10)).to.be.equal(50);
  });

  it("Testing division of two numbers", function () {
    expect(SimpleCalculator.divNumbers(10, 5)).to.be.equal(2);
    expect(SimpleCalculator.divNumbers(5, 10)).to.be.equal(0.5);
    expect(SimpleCalculator.divNumbers(10, 0)).to.be.equal("Please provide valid numbers..!");
    expect(SimpleCalculator.divNumbers(0, 5)).to.be.equal(0);
  });
});