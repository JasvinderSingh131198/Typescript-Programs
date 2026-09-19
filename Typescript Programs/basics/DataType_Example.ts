

//Datatypes in Typescripts
//Heena Data ("Heena", 5.5, 1234567890, 25, Mumbai MH)

//Primitive data types are basic built-in data types. 
//They store single values. 
//Immutable in nature (cannot directly change original value).

//1. Build in Datatype
//2. User Defined Datatype


//1. Build in Datatype (known as primitive datatype)

//1. number : Used for numeric values (9007199254740991)
let a : number = 100;
let b : number = 20.5;
console.log(b);

//2. BigInt : Used for very large integers beyond safe limit. ()
//we have to use suffix n after value

let c : bigint = 4567890987654567890n;
console.log(c);

//String : Used for text values.
let d : string = "Nilam Patil";
let e : string = 'Nilam Patil';
let f : string = 't';

console.log(f);


//Boolean Datatype : When we have to store value either in true or false
let isLeavingInPune : boolean = false;
console.log(isLeavingInPune);

//Null
//Represents intentional empty value.
//Used when value is intentionally absent.
let marks : null = null;
console.log(marks);

//Undefined : Variable declared but value not assigned.
let data;
console.log(data);

//Symbol
//Used to create unique identifiers
//Even same descriptions create unique symbols.
let t1 = Symbol("Snehal");
let t2 = Symbol("Snehal");

console.log(t1 === t2);
console.log(t1);
console.log(t2);

//let : keyword
//name : Identifer
//string : datatype
//= : Operator

let name : string = "Rahul Pawar";


