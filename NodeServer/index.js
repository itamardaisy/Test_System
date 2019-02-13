const express = require('express');
const app = express();
const cors = require('cors');

const admin = require('./Routes/Admin/index');

// middlewares
app.use(cors());
app.use(express.json());

app.use('/admin', admin) // Admin Routes

const port = process.env.PORT || 4201;
app.listen(port, () => console.log(`Listening on port ${port} ⚡`));
