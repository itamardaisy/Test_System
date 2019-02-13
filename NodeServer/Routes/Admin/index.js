var express = require('express')
const router = express.Router();
const repo = require('../../Dal/Repository');
const sqlP = require('../../Models/SqlParameter');
const sql = require('mssql');

const AuthProcedure = require('../../Dal/Auth/AuthProcedure')
router.post('/Login', (req, res) => {
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

        let user = AuthProcedure.login(email, password);
        console.log(user);
        res.send(user).status(200);
    }
    else {
        res.status(400).send('missing username or password');
    }
});
module.exports = router;
