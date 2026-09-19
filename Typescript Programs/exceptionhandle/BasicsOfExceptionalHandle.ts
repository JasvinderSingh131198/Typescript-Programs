
//Exception Handle
//Exception unpredectible condition

//Need of handle exception
// console.log("Hello Everyone...");
// let data : any = null;
// console.log(data.length);
// console.log("Good Morning");

//Build in Exception
//1. TypeError
// let data : any = null;
// console.log(data.length);

//2. ReferenceError : Occurs when accessing a variable that is not defined.
//console.log(studentName);

//3. RangeError : Occurs when a value is outside the allowed range
// let arr = new Array(-5);
// console.log(arr);

//4. SyntaxError : Occurs when JavaScript encounters invalid syntax.
//JSON.parse("{name:'Gauri'}");

//5. URIError : Occurs when invalid URI functions are used.
//console.log(decodeURI("%s"));

//6. EvalError : Related to the eval() function. It is rarely encountered in modern JavaScript/TypeScript
//console.log(EvalError("Eval Error"));


//How to handle exception in typescript
//We have to use try and catch block to handle exception

// console.log("Hello Everyone...");
// try{
//     let data : any = null;
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }
// console.log("Good Morning");

//1. we can't declared multiple try block and single catch block
// try{
//     let data : any = null;
//     console.log(data.length);
// }
// try{
//     let data : any = null;
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }

//2. We should use one try block & one catch block only 
// try{
//     let data : any = null;
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }

//3. We can't declared single try block 
// try{
//     let data : any = null;
//     console.log(data.length);
// }

//4. We can't declared single catch block 
// catch(TypeError){
//     console.log("Exception Handle");
// }

//finally block
//When we have to execute important line of code or we have to print important statements that time we use finally block

// try{
//     let data : any = null;
//     console.log(data.length);
// }catch(TypeError){
//     console.log("Exception Handle");
// }finally{
//     console.log("Hello I am finally block");
// }


//5. We can define try block without catch block but we have to finally block
// try{
//     let data : any = null;
//     console.log(data.length);
// }finally{
//     console.log("Hello I am finally block");
// }

//6. If we won't get any exception then still your finally block will execute
// try{
//    console.log("Good Morning");
// }finally{
//     console.log("Hello I am finally block");
// }