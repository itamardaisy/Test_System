var express = require('express')
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');
const Admin = require('../../Models/Admin');
const statusCodes = require('../../Models/ErrorCodesEnum');
const bcrypt = require('bcrypt');

// Middleware usege:
const authValidate = require('../../Middleware/Authentication');
const registerValidation = require('../../Middleware/Registration');

router.post('/login', (req, res) => {
    try {
        if (authValidate.inputValidator(req.body.email, req.body.password)) {
            bcrypt.hash(req.body.password, 'E1F53135E559C253', (err, hash) => {
                if (err) {
                    console.log(err);
                    res.send(400, { error: statusCodes.unspecifiedError });
                } else {
                    let email = req.body.email;
                    let password = hash;
                    let params = [new sqlP("Email", sql.VarChar(50), email),
                                  new sqlP("Password", sql.VarChar(50), password)]
                    repo.excecuteProcedureDB('spLogin', params, response => {
                        if (response !== null) {
                            let admin = new Admin(user.Id, user.Username, user.Email, user.Password, user.PhoneNumber, user.IsActive);
                            res.status(200).send({ admin: admin });
                        } else {
                            // TODO: create the scenario that the response is null.
                        }
                    });
                }
            });
        } else {
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
                    res.status(200).send({ status: statusCodes.success });
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
            bcrypt.hash(req.body.password, 'E1F53135E559C253', (err, hash) => {
                if (err) {
                    console.log(err);
                    res.send(400, { error: statusCodes.unspecifiedError });
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
                            res.status(200).send(statusCodes.usernameExist);
                        } else if (response === statusCodes.emailExist) {
                            res.status(200).send(statusCodes.emailExist);
                        } else {
                            res.status(200).send({ status: statusCodes.success });
                        }
                    });
                }
            });
        } else {
            console.log('Error --> ' + err);
            res.send(200, { status: statusCodes.invalidInputs })
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send(statusCodes.unspecifiedError);
    }
});
module.exports = router;
