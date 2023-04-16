const { expect } = require("chai");

const SalesAnalyzer = require("../src/SalesAnalyzer");

describe("Testing read file and filter data process", function () {
  it("Testing read of csv with valid file", function (done) {
    SalesAnalyzer.readFileContents("./resources/Sales.csv", (err, fileContents) => {
      expect(err).to.be.equal(null);
      expect(fileContents).to.be.an("Array");
      expect(fileContents.length).to.be.equal(24999);
      done(err);
    });
  });



  it("Testing filtering of data with payment_method as credit", function (done) {
    let fileContents = [
      {
        "date": '20/11/18',
        "customer_id": '54446',
        "product_category": '502',
        "payment_method": 'paypal',
        'value [USD]': '181.24',
        'time_on_site [Minutes]': '20.8',
        "clicks_in_site": '13'
      },
      {
        "date": '20/11/18',
        "customer_id": '55746',
        "product_category": '510',
        "payment_method": 'paypal',
        'value [USD]': '761.52',
        'time_on_site [Minutes]': '88.6',
        "clicks_in_site": '59'
      },
      {
        "date": '20/11/18',
        "customer_id": '58534',
        "product_category": '514',
        "payment_method": 'credit',
        'value [USD]': '251.83',
        'time_on_site [Minutes]': '26.4',
        "clicks_in_site": '16'
      }];

    SalesAnalyzer.filterData(fileContents, (err, filteredData) => {
      expect(err).to.be.equal(null);
      expect(filteredData.length).to.be.equal(1);
      expect(filteredData[0].customer_id).to.be.equal("58534");
      expect(filteredData[0].payment_method).to.be.equal("credit");
      done(err);
    });
  });

  it("Testing write filtered data to text file with valid data", function (done) {
    let filteredData = JSON.stringify([{
      "date": '20/11/18',
      "customer_id": '58534',
      "product_category": '514',
      "payment_method": 'credit',
      'value [USD]': '251.83',
      'time_on_site [Minutes]': '26.4',
      "clicks_in_site": '16'
    }]);

    SalesAnalyzer.writeFilteredDataToFile(filteredData, (err, writeFileResults) => {
      expect(err).to.be.equal(null);
      expect(writeFileResults).to.be.equal("Successfully wrote filtered data to output.txt file..!");
      done(err);
    });
  });

});