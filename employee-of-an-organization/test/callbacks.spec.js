const chai = require('chai')
const expect = chai.expect 
const callbacks = require('../src/callbacks')
const employees = [
    { name: 'Adam', designation: 'Manager' },
    { name: 'Harry', designation: 'Developer' }
];
const employee = { name: 'John', designation: 'Developer' }

describe('test get all employees', () => {
    it('callbacks get all', (done) => {
        callbacks.getEmployee(employees, (err, result) => {
            expect(err).to.not.exist;
            expect(result).to.deep.equal(['Adam', 'Harry'])
            done()
        })
    })
})

describe('test create a new employees', () => {
    it('callbacks create employee', (done) => {
        callbacks.createEmployee(employees, employee, (err, result) => {
            expect(err).to.not.exist;
            expect(result).to.deep.equal(employees)
            done()
        })
    })
})



