var express = require('express')
const router = express.Router();

const AuthProcedure = require('../../Dal/Auth/AuthProcedure')
router.post('/Login', (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
   if (email && password) {
      let user = AuthProcedure.login(email, password);
      console.log(user);
      res.send(user).status(200);
   }
   else {
      res.status(400).send('missing username or password');
   }
});
module.exports = router;
