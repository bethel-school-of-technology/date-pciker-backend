var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

// router.get('/actors', function(req, res, next) {
//   models.actor
//     .findAll({include: [{ model: models.film }]})
//     .then(actorsFound => {
//       res.setHeader('Content-Type', 'application/json');
//       res.send(JSON.stringify(actorsFound));
//     });
// });

router.get('ideas'),
    function(req, res, next) {
        models.ideas
        findAll()
            .then(ideasFound => {
                res.setHeader('Content-Type', 'application/json');
            });
    };

module.exports = router;