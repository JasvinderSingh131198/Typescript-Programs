

//Custom Exception means creating your own error class by extending the build in class

class InvalidMarraigeAge extends Error{
    constructor(message : string) {
        super(message);
    }
}

function marraige(age : number) {
    if (age > 21) {
        console.log("Candidate is eligible for marraige");
    }else{
        throw new InvalidMarraigeAge("Candidate isn't eligible for Marriage");
    }
}

marraige(20);