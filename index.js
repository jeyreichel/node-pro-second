const express = require('express');
const admin = require('firebase-admin');
require('dotenv').config()
const cors = require('cors');
const apiRouters = require('./api/apiRoutes');
const sgMail = require('@sendgrid/mail');

admin.initializeApp({
    credential: admin.credential.cert({
        // Add your Firebase Admin SDK credentials here
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n')
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});

const app = express();
const port = 5050;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', apiRouters);

app.listen(port, () => console.log(`Server running on port ${port}`));
