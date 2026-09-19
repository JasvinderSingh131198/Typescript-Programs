
//Debuging Mode : We have to check our code line by line
//Brake point : BP Use to stop execution on that perticular statement
//F5: Continue
//F10: execute line by line

// console.log("Hello All");
// console.log("Good Morning");
// console.log("How Are You");


//1. Static Type Checking

// let age = 25;
// age = "Twenty Five"; // No error
// console.log(age * 2); // NaN


//2. Better IntelliSense & Auto-Completion
console.log('')

//3. Interfaces Support
interface Employee {
    id: number;
    name: string;
    salary: number;
}


//4. Supports Object-Oriented Programming Better
class Employee2 {
    constructor(
        public id: number,
        public name: string
    ) {}
    display(): void {
        console.log(this.name);
    }
}
const emp2 = new Employee2(101, "Ganesh");
emp2.display();

//5. Generics Support : Reusable code with type safety.
function printDataasd<T>(data: T): T {
    return data;
}
//printData<string>("Hello");
//printData<number>(100);

