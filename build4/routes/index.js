<<<<<<< HEAD
var express = require("express");
var router = express.Router();
var models = require("../models");
var authService = require("../services/auth");

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

//CHECKS WEB TOKEN
router.get("/checkToken", function(req, res) {
    let token = req.cookies.jwt;
    if (token) {
        authService.verifyUser(token)
        .then(res.sendStatus(200))
    } 
});

router.get("/signup", function(req, res, next) {
  res.render("signup");
});

// Create new user if one doesn't exist
router.post("/signup", function(req, res, next) {
  models.users
    .findOrCreate({
      where: {
        Username: req.body.Username
      },
      defaults: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        Email: req.body.Email,
        Password: req.body.Password
      }
    })
    .spread(function(result, created) {
      if (created) {
        res.send("User successfully created");
      } else {
        res.send("This user already exists");
      }
    });
});

// Login user and return JWT as cookie
router.post("/login", function(req, res, next) {
  models.users
    .findOne({
      where: {
        Username: req.body.Username,
        Password: req.body.Password
      }
    })
    .then(user => {
      if (!user) {
        console.log("User not found");
        return res.status(401).json({
          message: "Login Failed"
        });
      }
      if (user) {
        let token = authService.signUser(user); // <--- Uses the authService to create jwt token
        res.cookie("jwt", token, { httpOnly: true }) // <--- Adds token to response as a cookie
        .sendStatus(200)
      } else {
        console.log("Wrong password");
        res.redirect("login");
      }
    });
});

router.get("ideas", function(req, res, next) {
  models.ideas;
  findAll().then(ideasFound => {
    res.setHeader("Content-Type", "application/json");
  });
});

module.exports = router;
=======
var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//CHECKS WEB TOKEN
// router.get('/checkToken', authService, function(req, res) {
//     res.sendStatus(200);
// });

// router.get('/actors', function(req, res, next) {
//   models.actor
//     .findAll({include: [{ model: models.film }]})
//     .then(actorsFound => {
//       res.setHeader('Content-Type', 'application/json');
//       res.send(JSON.stringify(actorsFound));
//     });
// });
router.get('/signup', function(req, res, next) {
    res.render('signup');
});

// Create new user if one doesn't exist
router.post('/signup', function(req, res, next) {
    models.users
        .findOrCreate({
            where: {
                Username: req.body.Username
            },
            defaults: {
                FirstName: req.body.FirstName,
                LastName: req.body.LastName,
                Email: req.body.Email,
                Password: req.body.Password
            }
        })
        .spread(function(result, created) {
            if (created) {
                res.send('User successfully created');
            } else {
                res.send('This user already exists');
            }
        });
});

// Login user and return JWT as cookie
router.post('/login', function(req, res, next) {
    models.users.findOne({
        where: {
            Username: req.body.Username,
            Password: req.body.Password
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
router.get('ideas'),
    function(req, res, next) {
        models.ideas
        findAll()
            .then(ideasFound => {
                res.setHeader('Content-Type', 'application/json');
            });
    };

module.exports = router;
>>>>>>> 308756a52e64dad91cd52f6b2c3ba91c520f0699
