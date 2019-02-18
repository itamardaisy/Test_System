const bcrypt = require('bcrypt');
const repo = require('../Dal/Repository');
const sqlP = require('../Models/SqlParameter');
const sql = require('mssql');

class RegisterValidation {
    adminInputValidation(username, email, password, phoneNumber) {
        if (this.checkUsernameValidation(username) &&
            this.checkEmailValidation(email) && 
            this.checkPasswordValidation(password) &&
            this.checkPhoneNumberValidation(phoneNumber)) {
            return true;
        } else {
            return false;
        }
    }

    checkPhoneNumberValidation(phoneNumber) {
        var re = /^[2-9]\d{2}-\d{3}-\d{4}$/;
        return re.test(String(phoneNumber).toLowerCase());
    }

    checkPasswordValidation(password) {
        return (this.checkIfPasswordNotExist(password)) ? true : false;
    }

    checkIfPasswordNotExist(password) {
        bcrypt.hash(password, 'E1F53135E559C253' ,(err, hash) => {
            if (!err) {
                let query = `SELECT Password FROM [Admin] WHERE Password = ${hash}`;
                repo.excecuteQueryDB(query, data => {
                    return (data !== hash) ? true : false;
                });
            } else {
                console.log(err);
            }
        });
    }

    // The main checker of the username input.
    checkUsernameValidation(username) {
        return (this.checkIfUsernameNotExist(username)) ? true : false;
    }

    // Checks wether the username is exist in the database or not.
    checkIfUsernameNotExist(username) {
        let query = `SELECT Username FROM [Admin] WHERE Username = '${username}'`;
        repo.excecuteQueryDB(query, data => {
            console.log(data);
            return (data !== username) ? true : false;
        });
    }

    checkEmailValidation(email) {
        return (validateEmail(email) && this.checkIfEmailNotExist(email)) ? true : false;
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    checkIfEmailNotExist(email) {
        let query = `SELECT Email FROM [Admin] WHERE Email = ${email}`;
        let params = [new sqlP('Email', sql.VarChar(50), email)];
        repo.excecuteQueryDB(query, params, data => {
            return (data !== email) ? true : false;
        });
    }
}
module.exports = new RegisterValidation();