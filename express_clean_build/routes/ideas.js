var express = require('express');
var router = express.Router();


router.get('/ideas', function(req, res, next) {
  models.ideas
    .findAll({include: [{ model: models.ideas }]})
    .then(ideasFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(ideasFound));
    });
});

router.post('/ideas', function(req, res, next) {
    models.ideas
        .findOrCreate({
            where: {
                UserId: req.body.userId
            },
            defaults: {
                Topic: req.body.topic,
                Description: req.body.description,
                IdeasId: req.body.ideasId,
            }
        })
        .spread(function(result, created) {
            if (created) {
                res.send('Idea posted successfully');
            } else {
                res.send('This post already exists');
            }
        });
  });


module.exports = router;
