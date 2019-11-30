var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function(req, res, next) {
    models.comments
      .findAll({include: [{ model: models.comments }]})
      .then(commentsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(commentsFound));
      });
  });


router.post('/', function(req, res, next) {
    models.comments
        .findOrCreate({
            // where: {
            //     UserId: req.body.userId
            // },
            defaults: {
                Topic: req.body.Topic,
                Description: req.body.Description,
                IdeasId: req.body.IdeasId,
            }
        })
        .spread(function(result, created) {
            if (created) {
                res.send('Comment posted successfully');
            } else {
                res.send('This comment already exists');
            }
        });
  });



module.exports = router;
