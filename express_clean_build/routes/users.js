var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {
  models.users
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

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  models.users
      .findOne({
          where: {
              Username: req.body.username,
              Password: req.body.password
          }
      })
      .then(user => {
          if (user) {
              res.send('Login succeeded!');
          } else {
              res.send('Invalid login!');
          }
      });
});

// SECURE POST LOGIN ROUTE PRIOR TO PASSPORT

// router.post('/login', function(req, res, next) {
//   models.users
//     .findOne({
//       where: {
//         Username: req.body.username,
//         Password: req.body.password
//       }
//     })
//     .then(user => {
//       if (user) {
//         res.redirect('profile/' + user.UserId); //<---Change this line to redirect to the profile
//       } else {
//         res.send('Invalid login!');
//       }
//     });
// });

// SECURE POST LOGIN ROUTE WITH PASSPORT

// router.post('/login', passport.authenticate('local', {
//   failureRedirect: '/users/login'
//   }),
//   function (req, res, next) {
//     res.redirect('profile/' + req.user.UserId);
// });

// SECOND POST LOGIN ROUTE W/ PASSPORT

// router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
//   function (req, res, next) { res.redirect('profile') });  //<--- Called Without UserID

router.get('/profile/:username', function(req, res, next) {
  models.users
      .findByPk(req.params.Username)
      .then(user => {
          if (user) {
              res.render('profile', {
                  FirstName: user.FirstName,
                  LastName: user.LastName,
                  Email: user.Email,
                  Username: user.Username
              });
          } else {
              res.send('User not found');
          }
      });
});

// SECURE ROUTE W/ PASSPORT

// router.get('/profile', function (req, res, next) {
//   if (req.user) {
//     models.users
//       .findByPk(parseInt(req.user.UserId))
//       .then(user => {
//         if (user) {
//           res.render('profile', {
//             FirstName: user.FirstName,
//             LastName: user.LastName,
//             Email: user.Email,
//             Username: user.Username
//           });
//         } else {
//           res.send('User not found');
//         }
//       });
//   } else {
//     res.redirect('/users/login');
//   }
// });

router.get('/ideas', function(req, res, next) {
  res.render('ideas');
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
