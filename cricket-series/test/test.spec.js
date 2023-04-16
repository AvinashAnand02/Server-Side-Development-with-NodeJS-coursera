const chai = require('chai')
const expect = chai.expect
const {PerformanceCalculator}=require('../src/PerformanceCalc');

describe('Test Performance Calculator', () => {
    let Player1;
    let Player2;
    let Player3;

    beforeEach(() => {
        Player1=["Player1",40,12]; //[name,runs,balls]
        Player2=["Player2",65,15]; 
        Player3=["Player3",150,46]; 
        Player4=["Player4",20,10];
    })
    afterEach(() => {
        Player1 = null;
        Player2=null;
        Player3=null;
        Player4=null;
    })

    it('test when runs>30 and balls <15', async () => {
        var result= PerformanceCalculator(Player1[1],Player1[2]);
        expect(Math.round(result*100)/100).to.be.equal(3.37)
    })
    it('test when runs>50 and balls <20', async () => {
        var result= PerformanceCalculator(Player2[1],Player2[2]);
        expect(Math.round(result*100)/100).to.be.equal(4.77)
    })
    it('test when runs>100 and balls <50', async () => {
        var result= PerformanceCalculator(Player3[1],Player3[2]);
        expect(Math.round(result*100)/100).to.be.equal(3.91)
    })
    it('test when runs<30', async () => {
        var result= PerformanceCalculator(Player4[1],Player4[2]);
        expect(Math.round(result*100)/100).to.be.equal(2)
    })
})