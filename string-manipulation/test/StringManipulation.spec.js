const { expect } = require("chai");

const StringManipulation = require("../src/StringManipulation");

describe("Testing string manipulation methods", function () {
  it("Testing count the number of characters in the given string", function () {
    expect(StringManipulation.countCharacters("Hi, welcome to learning programming")).to.be.equal(35);
    expect(StringManipulation.countCharacters("")).to.be.equal(0);
  });

  it("Testing count the number of vowels in the given string", function () {
    expect(StringManipulation.countVowels("Programming")).to.be.equal(3);
    expect(StringManipulation.countVowels("Hi, welcome to learning programming")).to.be.equal(11);
    expect(StringManipulation.countVowels("")).to.be.equal(0);
  });

  it("Testing check the existence of the given string in the specified string", function () {
    expect(StringManipulation.checkExistenceOfStr("Hi, welcome to learning programming", "welcome")).to.be.equal(true);
    expect(StringManipulation.checkExistenceOfStr("Hi, welcome to learning programming", "Hello")).to.be.equal(false);
    expect(StringManipulation.checkExistenceOfStr("Programming", "gram")).to.be.equal(true);
  });

  it("Testing replace word with another word in a string", function () {
    expect(StringManipulation.replaceWord("Hi, welcome to learning programming", "programming", "platform")).to.be.equal("Hi, welcome to learning platform");
    expect(StringManipulation.replaceWord("Hi, welcome to learning programming", "Hello", "Hi")).to.be.equal("Hi, welcome to learning programming");
  });

  it("Testing convert specified string into title case", function () {
    expect(StringManipulation.titleCaseConversion("Hi, welcome to learning programming")).to.be.equal("Hi, Welcome To Learning Programming");
    expect(StringManipulation.titleCaseConversion("")).to.be.equal("");
  });

  it("Testing find largest word in the specified string", function () {
    expect(StringManipulation.findLongestWord("Hi, welcome to learning programming")).to.be.equal("programming");
    expect(StringManipulation.findLongestWord("")).to.be.equal("");
  });
});

