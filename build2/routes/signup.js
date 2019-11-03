const express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res, next) {
    models.users
        .findAll({
            attributes: ['user_id', 'first_name', 'last_name'],
            include: [{
                model: models.ideas,
                attributes: ['ideas_id', 'topic', 'description']
            }]
        })
        .then(usersFound => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(usersFound));
        });
});

router.get('/:id', function(req, res, next) {
    models.users
        .findByPk(parseInt(req.params.id), {
            include: [{ model: models.ideas }]
        })
        .then(usersFound => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(usersFound));
        })
});

router.post('/', function(req, res, next) {
    models.user.findOrCreate({
            where: {
                first_name: req.body.first_name,
                last_name: req.body.last_name
            }
        })
        .spread(function(result, created) {
            if (created) {
                res.redirect('/actors/' + result.user_id);
            } else {
                res.status(400);
                res.send('User already exists');
            }
        })
});

router.put("/:id", function(req, res, next) {
    let userId = parseInt(req.params.id);
    models.users
        .update(req.body, { where: { users_id: userId } })
        .then(result => res.redirect('/users/' + userId))
        .catch(err => {
            res.status(400);
            res.send("There was a problem updating the user.  Please check the actor information.");
        });
});

router.delete("/users/:id", function(req, res, next) {
    let actorId = parseInt(req.params.id);
    models.users
        .destroy({
            where: { users_id: usersId }
        })
        .then(result => res.redirect('/users'))
        .catch(err => {
            res.status(400);
            res.send("There was a problem deleting the user.  Please make sure you are specifying the correct id.");
        });
});

module.exports = router;