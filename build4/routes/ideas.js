var express = require('express');
var router = express.Router();
var models = require('../models');
var passport = require('../services/passport');

// /* GET ideas listing. */
// router.get('/', function(req, res, next) {
//     res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
    models.ideas
        .findAll({ include: [{ model: models.ideas }] })
        .then(ideasFound => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(ideasFound));
        });
});


//NEEDED: GET and POST ROUTESs


module.exports = router;