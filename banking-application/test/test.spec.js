const chai = require('chai')
const expect = chai.expect

const {category}=require('../src/category');
const {addCustomer,updateCustomer,getAllCustomers}=require('../src/customer');

describe('Test adding new customer', () => {
    let customerList;
    
    beforeEach(() => {
        addCustomer("c001","Nina Sen",24,"Kolkata,West Bengal",910855748,category("EL"));
        addCustomer("c002","Joey Tribbiani",30,"Boston,USA",9154879626,category("HL"));
        addCustomer("c003","Ross Geller",24,"New York,USA",8468555748,category("VL"));
        customerList= getAllCustomers();
    })

    afterEach(() => {
        customerList = null;
    })

    it('should return the number of customers', async () => {
        expect(customerList.length).to.be.equal(3)
    })
    it('duplicate customer will not be added', async () => {
        addCustomer("c001","Nina Sen",24,"Kolkata,West Bengal",910855748,category("EL"));
        expect(customerList.length).to.be.equal(3);
    })
})

describe('Test updating customer', () => {
    let customerList;
    
    beforeEach(() => {
        addCustomer("c001","Nina Sen",24,"Kolkata,West Bengal",910855748,category("EL"));
        addCustomer("c002","Joey Tribbiani",30,"Boston,USA",9154879626,category("HL"));
        addCustomer("c003","Ross Geller",24,"New York,USA",8468555748,category("VL"));
        customerList= getAllCustomers();
    })

    afterEach(() => {
        customerList = null;
    })

    it('should update name', async () => {
        expect(customerList[0][1]).to.be.equal("Nina Sen");
        updateCustomer("c001","Nina Dobrev",24,"Kolkata,West Bengal",910855748,category("EL"));
        expect(customerList[0][1]).to.be.equal("Nina Dobrev");
    })

    it('should update phone number', async () => {
        expect(customerList[1][4]).to.be.equal(9154879626);
        updateCustomer("c002","Joey Tribbiani",30,"Boston,USA",9154879600,category("HL"));
        expect(customerList[1][4]).to.be.equal(9154879600);
    })

    it('should update age', async () => {
        expect(customerList[2][2]).to.be.equal(24);
        updateCustomer("c003","Ross Geller",34,"New York,USA",8468555748,category("VL"));
        expect(customerList[2][2]).to.be.equal(34);
    })
})

describe('Test category for given key', () => {
    it('should return value for category key', async () => {
    var category1=category("pl")
    var category2=category("Vl")
    var category3=category("EL")
    var category4=category("hL")

    expect(category1).to.be.equal("Personal Loan");
    expect(category2).to.be.equal("Vehicle Loan");
    expect(category3).to.be.equal("Education Loan");
    expect(category4).to.be.equal("Home Loan");
    })
})

