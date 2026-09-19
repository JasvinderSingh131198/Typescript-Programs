

//classes example

class PenExample {

    //Ina class when we declared any variable that variable known as a property
    name123 : string = 'Rahul';

    //Method Example with parameter
    addition(no1 : number, no2 : number){
        console.log("Addition " + (no1 + no2));
    }

    //method without parameter
    multiplication(){
        console.log(10 * 20);
    }

    //Method with Optional Parameters
    wish(greet : string, name? : string){
        console.log(greet + " " + (name || "Snehal"));
    }


    //Method with default Parameter
    studentData(name : string = "Gauri"){
        console.log(name + " is a good girl");
    }

    //Method with return statement
    division(no1 : number, no2 : number) : number{
        return no1/no2;
    }
 
}


//Object
//Object is a instance of a class
//Object we can create with new keyword

let p1 = new PenExample();

//console.log(p1.name123);
//p1.addition(20, 30);
//p1.multiplication();
//p1.wish("Good Morning", "Sadanand");
//p1.studentData("Nilam");

const output = p1.division(10, 5);
console.log(output + 100);