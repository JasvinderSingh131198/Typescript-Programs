

//Need of array
//let a : number = 10, b = 20, c = 30, d = 40, e = 50;

//An array is a special type of variable that stores multiple values.
//The values can be of the same data type or different data types.
//Array index always starts with zero

//we can declared an array with type[]
//let a : number[] = [1, 2, 3, 4, 5, 10.20];
//console.log(a[0]);
//console.log(a);

//for of loop
// Used to iterate values of arrays, strings, collections.

// for (let output of a){
//     console.log(output);
// }

//for in loop
//Used to iterate object keys or array indexes

// for (let output in a){
//     console.log(output);
// }


//Array with Generics
//Generics in TypeScript let you write reusable, type-safe code that works with multiple data types—without losing type information.

//let ar : Array<string> = ['Ankit', 'Mayur', 'Mohini', 'Nilam', 'Pranoti'];
// for (let ab of ar){
//     console.log(ab);
// }

//console.log(ar.length);
// for (let index = 0; index <= ar.length; index++) {
//     console.log(ar[index]);
// }


//Array Method
//let ar : Array<string> = ['Ankit', 'Mayur', 'Mohini', 'Nilam', 'Pranoti'];

//push() - Adds element at the end.
// ar.push('Sadanand');
// console.log(ar);

//unshift() : Adds element at the beginining.
// ar.unshift('Snehal');
// console.log(ar);

//Pop() - Removes last element.
// ar.pop();
// console.log(ar);

//Shift() - Removes first element.
// ar.shift();
// console.log(ar);

// let ar : Array<string> = ['Ankit', 'Mayur', 'Mohini', 'Nilam', 'Pranoti'];
//let ar2 : Array<string> = ['Mohini', 'Nilam', 'Pranoti'];
//concat()- Used to combine two or more arrays.
//ar.concat(ar2);
//console.log(ar.concat(ar2));

//slice() - Used to extract part of an array
//console.log(ar.slice(0, 4));

//splice()- Used to add, remove, or replace elements in array..
//splice(start: number, deleteCount?: number)
//delete numbers with splice method from array
// ar.splice(1, 3);
// console.log(ar);

//add data with splice method from array
//let ar : Array<string> = ['Ankit', 'Mayur', 'Mohini', 'Nilam', 'Pranoti'];
// ar.splice(1, 0, 'Sopan');
// console.log(ar);

//replace data with splice method from array
// ar.splice(1, 1, 'Rahul');
// console.log(ar);

//indexOf : Used to find index position of an element
//console.log(ar.indexOf('Nilam'));

//includes()- Checks whether element exists in array.
//console.log(ar.includes('Kalam'));

//toString()- Converts array into string.
// let a : number[] = [1, 2, 3, 4, 5, 10.20];
// console.log(a.toString());


//Multi-Dimentinal Array
let testdemo : number[][] = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

for(let ab : number = 0; ab < testdemo.length; ab++){
    for (let xy : number = 0; xy < testdemo[ab].length; xy++) {
        console.log(testdemo[ab][xy]);
    }
}