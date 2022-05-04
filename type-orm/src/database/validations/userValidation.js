const validator = require("email-validator");

class Validations {

    constructor() {    
    }

    static emailValidation(email) {

        if(!validator.validate(email)) {
            throw new Error("Invalid Email");
        }
    }

    static passwordValidation(password) {
    
        if(password.leght < 6) {
            throw new Error("Invalid Password");
        }
    }
}

module.exports = Validations;
