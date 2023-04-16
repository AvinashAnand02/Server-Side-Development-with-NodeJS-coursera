const chai = require('chai')
const expect = chai.expect

const { getEmployeeOverFifty, getTotalNoOfDaysSinceJoining } = require('../src/employee')

describe('Test getEmployeeOverFifty', () => {
    let employeeList;
    let result;
    beforeEach(() => {
        result = null;
        employeeList = [
            {
                id: "1",
                employeeName: "nameofemp",
                employeeSalary: 50000,
                employeeAge: 42,
                dateOfJoining: "2006-06-30T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "2",
                employeeName: "nameofemp2",
                employeeSalary: 35000,
                employeeAge: 52,
                dateOfJoining: "2003-09-15T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "3",
                employeeName: "nameofemp3",
                employeeSalary: 60000,
                employeeAge: 58,
                dateOfJoining: "2004-11-06T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "4",
                employeeName: "nameofemp4",
                employeeSalary: 5000,
                employeeAge: 50,
                dateOfJoining: "2005-03-17T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "5",
                employeeName: "nameofemp5",
                employeeSalary: 50000,
                employeeAge: 36,
                dateOfJoining: "2010-07-07T00:00:00.000Z",
                profileImage: "image_url"
            }
        ]
    })
    afterEach(() => {
        employeeList = null;
    })

    it('should return the number of employees over 50', async () => {
        await getEmployeeOverFifty(employeeList).then(res => result = res);
        expect(result).to.be.equal(2)
    })
    it('should reject with Empty Array if list is empty', async () => {
        await getEmployeeOverFifty([]).catch(err => result = err);
        expect(result).to.be.equal("Empty Array")
    })
})

describe('Test getTotalNoOfDaysSinceJoining', () => {
    let employeeList;
    let result;
    beforeEach(() => {
        result = null;
        employeeList = [
            {
                id: "1",
                employeeName: "nameofemp",
                employeeSalary: 50000,
                employeeAge: 42,
                dateOfJoining: "2006-06-30T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "2",
                employeeName: "nameofemp2",
                employeeSalary: 35000,
                employeeAge: 52,
                dateOfJoining: "2003-09-15T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "3",
                employeeName: "nameofemp3",
                employeeSalary: 60000,
                employeeAge: 58,
                dateOfJoining: "2004-11-06T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "4",
                employeeName: "nameofemp4",
                employeeSalary: 5000,
                employeeAge: 50,
                dateOfJoining: "2005-03-17T00:00:00.000Z",
                profileImage: "image_url"
            },
            {
                id: "5",
                employeeName: "nameofemp5",
                employeeSalary: 50000,
                employeeAge: 36,
                dateOfJoining: "2010-07-07T00:00:00.000Z",
                profileImage: "image_url"
            }
        ]
    })
    afterEach(() => {
        employeeList = null;
    })

    it('should return the number of days since employee joined', async () => {
        const data = employeeList.map(emp => Math.floor((new Date().getTime() - new Date(emp.dateOfJoining).getTime()) / (1000 * 3600 * 24)))
        await getTotalNoOfDaysSinceJoining(employeeList).then(res => result = res);
        expect(result[0]).to.be.equal(data[0])
        expect(result[1]).to.be.equal(data[1])
        expect(result[2]).to.be.equal(data[2])
        expect(result[3]).to.be.equal(data[3])
        expect(result[4]).to.be.equal(data[4])
    })

    it('should reject with Empty Array if list is empty', async () => {
        await getTotalNoOfDaysSinceJoining([]).catch(err => result = err);
        expect(result).to.be.equal("Empty Array")
    })
})