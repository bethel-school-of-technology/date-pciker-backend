var express = require("express");
var router = express.Router();
const mysql = require("mysql2");
var models = require("../models");
var authService = require("../services/auth"); //<--- Add authentication service


/* GET users listing. */
router.get("/", function(req, res, next) {
    res.send("respond with a resource");
});

router.get("/signup", function(req, res, next) {
    res.render("signup");
});

router.get("/profile", function(req, res, next) {
    let token = req.cookies.jwt;
    console.log(token)
    authService.verifyUser(token)
        .then(user => {
            if (user) {
                res.send(JSON.stringify(user));
            } else {
                res.status(401);
                res.send('Must be logged in')
            }
        })
});

router.get("/logout", function(req, res, next) {
    res.cookie("jwt", "", { expires: new Date(0) });
    res.send("Logged out");
});

router.get("/ideas", function(req, res, next) {
    res.render("ideas");
});

router.post("/ideas", function(req, res, next) {
    models.ideas
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

module.exports = router;