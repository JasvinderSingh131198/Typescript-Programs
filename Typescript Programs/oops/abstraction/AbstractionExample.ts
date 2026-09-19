

//Abstraction
//Showing only essential details and hiding internal implementation details.
//We can achieve abstraction in two ways
//1. Abstract Class (0 to 100%)
//2. Interface  (100%)

//Abstract Class
// When we declared any class with abstract keyword that class known as AC.
// We can achieve abstraction with abstract method
// abstract method it means the method declared without body.
// we can't declared AM in normal class
// If we want declared AM then class should be abstract only
// We can declared AC without an AM
// In a Abstract class we can declared property, normal method, static method
// We can't create an object of AC
// We can access all abstract class property and normal method, constructor in impletemented class

abstract class DemoAbstractClass {

    candidate : string;

    constructor(candidate : string){
        this.candidate = candidate;
        console.log(this.candidate);
    }

    abstract abMethod() : void;

    film(){
        console.log("Durandhar Movie");
    }

    static fruite(){
        console.log("Mango is Fruite");
    }
    
}

class ImpletementedClass extends DemoAbstractClass{

    constructor(candidate : string){
        super(candidate);
    }
  
    abMethod(){
        console.log("This is the implementation of Abstract Method");
    }
}

//let obj = new DemoAbstractClass();
let obj = new ImpletementedClass("Sopan");
DemoAbstractClass.fruite();
obj.film();