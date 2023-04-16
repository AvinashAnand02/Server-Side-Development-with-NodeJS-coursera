const { expect } = require("chai");

const Ecommerce = require("../src/Ecommerce");

describe("Testing read file and sort data", function () {
  it("Testing read of csv with valid file", function (done) {
    Ecommerce.readFileContents("./resources/data_flipkart_product_sample.csv", (err, fileContents) => {
      expect(err).to.be.equal(null);
      expect(fileContents).to.be.an("Array");
      expect(fileContents.length).to.be.equal(19922);
      done(err);
    });
  });

  it("Testing read of csv with invalid file", function (done) {
    Ecommerce.readFileContents("./testfile.csv", (err, fileContents) => {
      expect(err).to.not.be.equal(null);
      expect(err).to.be.equal("Encountered error while reading file contents..!");
      done(null)
    });
  });

 
  it("Testing sorting of data on price", function (done) {
    let fileContents = [
      {
        pid: 'ABQEJ7YQTNQGMXZV',
        product_name: 'Momin Libas AK2414 Kashibo Solid Abaya No',
        brand: 'Momin Libas',
        product_url: 'http://www.flipkart.com/momin-libas-ak2414-kashibo-solid-abaya-no/p/itmej7ypx52wk3th?pid=ABQEJ7YQTNQGMXZV',
        retail_price: '3999',
        product_rating: 'No rating available'
      },
      {
        pid: 'ACBEA4494GNXG3TZ',
        product_name: "Oye Top With Skirts Girl's  Combo",
        brand: '',
        product_url: 'http://www.flipkart.com/oye-top-skirts-girl-s-combo/p/itmecjt7xhnghwmz?pid=ACBEA4494GNXG3TZ',
        retail_price: '749',
        product_rating: '4'
      },
      {
        pid: 'ACBEA4495H4WS89A',
        product_name: "Oye Top With Skirts Girl's  Combo",
        brand: '',
        product_url: 'http://www.flipkart.com/oye-top-skirts-girl-s-combo/p/itmecjt7pw6xfygy?pid=ACBEA4495H4WS89A',
        retail_price: '549',
        product_rating: '4'
      }
    ]

    Ecommerce.sortDataOnPrice(fileContents, (err, result) => {
      expect(err).to.be.equal(null);
      expect(result[0].retail_price).to.be.equal("549");
      expect(result[1].retail_price).to.be.equal("749");
      expect(result[2].retail_price).to.be.equal("3999");
      done(err);
    });
  });

  it("Testing sorting of data on rating", function (done) {
    let fileContents = [
      {
        pid: 'ABQEJ7YQTNQGMXZV',
        product_name: 'Momin Libas AK2414 Kashibo Solid Abaya No',
        brand: 'Momin Libas',
        product_url: 'http://www.flipkart.com/momin-libas-ak2414-kashibo-solid-abaya-no/p/itmej7ypx52wk3th?pid=ABQEJ7YQTNQGMXZV',
        retail_price: '3999',
        product_rating: 'No rating available'
      },
      {
        pid: 'ACBEA4494GNXG3TZ',
        product_name: "Oye Top With Skirts Girl's  Combo",
        brand: '',
        product_url: 'http://www.flipkart.com/oye-top-skirts-girl-s-combo/p/itmecjt7xhnghwmz?pid=ACBEA4494GNXG3TZ',
        retail_price: '749',
        product_rating: '2'
      },
      {
        pid: 'ACBEA4495H4WS89A',
        product_name: "Oye Top With Skirts Girl's  Combo",
        brand: '',
        product_url: 'http://www.flipkart.com/oye-top-skirts-girl-s-combo/p/itmecjt7pw6xfygy?pid=ACBEA4495H4WS89A',
        retail_price: '549',
        product_rating: '4'
      }
    ]

    Ecommerce.sortDataOnRating(fileContents, (err, result) => {
      expect(err).to.be.equal(null);
      expect(result.length).to.be.equal(2);
      expect(result[0].product_rating).to.be.equal("4");
      expect(result[1].product_rating).to.be.equal("2");
      done(err);
    });
  });
});


