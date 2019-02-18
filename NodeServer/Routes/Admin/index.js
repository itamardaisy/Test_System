var express = require('express')
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');
const authValidate = require('../../Middleware/Authentication');
const Admin = require('../../Models/Admin');

router.post('/Login', (req, res) => {
<<<<<<< HEAD
    const email = req.body.email;
    const password = req.body.password;
    let p = new sqlP.SqlParmaeter();
    if (email && password) {
        let params = [new sqlP.SqlParmaeter('email', sql.VarChar(50), email),
                      new sqlP.SqlParmaeter('password', sql.VarChar(50), password)]
        repo.WriteInDb('sp_login', params, user => {
            console.log(user);
            res.send(user).status(200);
        })
    }
    else {
        res.status(400).send('missing username or password');
    }
});
=======
    try {
        var validate = authValidate.inputValidator(req.body.email, req.body.password);
        if (!validate) {
            let email = req.body.email;
            let password = req.body.password;
            let params = [new sqlP("Email", sql.VarChar(50), email),
                          new sqlP("Password", sql.VarChar(50), password)]
            repo.excecuteProcedureDB('sp_login', params, user => {
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
        console.log(err);
        res.status(400).send('Something went wrong.');
    }
});

router.post('/Logout', (req, res) => {
    try {
        if (authValidate.emailValidator(req.query.email)) {
            let email = req.query.email;
            let params = [sqlP.getAsSQLParameter('email', sql.VarChar(50), email)]
            repo.excecuteProcedureDB('sp_logout', params, response => {
                if (!response) {
                    console.log(response);
                    res.status(400).send('Something went wromg with the logour procedure.')
                } else {
                    res.status(200).send('Admin has Logout');
                }
            });
        }
    } catch (err) {
        console.log(err);
    }
});

router.post('/Register', (req, res) => {
    try {

    } catch (err) {

    }
});
>>>>>>> 03a8eed83fc81b7ee02fb9052870b076d497e8c6
module.exports = router;
