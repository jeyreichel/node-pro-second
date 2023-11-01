const express = require('express');
const axios = require('axios');
const router = express.Router();

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
