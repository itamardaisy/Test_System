var express = require('express')
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');
const authValidate = require('../../Middleware/Authentication');
const Admin = require('../../Models/Admin');

const param = new sqlP.SqlParmaeter();

router.post('/Login', (req, res) => {
    try {
        var validate = authValidate.inputValidator(req.body.email, req.body.password);
        if (!validate) {
            const email = req.body.email;
            const password = req.body.password;
            let params = [param.getAsSQLParameter('email', sql.VarChar(50), email),
            param.getAsSQLParameter('password', sql.VarChar(50), password)]
            repo.WriteInDb('sp_login', params, user => {
                let admin = new Admin(user.username, user.email, user.phoneNumber, user.isActive);
                res.send(admin).status(200);
            });
        }
        else {
            res.status(400).send('missing username or password');
        }
    } catch (err) {
        console.log(err);
        res.status(400).send('Something went wrong.');
    }
});

router.post('/Logout', (req, res) => {
    try {
        if (authValidate.emailValidator(req.query.email))
            const email = req.query.email;
        let params = [param.getAsSQLParameter('email', sql.VarChar(50), email)]
        repo.WriteInDb('sp_logout', params, response => {
            if (!response) {
                console.log(response);
                res.status(400).send('Something went wromg with the logour procedure.')
            } else {
                res.status(200).send('Admin has Logout');
            }
        });
    } catch (err) {
        console.log(err);
    }
});
module.exports = router;
