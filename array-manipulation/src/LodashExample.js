
//import the lodash module
const lodash = require ("lodash");


//Create a function to find a maximum value from number array.
const findMaxValue=(arr) => lodash.max(arr);


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
const filterValues=(arr, num)=>{
  let newArray=new Array();
 for (let index = 0; index < arr.length; index++) {
  
  if (arr[index]>num) {
    newArray.push(arr[index]);
    
  }
 }
 return newArray;
}


//Create a function to return all values of employeeName array in capital letters.
const nameInCapital= (employees)=>{
  return employees.map(x=> x.toUpperCase());
}



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}
