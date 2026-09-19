

//B. Runtime-Time / Method Overiding / Dynamic Polymorphism
//1. RTP always heppended parent and in child class
//2. RTP means same method name and same in parameter
//3. When child class doesn't like implementation provided by parent class and child class want to define 
    //his own method implementation that time method overriding happen.

class Parent {
    
    education(){
        console.log("My son will be Engineer..");
    }
}

class Son extends Parent {
     
    override education(){
        console.log("My son will be Video Editor..");
    }

}

let s = new Son();
s.education();

//Difference between Overloading vs Overriding
//Overloading                           Overriding
//class/Functions                       Paranet-child class
//Same method with different param      Same method with same param
//It doesn't required Inheritence       It required Inheritence
//Method Singnature                     extends keyword