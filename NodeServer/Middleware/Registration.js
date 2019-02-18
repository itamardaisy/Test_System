const compile = require('template-literal');
var regexp = require('node-regexp');
const cors = require('cors');
var sql = require('mssql');

class RegisterValidation {
    adminInputValidation(username, email, password, phoneNumber) {

    }

    checkIfUsernameExist(username) {
        let query = 'SELECT Id FROM [Admin] WHERE Username = {username}';
        console.log('')    
    }
}