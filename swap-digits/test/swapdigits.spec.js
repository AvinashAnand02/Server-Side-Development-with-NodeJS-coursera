const chai = require('chai')
const expect = chai.expect

const swapDigits = require('../src/swapdigits')

describe('Swap Digits 1',()=>{
    it('swap the given even digits',()=>{
        expect(swapDigits(123455)).to.equal(214355)
    })
    it('swap the given odd digits',()=>{
        expect(swapDigits(123)).to.equal(132)
    })
    it('swap the given one digit',()=>{
        expect(swapDigits(0)).to.equal(0)
    })
    it('swap the given negative number', () => {
        expect(swapDigits(-512364783)).to.equal(0);
      });
})

