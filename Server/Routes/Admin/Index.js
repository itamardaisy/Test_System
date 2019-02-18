var express = require('express')
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');
const Admin = require('../../Models/Admin');

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
                console.log(user);
                let admin = new Admin(user.Id, user.Username, user.Email, user.Password, user.PhoneNumber, user.IsActive);
                console.log('Admin --> ' + admin);
                res.send(admin).status(200);
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
                if (!response) {
                    console.log(response);
                    res.status(400).send('Something went wromg with the logour procedure.')
                } else {
                    res.status(200).send('Admin has Logout');
                }
            });
        }
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send('Something went wrong.');
    }
});

router.post('/register', (req, res) => {
    try {
        let username = req.body.Username;
        let email = req.body.Email;
        let password = req.body.Password;
        let phoneNumber = req.body.PhoneNumber;
        let params = [new sqlP('Username', sql.VarChar(50), username),
                      new sqlP('Email', sql.VarChar(50), email),
                      new sqlP('Password', sql.VarChar(50), password),
                      new sqlP('PhoneNumber', sql.VarChar(50), phoneNumber)];
        repo.excecuteProcedureDB('spRegisterAdmin', params, response => {
            if (response == false) {
                res.status(200).send('Username is already exist.');
            } else {
                res.status(200).send('New Admin has registered.');
            }
        });
    } catch (err) {
        console.log('Error --> ' + err);
        res.status(400).send('Something went wrong.');
    }
});
module.exports = router;
