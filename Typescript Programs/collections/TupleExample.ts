
//Tuple
//1. The number of elements is fixed. 
//2. The data type of each element is predefined. 
//3. Elements are stored in a specific order.
//4. Unlike normal arrays, tuples allow you to store multiple types of values in a single array.

//Tuple declaration
// let student : [number, string] = [1, "Gauri"];
// console.log(student);


//Tuple declaration with different data type
// let student : [number, string, boolean] = [1, "Gauri", true];
// console.log(student);

//Modify Tuple
// let student : [number, string, boolean] = [1, "Gauri", true];
// student[1] = "Mayur"
// console.log(student);

//Optional Tuple Elements
// let student : [number, string, boolean?] = [1, "Gauri"];
// console.log(student);

//Private Tuple Elements
// let student : readonly [number, string, boolean?] = [1, "Gauri"];
// student[1] = "Mayur"
// console.log(student);

//Rest Element in Tuple [...number[]]
//we have to use  ...number[]
let studentsMarks : [string, ...number[]] = ["Mohini", 90, 100, 50, 60, 100, 50];
console.log(studentsMarks);

//Difference Between Array and Tuple
//Tuple                                         //Array
//fixed length                                  //Variable Length
//specific type of each position                //same type for all elements
//Different DataType                            //Same Datatype
//Order is imnportant                           //Order doesn't matter
//Type safty is more                            // Type safty is less 