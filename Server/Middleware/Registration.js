var emailValidator = require("email-validator");
var passwordValidator = require('validate-password');
var phoneNumberValidator = require('validate-phone-number-node-js');

class RegisterValidation {
    adminInputValidation(email, password, phoneNumber) {
        if (this.checkEmailValidation(email) && this.checkPasswordValidation(password) && this.checkPhoneNumberValidation(phoneNumber)) {
            return true;
        } else {
            return false;
        }
    }

    checkPasswordValidation(password) {
        return (passwordValidator(password)) ? true : false;
    }

    checkPhoneNumberValidation(phoneNumber) {
        return (phoneNumberValidator.validate(phoneNumber)) ? true : false;
    }

    checkEmailValidation(email) {
        return (emailValidator.validate(email)) ? true : false;
    }
}
module.exports = new RegisterValidation();