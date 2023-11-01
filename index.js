const express = require('express');
const admin = require('firebase-admin');
require('dotenv').config()
const cors = require('cors');
const apiRouters = require('./api/apiRoutes');

const app = express();
const port = 5050;

app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', apiRouters);

app.listen(port, () => console.log(`Server running on port ${port}`));
