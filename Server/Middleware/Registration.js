const emailValidator = require("email-validator");
const PasswordValidator = require('validate-password');
const phoneNumberValidator = require('validate-phone-number-node-js');
const passwordValidator = new PasswordValidator();


class RegisterValidation {
    adminInputValidation(email, password, phoneNumber) {
        if (this.checkEmailValidation(email) && this.checkPasswordValidation(password) && this.checkPhoneNumberValidation(phoneNumber)) {
            return true;
        } else {
            return false;    
        }
    }

    checkPasswordValidation(password) {
        return (passwordValidator.checkPassword(password)) ? true : false;
    }

    checkPhoneNumberValidation(phoneNumber) {
        return (phoneNumberValidator.validate(phoneNumber)) ? true : false;
    }

    checkEmailValidation(email) {
        return (emailValidator.validate(email)) ? true : false;
    }
}
module.exports = new RegisterValidation();