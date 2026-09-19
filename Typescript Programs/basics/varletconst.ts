

//var keyword
//var is function-scoped and accessible throughout the function in which it’s declared but has function-level scoping.
//It behaves similarly to JavaScript because TypeScript is built on JavaScript. Older way of declaring variables.
//The var variables have function scope. 

//1. whenw e have to declered any variable inside the function that time we have to use var keyword
//2. var variables have function scope.  

// function addition() {

    //3. In var redeclartion is allowed 
    // var a : number = 100;
    // var a : number = 200;
    //console.log(a);


    //4. Reassignment Allowed
    // var city = 'Mumbai';
    // city = 'Pune';

    //console.log(city);


    //5. Hoisting is allowed
    // console.log(name5);
    // var name5 = 'Gauri';
    // console.log(name5);

//     if (true) {
//        var city = 'Mumbai';
//     }

//     console.log(city);
    
// }

//addition();


//let keyword
//The let variables are block-scoped. 
//Preferred over var because it supports block scope.
//When to Use let When variable value needs to change

// function multiplication() {

//     let x = 'Sadanand';
     

//     if (true) {

        //Reassignment Allowed
        // let name6 = 'Mayur';
        // name6 = 'Mohini';
        // console.log(name6);

        //redeclartion is not allowedallowed 
        // let x : string = 'Nilam';
        // let x : string = 'Rahul';

        //let is hoisted. But cannot be used before declaration. 
        // console.log(x);
        // let x = 'Sadanand';

//         x = 'Aniket';

//     }
//     console.log(x);
    
// }
// multiplication();


//const keyword
//const is used to declare constant variables. 
//Value cannot be reassigned after initialization.
//Use when value should not change.

function substraction() {
    
    if (true) {
        // const name7 = 'Sopan';
        // console.log(name7);

        //Reassignment is not allowed
        // const name8 = 'Snehal';
        // name8 = 'sopan';

        //Redeclaration Not Allowed
        // const name8 = 'Snehal';
        // const name8 = 'sopan';

        //hoisted
        // console.log(name8);
        // const name8 = 'sopan';

    }
}

substraction();


//var                               //let                                   //const
//function                          //block                                 //block
//redeclaration is allowed          redeclaration is not allowed            redeclaration is not allowed
//reassignment is possible          reassignment is possible                reassignment is possible
//hoisted is yes                    hoisted no                              hoisted no