var express = require('express')
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');
const Admin = require('../../Models/Admin');
const statusCodes = require('../../Models/ErrorCodesEnum');
    const bcrypt = require('bcrypt');
var session = require('express-session')
var crypto = require('crypto');

const saltRounds = 10;

// Middleware usege:
const authValidate = require('../../Middleware/Authentication');
const registerValidation = require('../../Middleware/Registration');

router.post('/login', (req, res) => {
    try {
        if (authValidate.inputValidator(req.body.Email, req.body.Password)) {
            bcrypt.hash(req.body.Password, saltRounds, (err, hash) => {
                if (err) {
                    console.log(err);
                    res.status(400).send({ error: statusCodes.unspecifiedError });
                } else {
                    let email = req.body.Email;
                    let password = hash;
                    let params = [new sqlP("Email", sql.VarChar(50), email),
                    new sqlP("Password", sql.VarChar(50), password)]
                    repo.excecuteProcedureDB('spLogin', params, response => {
                        if (response !== null) {
                            let admin = new Admin(user.Id, user.Username, user.Email, user.Password, user.PhoneNumber, user.IsActive);
                            res.status(200).send({ admin: admin });
                        } else {
                            res.status(404).send({ status: statusCodes.userNotExist });
                        }
                    });
                }
            });
        } else {
            res.status(404).send({ status: statusCodes.invalidInputs });
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send({ status: statusCodes.unspecifiedError });
    }
});

router.post('/logout', (req, res) => {
    try {
        if (authValidate.emailValidator(req.query.email)) {
            let email = req.query.email;
            let params = [new sqlP('email', sql.VarChar(50), email)];
            repo.excecuteProcedureDB('spLogout', params, response => {
                if (response === statusCodes.unspecifiedError) {
                    res.status(400).send({ status: statusCodes.unspecifiedError });
                } else {
                    res.status(200).send({ status: statusCodes.success });
                }
            });
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send({ status: statusCodes.unspecifiedError });
    }
});

router.post('/forgotMyPassword', )

router.post('/register', (req, res) => {
    try {
        if (registerValidation.adminInputValidation(req.body.Email, req.body.Password, req.body.PhoneNumber)) {
            bcrypt.hash(req.body.Password, saltRounds, (err, hash) => {
                if (err) {
                    console.log(err);
                    res.status(400).send({ status: statusCodes.unspecifiedError });
                } else {
                    let username = req.body.Username;
                    let email = req.body.Email;
                    let hashedPassword = hash;
                    let phoneNumber = req.body.PhoneNumber;
                    let params = [new sqlP('Username', sql.VarChar(50), username),
                    new sqlP('Email', sql.VarChar(50), email),
                    new sqlP('Password', sql.VarChar(50), hashedPassword),
                    new sqlP('PhoneNumber', sql.VarChar(50), phoneNumber)];
                    repo.excecuteProcedureDB('spRegisterAdmin', params, response => {
                        if (response === statusCodes.usernameExist) {
                            res.status(404).send({ status: statusCodes.usernameExist });
                        } else if (response === statusCodes.emailExist) {
                            res.status(404).send({ status: statusCodes.emailExist });
                        } else {
                            res.status(200).send({ status: statusCodes.success });
                        }
                    });
                }
            });
        } else {
            console.log('Error --> ' + err);
            res.status(400).send({ status: statusCodes.invalidInputs })
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send({ status: statusCodes.unspecifiedError });
    }
});
module.exports = router;
