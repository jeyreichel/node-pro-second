const express = require('express');
const axios = require('axios');
const sgMail = require('@sendgrid/mail');
const router = express.Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.get('/', async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "Api is running success!"
        });
    } catch (error) {
        console.error(error)
    }
});

module.exports = router;
