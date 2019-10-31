var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/profile', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  res.send('login page')
})

router.get('/signup', function(req, res, next) {
  res.send('signup page')
});

router.post('/signup', function(req, res, next) {
  models.users.findOrCreate({
    where: {
      username: req.body.username
    },
    defaults: {
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      email: req.body.email,
      password: req.body.password
    }
  }).spread(function(result, created) {
    if (created) {
      res.send('User Successfully created')
    } else {
      res.send('this user already exists')
    }
  }) 
})

module.exports = router;
