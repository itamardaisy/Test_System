var regexp = require('node-regexp')

class AuthValidation { 
    constructor() {}
    inputValidator(email, password) {
        if (this.validateEmail(email) && this.validatePassword(password)){
            return true;
        } else {
            return false;
        }
    }

    emailValidator (email) {
        if(this.validateEmail(email)){
            return true;
        } else {
            return false;
        }
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    validatePassword(password) {
        var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/
        return re.test(String(password).toLowerCase());
    }
}
module.exports = new AuthValidation();
