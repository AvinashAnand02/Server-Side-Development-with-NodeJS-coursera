Problem Statement - Employee Data Analysis

People analytics—the application of advanced analytics and large data sets to talent management—is going mainstream. Few years ago, it was the provenance of a few leading companies, such as Google. Now a growing number of businesses are applying analytics to processes such as recruiting and retention, uncovering surprising sources of talent and counterintuitive insights about what drives employee performance. Much of the work to date has focused on specialized talent and on individual HR processes. The company focused the power of people analytics on its frontline staff—with an eye toward improving overall business performance—and achieved dramatic improvements in customer satisfaction, service performance, and overall business results, including a 5 percent increase in group sales in its pilot market. Now a days implementing business logic to manipulate the data is very important


// Please refer below data to provide solution for below requirements

```
let empDetails = [
    {id:1,name:"Roger",salary:50000,Bonus:1000,appraisal:80},
    {id:2,name:"David",salary:55000,Bonus:1000,appraisal:70},
    {id:3,name:"Alison",salary:65000,Bonus:1000,appraisal:90},
    {id:4,name:"Anthony",salary:70000,Bonus:1000,appraisal:95},
    {id:5,name:"Kristen",salary:80000,Bonus:1000,appraisal:98},
];
```


1. Create a function name 'arrangeEmpDetails' to sort the employee details name wise by using array functions and anynymous function




2. Display all the employee details in single array using array functions and arrow function 
   Refer below mentioned structure 

```   
['1 ---- Shyam ---- 50000',  
'2 ---- Karthik ---- 55000']
```


3. Display the total Income of all the employees whose names starting with 'A' by using array functions


4. Find the maximum appraisal rating from the given array by using array functions 
   And then create a function to display the percentage of hike as per below details      
```
   maxappraisalscore >= 100 :: '20% hike to be given'
   maxappraisalscore > 90 && maxappraisalscore < 100 ::    resolve('10% hike to be given'
   maxappraisalscore > 85 && maxappraisalscore <= 90 :: resolve('5% hike to be given');
   Otherwise :: 'Unfortunately, you are not eligible for a hike'
```



Instructions

Download and unzip the boilerplate code.
Run the command npm install to install the dependencies.
Open the boilerplate code in VSCode to develop the solution.
Write the code in the .js files present in js folder
Run the test scripts available under test folder by giving npm run test command in the terminal to test locally.
Refactor the solution to ensure all test cases are passing.
Zip the solution code with the name same as assignment name.