

//Super Keyword
//The super keyword in TypeScript is used to access members (constructor, methods, properties) of the parent class from the child class.
//Super keyword refer to the parant classes

//1. We can access parent class constructor with super keyword
//2. We can call parent class method with super keyword
//3. With Super keyword we can access parent class property

class FatherMother {

    student : string;
    name : string;

    constructor(name : string, student : string){
        this.name = name;
        this.student = student;
    }

    display(){
        console.log(this.name);
    }

    salary(){
        console.log("Snehal has 10.5 LPA CTC");
    }


}

class ChildExample extends FatherMother{
    
    constructor(name : string, student : string){
        super(name, student);
    }

    salary(){
        console.log("Rahul has 10.6 LPA CTC");
        super.salary();
    }

    show(){
        console.log(this.student);
    }
}

let c = new ChildExample("Gauri", "Pranoti");
//c.display();
//c.salary();
c.show();

//Difference between this and super

//this                                          //super
//refer to the current class property           refer to the parent class property
//refer to the current class methods            refer to the parent class method
//refer to the current class constructor        refer to the parent class property
//Uses for single class only                    Uses for parent and child class        