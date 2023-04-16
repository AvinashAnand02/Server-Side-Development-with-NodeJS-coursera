const { expect } = require("chai");

const LodashExample = require("../src/LodashExample");

describe("Testing functions written using lodash", function () {
  it("Testing find maximum value from number array", function () {
    expect(LodashExample.findMaxValue([1, 70, 10, 30])).to.be.equal(70);
    expect(LodashExample.findMaxValue([-10, -70, -1, -30])).to.be.equal(-1);
  });

  it("Testing filter of values greater than certain value from numbers array", function () {
    expect(LodashExample.filterValues([1, 70, 10, 30], 10)).to.be.deep.equal([70, 30]);
    expect(LodashExample.filterValues([-10, -70, -1, -30], -30)).to.be.deep.equal([-10, -1]);
  });

});
