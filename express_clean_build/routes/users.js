var express = require('express');
var router = express.Router();
var models = require('../models');
// var authService = require('../services/auth'); //<--- Add authentication service

    
  router.get('/signup', function(req, res, next) {
      res.render('signup')});

// ROUTE GIVEN IN FRONT END INTEGRATION //

      // router.get('/staticPlanets', function (req, res, next) {

      //   res.send(JSON.stringify(
      //     staticModels.planet
      //   ));
      // });

  router.post('/signup', function(req, res, next) {
    models.users
      .findOrCreate({
        where: {
          Username: req.body.Username
        },
        defaults: {
          FirstName: req.body.FirstName,
          LastName: req.body.LastName,
          Email: req.body.Email,
          Password: req.body.Password
        }
      })
      .spread(function(result, created) {
        if (created) {
          res.redirect('login');  //<---Change this line to redirect to the login screen
        } else {
          res.send('This user already exists');
        }
      });
  });
   
  // POSSIBLE PROFILE ROUTE?? //

//   router.get('/profile/:id', function (req, res, next) {
//     models.users
//       .findByPk(parseInt(req.params.id))
//       .then(user => {
//         if (user) {
//           res.render('profile', { //find stringify
//             FirstName: user.FirstName,
//             LastName: user.LastName,
//             Email: user.Email,
//             Username: user.Username
//           });
//         } else {
//           res.send('User not found');
//         }
//       });
//   });

router.get('/login', function(req, res, next) {
    res.render('login')});
  
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
          res.redirect('profile/' + user.UserId); //<---Change this line to redirect to the profile
        } else {
          res.send('Invalid login!');
        }
      });
  });

  // router.get('/actors', function(req, res, next) {
  //   models.actor.findAll({}).then(foundActors => {
  //     const mappedActors = foundActors.map(actor => ({
  //       ActorID: actor.actor_id,
  //       Name: `${actor.first_name} ${actor.last_name}`
  //     }));
  //     res.send(JSON.stringify(mappedActors));
  //   });
  // });
  
  router.get('/profile/:id', function(req, res, next) {
    models.users
      .findByPk(parseInt(req.params.id), { 
        include: [{ model: models.users }]
      })
      .then(usersFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(usersFound));
      })
  });

  // router.get('/profile/:id', function (req, res, next) {
  //   models.users
  //     .findByPk(parseInt(req.params.id))
  //     .then(user => {
  //       if (user) {
  //         res.render('profile', {
  //           FirstName: user.FirstName,
  //           LastName: user.LastName,
  //           Email: user.Email,
  //           Username: user.Username
  //         });
  //       } else {
  //         res.send('User not found');
  //       }
  //     });
  //   });

  module.exports = router;

  // find all method with stringify//

//   router.get('/actors', function(req, res, next) {
//     models.actor
//       .findAll({include: [{ model: models.film }]})
//       .then(actorsFound => {
//         res.setHeader('Content-Type', 'application/json');
//         res.send(JSON.stringify(actorsFound));
//       });
//   });

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });


// router.get('/signup', function(req, res, next) {
//   res.render('signup');
// });

// router.post('/signup', function(req, res, next) {
//     models.users
//       .findOrCreate({
//         where: {
//           Username: req.body.username
//         },
//         defaults: {
//           FirstName: req.body.firstName,
//           LastName: req.body.lastName,
//           Email: req.body.email,
//           Password: req.body.password
//         }
//       })
//       .spread(function(result, created) {
//         if (created) {
//           res.redirect('login');  //<---Change this line to redirect to the login screen
//         } else {
//           res.send('This user already exists');
//         }
//       });
//   });

// router.get('/login', function(req, res, next) {
//   res.render('login');
// });

// router.post('/login', function(req, res, next) {
//     models.users
//       .findOne({
//         where: {
//           Username: req.body.username,
//           Password: req.body.password
//         }
//       })
//       .then(user => {
//         if (user) {
//           res.redirect('profile/' + user.UserId); //<---Change this line to redirect to the profile
//         } else {
//           res.send('Invalid login!');
//         }
//       });
//   });
  



// // SECURE POST LOGIN ROUTE WITH PASSPORT

// // router.post('/login', passport.authenticate('local', {
// //   failureRedirect: '/users/login'
// //   }),
// //   function (req, res, next) {
// //     res.redirect('profile/' + req.user.UserId);
// // });

// // SECOND POST LOGIN ROUTE W/ PASSPORT

// // router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
// //   function (req, res, next) { res.redirect('profile') });  //<--- Called Without UserID

// router.get('/profile/:id', function(req, res, next) {
//   models.users
//       .findByPk(req.params.Username)
//       .then(user => {
//           if (user) {
//               res.render('profile', {
//                   FirstName: user.FirstName,
//                   LastName: user.LastName,
//                   Email: user.Email,
//                   Username: user.Username
//               });
//           } else {
//               res.send('User not found');
//           }
//       });
// });

// // SECURE ROUTE W/ PASSPORT

// // router.get('/profile', function (req, res, next) {
// //   if (req.user) {
// //     models.users
// //       .findByPk(parseInt(req.user.UserId))
// //       .then(user => {
// //         if (user) {
// //           res.render('profile', {
// //             FirstName: user.FirstName,
// //             LastName: user.LastName,
// //             Email: user.Email,
// //             Username: user.Username
// //           });
// //         } else {
// //           res.send('User not found');
// //         }
// //       });
// //   } else {
// //     res.redirect('/users/login');
// //   }
// // });

// // router.get('/ideas', function(req, res, next) {
// //   res.render('ideas');
// // });

// // router.post('/ideas', function(req, res, next) {
// //   models.ideas
// //       .findOrCreate({
// //           where: {
// //               Username: req.body.username
// //           },
// //           defaults: {
// //               FirstName: req.body.firstName,
// //               LastName: req.body.lastName,
// //               Email: req.body.email,
// //               Password: req.body.password
// //           }
// //       })
// //       .spread(function(result, created) {
// //           if (created) {
// //               res.send('Idea successfully created');
// //           } else {
// //               res.send('This idea already exists');
// //           }
// //       });
// // });

// // router.get('/logout', function (req, res, next) {
// //     res.cookie('jwt', "", { expires: new Date(0) });
// //     res.send('Logged out');
// //     });

// module.exports = router;
