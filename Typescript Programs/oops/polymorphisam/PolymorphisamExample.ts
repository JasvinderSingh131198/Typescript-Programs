
//Polymorphism is one of the main concepts of OOP (Object-Oriented Programming).
//The word Polymorphism means "Many Forms"

//1. Compile-Time Polymorphism
//2. Run-Time Polymorphism


//1. Compile-Time / Method Overloading / Static Polymorphism
// CTP means same method name with different parameter or different datatype

//Rules
//1. We can't define any new method between method declation and method implementation
//2. Only One Implementation Allowed
//3. Implementation Method Must Handle All Cases
//4. In method declartion parameter datatype should be any

class MethodOverLoadingExample {
    
    addition(no1 : number, no2: number, no3 : number) : void;
    addition(no1 : string, no2: string) : void;
    addition(no1 : string) : void;

    addition(no1? : any, no2? : any, no3? : any){
        if (no1 !== undefined && no2 !== undefined  && no3 !== undefined) {
            console.log(no1 + no2 + no3);
        }else if (no1!== undefined) {
            console.log(no1);
        }
    }

    
}

let a = new MethodOverLoadingExample();
//a.addition(10, 20);
//a.addition("Heena ", "Mayank");
a.addition("Ankit");


function multiplication(no1 : number, no2 : number) : void
function multiplication(no1 : string, no2 : string) : void

function multiplication(no1 : any, no2 : any){
    console.log();
}
