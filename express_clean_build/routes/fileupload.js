var express = require('express');
var router = express.Router();

router.post('/upload', (req, res, next) => {
    if(req.files === null) {
        return res.status(400).json({ msg: 'no file uploaded' });
    }
})