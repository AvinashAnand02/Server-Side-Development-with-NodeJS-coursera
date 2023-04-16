const users = require('./users')
// Define a function that returns a promise to get all users and return a promise
const getAllUsers = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(users)
        })
    })
 
}
//Define a function to create a new user and return a promise
const createUser = (user) => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>{
            users.push(user)
            // console.log(users)
            resolve(user);
        })
    })
    
 }
// Define a function to get a user by id and return a promise
const getAUserByID = async (id) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let ele = users.find(element => element.id == id);
            if(ele == undefined)
                reject('User does not exist');
            let newArr = [];
            newArr.push(ele);
            resolve(newArr);
        })
    })
    
}
// Define an async function that calls the createUser and getAllUsers function using await 
// and returns all users
const displayUsers = async (user) => {
   const allUsers = null;
   return allUsers;
}
//Define a async function to display a specific user by Id
// return the user 
const displayAUser = async(id) =>{
    const user = null;
    return user;
}

module.exports = {
    getAllUsers, getAUserByID, createUser, displayAUser, displayUsers
}