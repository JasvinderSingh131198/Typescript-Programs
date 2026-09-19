
//static keyword
//When we don't want associate any property with object that time we have to use static keyword
//If we declared any property with static keyword then we don't need of object to call static keyword inside the class
//If we want to call static keyword outside of class then we have to use class name

class TestDemoOfStatic {
   
    static name : string = "Rahul";

    display(){
        console.log(name);
    }

    static check1(){
        console.log("static method");
    }
}

console.log(TestDemoOfStatic.name);
TestDemoOfStatic.check1();