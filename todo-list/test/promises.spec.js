const chai = require("chai");
const expect = chai.expect
const promises = require('../src/promises')
data = {
    "id": 741,
    "user_id": 148,
    "title": "Buy Electronic Parts",
    "due_on": "2021-11-19T00:00:00.000+05:30",
    "status": "pending"
}
describe('createTodo resolved', () => {
    it('create a new todo success', (done) => {
        promises.createTodo(data)
            .then(todolist => {
                return promises.getAllTodos(todolist)
            })
            .then(result => {
                expect(result.length).to.be.equal(4)
                done();    
            }).catch((err)=>{
                done(err)
            })
    })
});

describe('createTodo rejected', () => {
    it('create a new todo fail', (done) => {
        promises.createTodo(undefined)
            .then(todolist => {
                 promises.getAllTodos(todolist)
            })
            .then(result => {throw new Error('No data')})
            .catch((err)=>{
                expect(err).to.equal('No data to be added')
                done();
            })
    })
});