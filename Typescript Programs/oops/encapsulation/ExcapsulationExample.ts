

//Encapsulation
//Wrapping data into the single unit that is known as encapsulation
//Always talk about data hiding

//Getter
//we have to access data from class with getter method only

//Setter
//we have to set data in a  class with setter method only

class  EncapsulationExample {
    
    private a : number = 10;
    private b : string = "Snehal";
    private company : string;

    constructor(company : string){
        this.company = company;
    }

    setCompany(company:string) {
        this.company = company;
    }

    getCompany() : string{
        return this.company;
    }

    getA() : number{
        return this.a;
    }

    getB() : string{
        return this.b;
    }

    
}

const en = new EncapsulationExample("Edso Services");
//console.log(en.getA());
//console.log(en.getB());
console.log(en.getCompany());
