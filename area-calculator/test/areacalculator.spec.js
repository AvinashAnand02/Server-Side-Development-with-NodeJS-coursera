const chai = require('chai')
const expect = chai.expect
const calculateArea = require('../src/areacalculator').calculateArea

describe('Area Calculator',()=>{
    it('calculate area square',()=>{
        expect(calculateArea('square',5)).to.be.equal(20)
    })
    it('calculate area rectangle',()=>{
        expect(calculateArea('rectangle',0,4,6,0)).to.be.equal(24)
    })
    it('calculate area circle',()=>{
        expect(calculateArea('circle',0,0,0,4.5)).to.be.equal(63.585)
    })
    it('calculate area invalid choice',()=>{
        expect(calculateArea('cone')).to.be.equal(-1)
    })
    it('calculate area invalid square parameters',()=>{
        expect(calculateArea('square')).to.be.equal(-1)
    })
    it('calculate area invalid rectangle parameters',()=>{
        expect(calculateArea('rectangle')).to.be.equal(-1)
    })
    it('calculate area invalid circle parameters',()=>{
        expect(calculateArea('circle')).to.be.equal(-1)
    })
})