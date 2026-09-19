

//In TypeScript, a constructor is a special method inside a class that is automatically called when an object is created.
//The constructor method is named constructor. 
//It runs automatically when using new keyword.
 //Used to initialize object properties.

//  class ExampleOfConstructor {

//     name : string;

//     constructor(name : string){
//         this.name = name;
//     }
//  }

//  let ec = new ExampleOfConstructor("Mohini");
//  console.log(ec.name);

//  let ec2 = new ExampleOfConstructor("Heena");
// console.log(ec2.name);


//private constructor
//when we want to apply restrictions on user's to create an object of class 
class DemoTest{

    private name : string = "Gauri";

    private constructor(){

    }
    
    private demoMethodExample() {
        console.log("Demo Method Example");
    }
}

let p = new DemoTest();


