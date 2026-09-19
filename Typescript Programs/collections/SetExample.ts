
//Set
//1. A Set is a collection of unique values. 
//2. It stores elements without duplicates.
//3. TypeScript uses JavaScript's built-in Set object.

//A Set is useful when:
//You want unique values only
//Fast searching of elements
//Remove duplicate values from an array
//Store unordered collections


//Set Decleration
// let marks : Set<number> = new Set();
// marks.add(10);
// marks.add(30);
// marks.add(20);
// marks.add(30);

// console.log(marks);

//Set directly declaration
let marks : Set<number> = new Set([10, 30, 20]);

console.log(marks);