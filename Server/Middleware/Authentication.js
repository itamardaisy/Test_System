const emailValidator = require("email-validator");
const PasswordValidator = require('validate-password');
const passwordValidator = new PasswordValidator();

class AuthValidation {
    constructor() { }
    inputValidator(email, password) {
        return (this.validateEmail(email) && this.validatePassword(password)) ? true : false
    }

    validateEmail(email) {
        return (emailValidator.validate(email)) ? true : false;
    }

    validatePassword(password) {
        return (passwordValidator.checkPassword(password)) ? true : false;
    }
}
module.exports = new AuthValidation();
