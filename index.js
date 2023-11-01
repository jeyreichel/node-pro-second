const express = require('express');
const admin = require('firebase-admin');
require('dotenv').config()
const cors = require('cors');
const apiRouters = require('./api/apiRoutes');
const sgMail = require('@sendgrid/mail');

admin.initializeApp({
    credential: admin.credential.cert({
        // Add your Firebase Admin SDK credentials here
        projectId: 'finlister-c6cab',
        clientEmail: "firebase-adminsdk-xobyi@finlister-c6cab.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCsVR9ZSlAqnekt\n3vvXt/swq2mTwMXgJUEyp+nyXyLQvjuwf0eHxysriL0SnupGy25XN2i5tia16yWl\nJcqaWHTzjTPDJDighgF3Ayx+MX6naRkd3eNCCspOYMsPBOIQR1sziAFJsHuQKoA8\nDXPwVnlqLRFxmriX0hHcZaOmXhgqA+5nnZhOJemxX1Y/SAt467wQ1VL0CFKHm7op\nkifg5yP/EElJxGQjPKTELqEWdHBJk7pz24cTnKVMQJgaQJKF6snumMR7qDYzEG6j\npI0DRdW7Dc2UFXXBq0AsGypCzYrv0ilaNVskIah9R/Uab/d3RqE8CsYB1dxzhJww\nn6uwZio3AgMBAAECggEAAITzJrw8GJzINpys6p4B0kg59bmHfyDtnN73rATQYIuq\nN2Jyzzxw610qoLM85oC3cOjYVnLvk+3E+8Xs4eExXQiIZualiwpMV9T5Hdo9VPjS\nnA3uoOTSbkEJa56qpbzpT/LxegzfmnQeVc/+kPNZw1Gmc06xjreR2TWvNBGlhf7i\nwn68tkLpZ8t8xuCkoi+p0BJH1iZIBv5ZmDWhYDmvUeHe8zlovUaACJdi6juII3+u\nceiAHjC+REDzbo9LdJ/Hs76A6J3wKiU5EGbauL0gLfYr7/hh+rNvNRoXNGj3VZg2\nP4++S0SLnlo8SS+3cc7S0BJn/5y4vIk4AvHySalX6QKBgQDwZyCLb/YUadOIjuwG\ntrk5Yti5nykCBSJeLJyhfTJBLgzucVtUOFhwsfXlw3FT+3pKPRfDU613nFOC9r0x\nwUnliHl3bHQDDXJGkPlErJvEUBQoZk6Rek3qv5v5hMCGGztqO+1cqnEB8O0EUzqL\n5KLxQjG3RBm1TiioTwX/IzmnfwKBgQC3g2iw1uW7vFfcxTPSbY8wtvBnhK3UXbD7\nWAy+9hlIezdrkpkRn2a4Kk4cYqK13ZAdJApfsdskniU6ERKWqmYj4aScnqIDFEPM\nh27ZZHjrERT/FLvwe/j/LeSLecda8v1ZqPxafcls/+gMGYOrs/5D4O+mX3mYOs30\n9wrKOWYZSQKBgFsZiXCtneAAdmPCXVjx92Dyv1QgJ0cXsP1lBHoB2oButgHJvSU+\nMO2L0rYeCR0dKCtn2VBwrkSsXc08OVfYemtb+0OxOolJmCt7lqpairCq8+iXVGC2\nqz4xHCdDEj3/pdVNHlbGVAq7ROYlsAMBQmoQfoyHZwKYurmFMK2NqLR7AoGALtRl\n3tq3/VRux3O7abNzmubUKlZ9VXgjNcCeYAzFHu3ykozyasDWoaCKFkxFYUuM/yK3\nUvw8A/gnX84DhFcvgXCPZThF96swMf1NmEQ/Zx0Q0pcj7pZ0UAoSDFWjPd5MMJki\n7KS0xg/30z6fjy17cS7xeO9cRDCdZim0oy5Kk6ECgYEAmT488hG2d98atIeWvYW6\ngACVLHH55gapZ0XMRlhDj7IqU+AiH+OXU8h5zXeo8XvDyCsEgknS/AxxtSMfevyA\ni1qBMNRWEGrHcqZc7wfBagO+ETWnOCJH0gD/oNEDW+2Xm0iu32pi5H1/Ce64tqqf\na6GzEPcU6f+QQ/GXp9J26W8=\n-----END PRIVATE KEY-----\n".replace(/\\n/g, '\n')
    }),
    databaseURL: 'https://finlister-c6cab.firebaseio.com',
});

const app = express();
const port = 5050;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
app.use(cors());
app.use(express.json({ extended: false }));
app.use('/api', apiRouters);

app.listen(port, () => console.log(`Server running on port ${port}`));
