const express = require('express');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log(__dirname);
    console.log(path.join(__dirname+'/../../build/index.html'));
    res.sendFile(path.join(__dirname+'/../../build/index.html'));
});

module.exports = router;
