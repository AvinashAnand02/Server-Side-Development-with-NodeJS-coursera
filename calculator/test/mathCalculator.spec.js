const { expect } = require("chai");

const mathCalculator = require("../src/mathCalculator");

describe("Testing math calculator methods", function () {
  it("Testing addition of two numbers", function () {
    expect(mathCalculator.addNumbers(5, 10)).to.be.equal(15);
    expect(mathCalculator.addNumbers(-5, -10)).to.be.equal(-15);
    expect(mathCalculator.addNumbers(5, -10)).to.be.equal(-5);
    expect(mathCalculator.addNumbers(-5, 10)).to.be.equal(5);
    expect(mathCalculator.addNumbers(4.5, 6.9)).to.be.equal(11.4);
  });

  it("Testing subtraction of two numbers", function () {
    expect(mathCalculator.subNumbers(5, 10)).to.be.equal(-5);
    expect(mathCalculator.subNumbers(10, 5)).to.be.equal(5);
    expect(mathCalculator.subNumbers(5, -10)).to.be.equal(15);
    expect(mathCalculator.subNumbers(-10, 5)).to.be.equal(-15);
    expect(mathCalculator.subNumbers(-4.5, 6.9)).to.equal(-11.4);
  });

  it("Testing multiplication of two numbers", function () {
    expect(mathCalculator.mulNumbers(5, 10)).to.be.equal(50);
    expect(mathCalculator.mulNumbers(-5, 10)).to.be.eq(-50);
    expect(mathCalculator.mulNumbers(5, -10)).to.be.equal(-50);
    expect(mathCalculator.mulNumbers(-5, -10)).to.be.equal(50);
    expect(mathCalculator.mulNumbers(4.5, 6.9)).to.be.equal(31.05);
  });

  it("Testing division of two numbers", function () {
    expect(mathCalculator.divNumbers(10, 5)).to.be.equal(2);
    expect(mathCalculator.divNumbers(5, 10)).to.be.equal(0.5);
    expect(mathCalculator.divNumbers(0, 5)).to.be.equal(0);
    expect(() => mathCalculator.divNumbers(10, 0)).to.throw("ERROR::Divide by zero error..!");
  });

  it("Testing modulo of two numbers", function () {
    expect(mathCalculator.moduloNumbers(10, 5)).to.be.equal(0);
    expect(mathCalculator.moduloNumbers(0, 10)).to.be.equal(0);
    expect(() => mathCalculator.moduloNumbers(10, 0)).to.throw("ERROR::Invalid number..!");
  });
});
