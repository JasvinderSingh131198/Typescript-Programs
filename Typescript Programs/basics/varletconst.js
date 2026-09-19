"use strict";
//var keyword
//var is function-scoped and accessible throughout the function in which it’s declared but has function-level scoping.
//It behaves similarly to JavaScript because TypeScript is built on JavaScript. Older way of declaring variables.
//The var variables have function scope. 
//1. whenw e have to declered any variable inside the function that time we have to use var keyword
//2. var variables have function scope. 
//3. In var 
function addition() {
    //3. In var redeclartion is allowed 
    var a = 100;
    var a = 200;
    //console.log(a);
    //4. Reassignment Allowed
    var city = 'Mumbai';
    city = 'Pune';
    //console.log(city);
    //5. Hoisting is allowed
    console.log(name5);
    var name5 = 'Gauri';
    console.log(name5);
}
addition();
