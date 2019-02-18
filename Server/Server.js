const express = require('express');
const app = express();
const cors = require('cors');

const admin = require('./Routes/Admin/index');
const test = require('./Routes/Test/index')

// Middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });
  
app.use('/admin', admin) // Admin Routes
app.use('/test', test);  // Test Routes

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ⚡`));
