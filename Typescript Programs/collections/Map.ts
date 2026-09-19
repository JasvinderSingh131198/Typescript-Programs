

//Map
//Map stores data as Key-Value pairs & Similar to Java HashMap
//A Map is a collection of key-value pairs where each key is unique
//Unlike objects, a Map can use any data type as a key (string, number, object, function, etc.).
//we can add duplicate value
//key can't be duplicate

let students = new Map<number, string>();
students.set(1, "Nilam");
students.set(2, "Rahul");
students.set(3, "Pranoti");
students.set(4, "Rahul");
students.set(1, "Soyaf");

//console.log(students);

//get specific value from map
//console.log(students.get(3));

//has() - check key
//console.log(students.has(4));

//delete()
//students.delete(4); 
//console.log(students);

//size()
//console.log(students.size);

//clear()
students.clear();
console.log(students);

// for(let [id, name] of students){
//     console.log(id, name);
// }