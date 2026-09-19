

//Object
//An Object in TypeScript is a collection of key-value pairs used to store related data and functionality together. 

// let student :{
//     id : number,
//     name : string,
//     location : string
// }

// student = {
//     id : 1,
//     name : "NikhilKumar",
//     location : "Mumbai"
// }

// console.log(student.id);

//Collection of Objects (array of object)
// let student :{
//     id : number,
//     name : string,
//     location : string
// }[] = 
// [
//     {
//         id : 1,
//         name : "NikhilKumar",
//         location : "Mumbai"
//     },
//     {
//         id : 2,
//         name : "Sopan",
//         location : "Pune"
//     },
//         {
//         id : 3,
//         name : "Snehal",
//         location : "Chennai"
//     }
// ]

// console.log(student[0].location);

//Nested Object
let student :{
    id : number,
    name : string,
    location : {
        address : string,
        pincode : number
    }
}

student = {
    id : 1,
    name : "NikhilKumar",
    location : {
        address : "Pune",
        pincode : 411202
    }
}

console.log(student.location.pincode);