const express = require('express');
const path = require('path');
const router = express.Router();


const basePath = path.join(__dirname, '../templates');


router.get('/about', (req, res) => {
    res.sendFile(`${basePath}/about.html`)
})



module.exports = router;