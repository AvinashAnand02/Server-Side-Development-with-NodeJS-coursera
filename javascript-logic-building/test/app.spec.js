const mocha = require('mocha');
const expect = require('chai').expect;
const app = require('../js/app');

describe('JavaScript Testing', () => {
 
    describe('Check for existence of the method \'arrangeEmpDetails()\'', () => {
        it('should have method \'arrangeEmpDetails()\'', () => {
            expect(app).to.be.an('object');
            expect(typeof app.arrangeEmpDetails).to.equal('function');
        });
    });

    describe('Check for existence of the method \'getAppraisalPct()\'', () => {
        it('should have method \'getAppraisalPct()\'', () => {
            expect(app).to.be.an('object');
            expect(typeof app.getAppraisalPct).to.equal('function');
        });
    });

    describe('Error Cases', () => {
        it('should return Error message for empty param', () => {
            return app.getAppraisalPct().then('{}', (errorMessage) => {
                expect('Unfortunately, you are not eligible for a hike').to.equal(errorMessage);
            });
        });

        it('should return message for non-eligible employees', () => {
            return app.getAppraisalPct(72.3).then('{}', (errorMessage) => {
                expect('Unfortunately, you are not eligible for a hike').to.equal(errorMessage);
            });
        });
    });

    describe('Success Cases', () => {
        it('should return \'10% hike to be given\'', () => {
            return app.getAppraisalPct(97).then((successMessage) => {
                expect('10% hike to be given').to.equal(successMessage);
            });
        });

        it('should return \'20% hike to be given\'', () => {
            return app.getAppraisalPct(100.2).then((successMessage) => {
                expect('20% hike to be given').to.equal(successMessage);
            });
        });

        it('should return \'5% hike to be given\'', () => {
            return app.getAppraisalPct(87.7).then((successMessage) => {
                expect('5% hike to be given').to.equal(successMessage);
            });
        });

    });
});