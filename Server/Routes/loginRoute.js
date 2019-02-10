const express = require('express');
const router = express.Router();

const loginProc = require('../Dal/loginProcedure')

router.get('/Login', (req, res) => {
    const email = req.query.email;
    const password = req.body.password;
    if (email && password){
        let user = loginProc.login(email, password);
        console.log(user);
    }
    else{
        res.status(400).send('missing username or password');
    }
});

module.exports = router;