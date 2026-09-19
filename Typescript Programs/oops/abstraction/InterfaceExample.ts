
//Interface
//1. In Interface we can declared Property and AM
//2. We can't delcared any constructor
//3. We can't declared any concrete method in Interface
//4. We can't create an object of an Interface
//5. Optional property (?) may or may not be provided.


// interface Student{
//     id : number;
//     name : string;
//     location? : number;
//     exam(): void;
// }

// const stud : Student = {
//     id : 1,
//     name : "Mayank",
//     exam() {
//         console.log("Math Exam");
//     },
// };

// console.log(stud.id);
// console.log(stud.name);
// stud.exam();


//Interface to Interface IS:A relationship
// interface Employee {
//     empName : string;
// }

// interface Actor extends Employee{
//     actorName : string;
// }

// const a : Actor = {
//     actorName : "Akshay Kuname",
//     empName : "Pranoti"
// };

// console.log(a.actorName);
// console.log(a.empName);


//Interface to Class IS:A relationship

// interface Mango{
//     color():void;
// }

// class  Fruites implements Mango {
//    color(){
//     console.log("Mango color is Yellow");
//    }
// }

// let f = new Fruites();
// f.color();


//Multiple Inheritence with classes and Interface
// interface Mango{
//     color():void;
// }

// interface Apple{
//     color():void;
// }

// class  Fruites implements Mango, Apple {
//    color(){
//     console.log("color is Yellow");
//    }
// }

// let f = new Fruites();
// f.color();


//Multiple Inheritence with Interface to Interface

// interface Mango{
//     color():void;
// }

// interface Apple{
//     color():void;
// }

// interface Fruite extends Mango, Apple{

// }

// const f : Fruite = {
//     color() {
//         console.log("Color is Red");
//     },
// }

// f.color();


//Interface with Array in TypeScript
//An Array Interface is used to define the type of elements that an array can store

interface Student{
    id : number;
    name : string;
    location? : string;
}

let s : Student[] = [
    {
        id : 1,
        name : "Gauri",
        location : "Pune"
    },
       {
        id : 2,
        name : "Kalam",
        location : "Pune"
    },
       {
        id : 3,
        name : "Jasvinder",
        location : "Pune"
    },
       {
        id : 4,
        name : "Rahul",
        location : "Pune"
    },
]

console.log(s[1].name);