var express = require('express')
const 
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');
const Admin = require('../../Models/Admin');
const statusCodes = require('../../Models/ErrorCodesEnum');

// Middleware usege:
const authValidate = require('../../Middleware/Authentication');
const registerValidation = require('../../Middleware/Registration');

router.post('/login', (req, res) => {
    try {
        var validate = authValidate.inputValidator(req.body.email, req.body.password);
        if (!validate) {
            let email = req.body.email;
            let password = req.body.password;
            let params = [new sqlP("Email", sql.VarChar(50), email),
            new sqlP("Password", sql.VarChar(50), password)]
            repo.excecuteProcedureDB('spLogin', params, user => {
                let admin = new Admin(user.Id, user.Username, user.Email, user.Password, user.PhoneNumber, user.IsActive);
                res.status(200).send({admin: admin});
            });
        }
        else {
            res.status(400).send('missing username or password');
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send('Something went wrong.');
    }
});

router.post('/logout', (req, res) => {
    try {
        if (authValidate.emailValidator(req.query.email)) {
            let email = req.query.email;
            let params = [new sqlP('email', sql.VarChar(50), email)];
            repo.excecuteProcedureDB('spLogout', params, response => {
                if (response === statusCodes.unspecifiedError) {
                    res.status(400).send(statusCodes.unspecifiedError)
                } else {
                    res.status(200).send({status: statusCodes.success});
                }
            });
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send(statusCodes.unspecifiedError);
    }
});

router.post('/register', (req, res) => {
    try {
        if (registerValidation.adminInputValidation(req.body.Email, req.body.Password, req.body.PhoneNumber)) {
            let username = req.body.Username;
            let email = req.body.Email;
            let password = req.body.Password;
            let phoneNumber = req.body.PhoneNumber;
            let params = [new sqlP('Username', sql.VarChar(50), username),
            new sqlP('Email', sql.VarChar(50), email),
            new sqlP('Password', sql.VarChar(50), password),
            new sqlP('PhoneNumber', sql.VarChar(50), phoneNumber)];
            repo.excecuteProcedureDB('spRegisterAdmin', params, response => {
                if (response === statusCodes.usernameExist) {
                    res.status(400).send(statusCodes.usernameExist);
                } else if (response === statusCodes.emailExist) {
                    res.status(400).send(statusCodes.emailExist);
                } else {
                    res.status(200).send({status: statusCodes.success});
                }
            });
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send(statusCodes.unspecifiedError);
    }
});
module.exports = router;
