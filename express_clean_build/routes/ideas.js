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





module.exports = router;
