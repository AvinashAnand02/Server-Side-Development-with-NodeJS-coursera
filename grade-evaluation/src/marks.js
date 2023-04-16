// Define a function to calculate the total marks and return a promise 
const calculateTotalMarks = async (math,english,science,social,language) =>{
    return new Promise((resolve,reject)=>{
        setTimeout((err)=> {
                if (english == undefined)
                    reject('Null values for marks');
                let total = math + english + science + social + language;
                resolve(total);
            },200)
        
        }) 
}
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = async (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let avg = totalMarks/5;
            resolve(avg);
        })
    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = async (averageMarks)=>{
    return new Promise((resolve,reject)=>{
       setTimeout(()=> {
            let grade;
            if(averageMarks >=90)
                grade = 'A+';
            else if (averageMarks >= 80 && averageMarks < 90)
                grade = 'A';
            else if (averageMarks >= 70 && averageMarks < 80)
                grade = 'B';
            else if (averageMarks >= 60 && averageMarks < 70)
                grade = 'C';
            else if (averageMarks >= 50 && averageMarks < 60)
                grade = 'E';
            else if (averageMarks < 50)
                grade = 'F';
            resolve(grade);
       })
    })   
}

module.exports = {
    calculateAverageMarks,calculateGrade,calculateTotalMarks
}
