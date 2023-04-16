const chai = require("chai");
const expect = chai.expect
const marks = require('../src/marks')


describe('calculate grade',()=>{
    it('calculate grade success A+',()=>{
        return marks.calculateTotalMarks(99,90,90,99,99).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>expect(result).to.be.equal('A+') )               
    })
    it('calculate grade success A',()=>{
        return marks.calculateTotalMarks(88,90,90,80,78).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>expect(result).to.be.equal('A') )               
    })
    it('calculate grade success B',()=>{
        return marks.calculateTotalMarks(70,77,72,78,73).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>expect(result).to.be.equal('B') )               
    })
    it('calculate grade success C',()=>{
        return marks.calculateTotalMarks(67,60,67,65,63).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>expect(result).to.be.equal('C') )               
    })
    it('calculate grade success E',()=>{
        return marks.calculateTotalMarks(58,50,54,50,52).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>expect(result).to.be.equal('E') )               
    })
    it('calculate grade success F',()=>{
        return marks.calculateTotalMarks(33,23,34,35,23).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>expect(result).to.be.equal('F') )               
    })
    it('calculate grade failure',()=>{
        return marks.calculateTotalMarks(88,undefined,90,80,undefined).
        then(totalMarks => marks.calculateAverageMarks(totalMarks)).
            then(grade=> marks.calculateGrade(grade)).
            then(result=>{throw new Error('NUll values for marks')} ).
            catch((err)=>expect(err).to.equal('Null values for marks'))               
    })
})




