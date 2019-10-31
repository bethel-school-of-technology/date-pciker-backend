var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var models = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/ideas', function(req, res, next) {
    models.ideas.findAll({}).then(ideasFound => {
        res.render('ideas', {
            ideas: ideasFound
        });
    });
});

router.get('/specificIdea', function(req, res, next) {
    models.ideas
        .findOne({
            where: {
                ideas_id: 2
            }
        })
        .then(ideas => {
            res.render('specificIdea', {
                ideas: ideas
            });
        });
});

// router.get('/ideas/:id', function(req, res, next) {
//     let ideaId = parseInt(req.params.id);
//     models.ideas
//         .findOne({
//             where: {
//                 idea_id: ideaId
//             }
//         })
//         .then(idea => {
//             res.render('specificIdea', {
//                 ideas: ideas
//             });
//         });
// });


//here's a change to commit//

router.get('/ideas', function(req, res, next) {
    models.ideas
        .findAll({ include: [{ model: models.profiles }] })
        .then(ideasFound => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(ideasFound));
        });
});

router.post('/ideas', function(req, res, next) {
    models.ideas.create(req.body)
        .then(newIdea => {
            res.setHeader('Content-Type', 'application/json');
            res.send(JSON.stringify(newIdea));
        })
        .catch(err => {
            res.status(400);
            res.send(err.message);
        });
});

module.exports = router;