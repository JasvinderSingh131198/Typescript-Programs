
//String
//A string is a sequence of characters used to represent text.
//We have three ways to declared string
//1. Double Quotes
//2. Single Quotes
//3. Template Literals (Backticks)


//Double Quotes
// let name : string = "Shenal";
// console.log(name);

//Single Quotes
// let name : string = 'Jasvinder';
// console.log(name);

//Backticks
//let name : string = `Ankit`;
//console.log(name);

//console.log(`Hello Everyone My name is ${name} & I am your tutor.`);


//Strings are immutable, meaning they cannot be changed after creation.
//Immutable means we can't change our string

// let name : string = "Gauri";
// name = "Pranoti";
// //name[0] = "T";

// console.log(name);

// //String Object
// let n2 : String = new String("Sadanand");
// console.log(n2);


//String Methods
// let s1 : string = "NikhilKumar";
// let s2 : string = "Mayur";

//console.log(s1.concat(s2));

//length keyword
//console.log(s1.length);

//toUpperCase() & toLowerCase()
// console.log(s1.toUpperCase());
// console.log(s2.toLowerCase());

//charAt() : Returns character at specified index.
//console.log(s1.charAt(16));

//indexOf() : Returns first occurrence position.
//console.log(s1.indexOf("i"));

//lastIndexOf() : Returns last occurrence position.
//console.log(s1.lastIndexOf("i"));

//includes() : Checks whether a string contains a value.
// let n3 : string = "Hello Everyone, Good Morning. I hope you all are doing well. Hope you all are good";
//console.log(n3.includes("EveryoneTest"));

//startsWith() : Checks beginning of string.
//console.log(n3.startsWith("well"));

//endsWith() : Checks ending of string.
// /console.log(n3.endsWith("Hello"));

//replace() Replaces first matching value.
//console.log(n3.replace("Morning", "Evening"));

//replaceAll() : Replaces all matching values.
//console.log(n3.replaceAll("you", "we"));

//substring() : Extracts part of string.
//console.log(n3.substring(0, 10));

//slice() : Extracts a portion of string.
//console.log(n3.slice(0, 6));

//split() : Converts string into array.
// let n4 : string = "Nilam Abc Patil"
// let arr = n4.split("a");
// console.log(arr);

//trim() : Removes spaces from both ends.
let n4 : string = "     Nilam Abc Patil     ";
console.log(n4);
console.log("After trim");
console.log(n4.trim()); 