const { expect } = require("chai");

const InsuranceData = require("../src/InsuranceData");

describe("Testing read file and filter data", function () {
  it("Testing read of csv line by line with valid file", function (done) {
    InsuranceData.readFileContentsLineByLine("./resources/insurance.csv", (err, fileContents) => {
      expect(err).to.be.equal(null);
      expect(fileContents).to.be.an("Array");
      expect(fileContents.length).to.be.equal(1339);
      done(err);
    });
  });

 

  it("Testing read of csv using streams with valid file", function (done) {
    InsuranceData.readFileContentsUsingStream("./resources/insurance.csv", (err, fileContents) => {
      expect(err).to.be.equal(null);
      expect(fileContents).to.be.an("Array");
      expect(fileContents.length).to.be.equal(1338);
      done(err);
    });
  });

  

 

  it("Testing filtering of data with female candidates with southwest", function (done) {
    let filteredData = [
      '38, male, 19.3, 0, yes, southwest, 15820.699',
      '39, female, 19.3, 2, no, southwest, 18820.699',
      '40, female, 19.3, 0, yes, northwest, 16000',
    ];

    InsuranceData.filterFemaleCandidates(filteredData, (err, result) => {
      expect(err).to.be.equal(null);
      expect(result.length).to.be.equal(1);
      expect(result[0]).to.be.equal('39, female, 19.3, 2, no, southwest, 18820.699');
      done(err);
    });
  });

 
});
