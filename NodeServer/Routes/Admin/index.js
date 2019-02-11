var express = require('express')
var app = express()


const loginProc = require('../Dal/Login/loginProcedure')

router.get('/Login', (req, res) => {
   const email = req.query.email;
   const password = req.body.password;
   if (email && password) {
      let user = loginProc.login(email, password);
      console.log(user);
   }
   else {
      res.status(400).send('missing username or password');
   }
});
module.exports = router;
