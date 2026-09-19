

//Protected Acess Modifier

//If a class constructor is declared private in TypeScript, that class cannot be extended.


class RBI{

    private constructor(){
        
    }
    protected homeLoan = 7.4;

    protected personalLoan(){
        console.log("Personal Loan");
    }
}

class  ICICI extends RBI {

    display(){
        console.log(this.homeLoan);
        this.personalLoan();
    }

}

let obj = new ICICI();
obj.display();