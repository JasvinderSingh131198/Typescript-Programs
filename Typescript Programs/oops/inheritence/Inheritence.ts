

//Need of Inheritence
//Inheritence is define parent and child relationship
//parent and child relationship means Is:A relationship
//we have to use extends keyword to achieve Is:A relationship

// class Human {
//     read(){
//         console.log("Reading");
//     }

//     sleep(){
//         console.log("Sleeping");
//     }
// }

// class Male extends Human{

// }

// const m = new Male();
// m.read();
// m.sleep();

// class Female extends Human{
   
// }


// const f = new Female();
// f.read();
// f.sleep();

// class Transgender extends Human{

// }

// const t = new Transgender();
// t.read();
// t.sleep();


//1. Single Inheritence
// class Human {
//     read(){
//         console.log("Reading");
//     }

//     sleep(){
//         console.log("Sleeping");
//     }
// }

// class Male extends Human{

// }

// const m = new Male();
// m.read();
// m.sleep();


//2. Multilevel Inheritence
// class GrandParent {
//    farm(){
//     console.log("Mango Farm");
//    }
// }

// class Parent extends GrandParent {
//        farm2(){
//     console.log("Mango Farm");
//    }
// }

// const p = new Parent();
// p.farm();

// class GrandSon extends Parent {
  
// }

// const g = new GrandSon();
// g.farm();
// g.farm2();

//3. Hierachical Inheritence

// class Human {
//     read(){
//         console.log("Reading");
//     }

//     sleep(){
//         console.log("Sleeping");
//     }
// }

// class Male extends Human{

// }

// const m = new Male();
// m.read();
// m.sleep();

// class Female extends Human{
   
// }

//4. Multilevel Inheritence
// class MarutiSuxuzi {
//   color(){
//     console.log("Addition of two number " + (10 + 20));
//     console.log("My car clor is Red");
//   }
// }

// class Hyundai {
//   color(){
//     console.log("Substraction of two number " + (10 - 20));
//     console.log("My car clor is Blue");
//   }
// }

// class Kia extends MarutiSuxuzi, Hyundai{
   
// }

// const k = new Kia();
// k.color();



