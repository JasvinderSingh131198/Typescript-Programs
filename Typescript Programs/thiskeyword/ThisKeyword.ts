

//This Keyword
//It is mainly used inside a class to access:
//properties (variables) 
//Methods of the same object.

//1. this keyword refer to the current class property
// class NeedOfThisKeyword {

//     name : string = 'Ankit';

//     constructor(name : string) {
//         this.name = name;
//     }

//     display(){
//         console.log(this.name);
//     }
// }

// const nt = new NeedOfThisKeyword("Mayur");
// nt.display();


//2. this keyword refer current class method
class NeedOfThisKeyword {

    m1(){
        console.log("m1");
        this.m2();
    }

      m2(){
        console.log("m2");
        this.m3();
    }

      m3(){
        console.log("m3");
    }
}

const nt = new NeedOfThisKeyword();
nt.m1();