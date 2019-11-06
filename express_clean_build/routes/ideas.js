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
                Username: req.body.username
            },
            defaults: {
                FirstName: req.body.firstName,
                LastName: req.body.lastName,
                Email: req.body.email,
                Password: req.body.password
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


module.exports = router;
