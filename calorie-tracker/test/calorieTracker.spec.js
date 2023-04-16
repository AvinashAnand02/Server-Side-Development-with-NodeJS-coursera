const chai = require('chai')
const expect = chai.expect
const calculateWeightLostInAMonth = require('../src/calorieTracker')

describe('Weight Lost',()=>{
    it('calculate weight loss in a month valid parameters',()=>{
        expect(calculateWeightLostInAMonth(500,300,400,100)).to.equal(6.6)
    })
    it('calculate weight loss in a month invalid parameters',()=>{
        expect(calculateWeightLostInAMonth(500,0,0,100)).to.equal(-1)
    })
    it('calculate weight loss in a month negative parameters',()=>{
        expect(calculateWeightLostInAMonth(-500,0,0,-100)).to.equal(-1)
    })
})
