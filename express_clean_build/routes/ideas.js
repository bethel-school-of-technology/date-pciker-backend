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
            // where: {
            //     UserId: req.body.userId
            // },
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

//============//Comments routes//============//
  //==possibly use findByPk??==//
// router.get('/comments', function(req, res, next) {
//     models.comments
//       .findAll({include: [{ model: models.comments }]})
//       .then(ideasFound => {
//         res.setHeader('Content-Type', 'application/json');
//         res.send(JSON.stringify(ideasFound));
//       });
//   });

//   router.get('/profile/:username', function(req, res, next) {
//     models.users
//         .findByPk(req.params.Username)
//         .then(user => {
//             if (user) {
//                 res.render('profile', {
//                     FirstName: user.FirstName,
//                     LastName: user.LastName,
//                     Email: user.Email,
//                     Username: user.Username
//                 });
//             } else {
//                 res.send('User not found');
//             }
//         });
//   });

module.exports = router;
