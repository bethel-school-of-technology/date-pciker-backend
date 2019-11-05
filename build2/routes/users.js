var express = require('express');
var router = express.Router();
var models = require('../models');

/* GET users listing. */
router.get('/profile/:username', function(req, res, next) {
  models.users
  .findByPk(req.params.username)
  .then(
    user => {
      if (user) {
        res.send(JSON.stringify(user.data))
      }
    }
  )
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

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.username,
        Password: req.body.password
      }
    })
    .then(user => {
      if (user) {
        res.send('Login succeeded!');
      } else {
        res.send('Invalid login!');
      }
    });
});

module.exports = router;
