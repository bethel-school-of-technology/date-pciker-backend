var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
const models = require('../models');

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
module.exports = router;