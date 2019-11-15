<<<<<<< HEAD
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


=======
var express = require('express');
var router = express.Router();
var models = require('../models');
// var passport = require('../services/passport');

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


//NEEDED: POST ROUTESs
//Ideas Post
router.post('/ideas', function(req, res, next) {
    models.users.findOne({
        where: {
            Username: req.body.username,
            Password: req.body.password
        }
    }).then(user => {
        if (!user) {
            console.log('User not found')
            return res.status(401).json({
                message: "Login Failed"
            });
        }
        if (user) {
            let token = authService.signUser(user); // <--- Uses the authService to create jwt token
            res.cookie('jwt', token); // <--- Adds token to response as a cookie
            res.send('Login successful');
        } else {
            console.log('Wrong password');
            res.redirect('login')
        }
    });
});


>>>>>>> 308756a52e64dad91cd52f6b2c3ba91c520f0699
module.exports = router;