const request = require('request');
const express = require('express');
const router = express.Router();

router.get('/:url', function(req, res) {
    let url = req.params.url;
    if (url) {
        url = decodeURIComponent(url);
        request.get(url).pipe(res);
    } else {
        res.status(400).send('Invalid Request');
    }
});

module.exports = router;
