# Problem Statement - Employees of An Organization

In large organizations the data of employees can be handled by multiple people. New employees are added to the system, the HR department updates their roles and responsibilities etc.

Write a program to display the employee list in an organization. Use a timer callback with a delay of 2 seconds to display the employee list only after an employee is added to the list.

## Tasks

1. Define a getEmployee function that iterates over the employees list and displays it. The employees must be displayed after a timeout of 1 second.​
2. Define a function createEmployee that creates a new employee after 2 seconds, which takes an employee object and a callback(getEmployee). The callback will be executed once the employee object is added to the employees list.​
3. Make a call to the createEmployee function, pass the employee object and getEmployee as the callback.​

# Instructions

1. Download and unzip the boilerplate code.
2. Run the command `npm install` to install the dependencies.
3. Open the boilerplate code in VSCode to develop the solution.
4. Write the code in the **.js** files present in **src** folder
5. Run the test scripts available under **src/test** by giving `npm run test` command in the terminal to test locally.
6. Refactor the solution to ensure all test cases are passing.
7. Zip the solution code with the name same as assignment name.
8. Upload the zipped solution for submission.
