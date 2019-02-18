const express = require('express');
const app = express();
const cors = require('cors');

const admin = require('./Routes/Admin/index');
const test = require('./Routes/Test/index')

// Middlewares
app.use(cors());
app.use(express.json());

app.use('/admin', admin) // Admin Routes
app.use('/test', test);

const port = process.env.PORT || 5122;
app.listen(port, () => console.log(`Listening on port ${port} ⚡`));
