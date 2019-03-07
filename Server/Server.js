const express = require('express');
const app = express();
const cors = require('cors');

const admin = require('./Routes/Admin/index');
const test = require('./Routes/Test/index');
const question = require('./Routes/Question/Index');
const user = require('./Routes/User/Index');

// Middlewares
app.use(cors());
app.use(express.json());
  
app.use('/admin', admin)        // Admin Routes
app.use('/test', test);         // Test Routes  
app.use('/question', question)  // Question Routes
app.use('/user', user);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ⚡`));
