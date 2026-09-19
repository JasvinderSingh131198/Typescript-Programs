

//functions
//A function is a reusable block of code that performs a specific task

//1. Normal Function (No Parameter & No Return Type)
// function calculationExample() {
//     console.log("Hello I am function..");
// }
// calculationExample();


//2. Parameterized Functions
// function  addition(no1 : number, no2 : number): void {
//     console.log(no1 + no2);
// }
// addition(1, 2);
// addition(5, 10);
// addition(20, 30);

//3. Function with Return Type
// function multiplication(no1:number, no2:number): number {
    
//     return no1 * no2;
// }

// const output = multiplication(5, 5);
// console.log(output + 300);

//4. Function with Optional Parameter (?)
// function  addition(no1 : number, no2 : number, no3? : number): void {
//     console.log(no1 + no2 + (no3||20));
// }
// addition(1, 2);

//5. Default Parameters
//Default value is used if no argument is passed.

// function  addition(no1 : number, no2 : number, no3 : number = 100): void {
//     console.log(no1 + no2 + no3);
// }
// addition(1, 2);

//6. Anonymous Function
//A anonymous function is a function that does not have a name.
//Instead it is assigned to a variables, which acts as its name.

// const add = function (x:number, y: number) {
//     console.log(x+y);
// }

// add(10, 20);

//7. Recursive Function : Function calling itself.
//5 = 5*4*3*2*1
//5*4
//5*4*3
//5*4*3*2
//5*4*3*2*1


// function factorial(no:number) : number{
//     if (no===0 || no ===1) {
//         return 1;
//     }

//     return no * factorial(no-1);
// }

//console.log(factorial(5));

//8. Nested Function : Function inside another function.

// function outer() {
//      console.log("Outer function");
//         function inner() {
//             console.log("Inner function");
//     }
//     inner();
// }
// outer();

//9. Arrow Functions without Parameter
// A Short Arrow Function is a simplified version of an arrow function 	
// used when the function contains only one statement.

//Without Arrow Function
// function greet() {
//     console.log("Hello Everyone, Good Evening..");
// }

// greet();

//with arrow function
//=> arrow function
// const message = (): void => console.log("Hello Everyone, Good Evening..");
// message();


//Arrow function with parameter
// const addition = (no1: number, no2: number) : number =>{ 
//     return no1 + no2;
// }

// console.log(addition(20, 30));


//10. Callback Function : Function passed as an argument to another function.

// function wish(Callback:()=>void) {
//     console.log("Good Morning..");

//     Callback();
// }

// function goodBye() {
//     console.log("Good Bye..");
// }

// wish(goodBye)

//11. Higher Order Function (HOF)
//It accept a function as parameter
//return a function as well

// function wish(Callback:(name : string)=>void) {
//     console.log("Good Morning..");

//     Callback("Rahul");
// }

// function goodBye(name : string) {
//     console.log("Good Bye.." + name);
// }

// wish(goodBye)

//HOF with returing a function
// function addtion(no1 : number) {
//     return function (no2 : number) : number {
//         return no1 + no2;
//     }
// }

// const output = addtion(10);
// console.log(output(100));

//12. Immediately Invoked Function Expression (IIFE)

// (function (): void {
//       console.log("IIFE Function");
// })();

(function (no1:number, no2:number): void {
      console.log("Addition " + (no1 + no2));
})(20, 30);
