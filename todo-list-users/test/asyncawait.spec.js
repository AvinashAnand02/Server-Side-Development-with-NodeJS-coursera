const chai = require("chai");
const expect = chai.expect
chai.use(require('chai-as-promised'));
const asyncawait = require('../src/asyncawait')
describe('get all users',()=>{
    it('get all users success',async ()=>{
        const result = await asyncawait.getAllUsers();
        expect(result.length).to.be.equal(2)
    })
})
describe('get a user by id failed',()=>{
    it('get a user by id failure',async ()=>{
        try{
        const result = await asyncawait.getAUserByID(5);
        }
        catch(err){
            expect(err).to.equal('User does not exist')
        }              
    })
})
describe('get a user by id success',()=>{
    it('get a user by id success',async ()=>{
        const result = await asyncawait.getAUserByID(1);
        expect(result.length).to.be.equal(1)
        expect(result).to.be.a('Array');
       })
})

describe('create a user success',()=>{  
    const user =  {
        "id": 3,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
        "street": "Victor Plains",
        "suite": "Suite 879",
        "city": "Wisokyburgh",
        "zipcode": "90566-7771",
        },
        }       
    it('create a user',async ()=>{
        const result = await asyncawait.createUser(user);
        expect(result).to.be.equal(user)        
       })
})

describe('create a user failed',()=>{  
        
    it('create a user',async ()=>{
        try{
        const result = await asyncawait.createUser(undefined);           
        }
        catch(error){
            expect(error).to.equal('No user to be added')
        }  
       })
})
