
//Access modifiers are used to control the visibility and accessibility of  property

//1. Public Access Modifier
// The public modifier allows class members to be accessible from anywhere. 
// By default, all class members are public if no access modifier is specified.

//2. Private Access Modifier
//The private modifier restricts access to class members, making them accessible only within the class they are defined. 


class Student {

    public name : string = 'Pranoti';
    private candidate : string = 'Nilam';

    display(){
        console.log(this.candidate);
    }
}

let s = new Student();
console.log(s.name);
s.display();


