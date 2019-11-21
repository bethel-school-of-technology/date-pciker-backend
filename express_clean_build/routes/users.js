var express = require('express');
var router = express.Router();
var models = require('../models');
var authService = require('../services/auth'); //<--- Add authentication service


      router.get('/signup', function (req, res, next) {
        res.send(JSON.stringify(models.users));
      });

// ROUTE GIVEN IN ADVANCED AUTH 5 //

// Create new user if one doesn't exist
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

//                    FROM RESTFUL 8                 //

      // router.post('/signup', function (req, res, next) {
      //   models.users.create(req.body)
      //     .then(newUsers => {
      //       res.setHeader('Content-Type', 'application/json');
      //       res.send(JSON.stringify(newUsers));
      //     })
      //     .catch(err => {
      //       res.status(400);
      //       res.send(err.message);
      //     });
      // });

// route used until Nov 21//

  // router.post('/signup', function(req, res, next) {
  //   models.users
  //     .findOrCreate({
  //       where: {
  //         Username: req.body.Username
  //       },
  //       defaults: {
  //         FirstName: req.body.FirstName,
  //         LastName: req.body.LastName,
  //         Email: req.body.Email,
  //         Password: req.body.Password
  //       }
  //     })
  //     .spread(function(result, created) {
  //       if (created) {
  //         res.redirect('login');  //<---Change this line to redirect to the login screen
  //       } else {
  //         res.send('This user already exists');
  //       }
  //     });
  // });
   
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
  res.send(JSON.stringify(
    models.users
  ));
});

// Login user and return JWT as cookie
router.post('/login', function (req, res, next) {
  models.users.findOne({
    where: {
      Username: req.body.username,
      Password: req.body.password
    }
  }).then(user => {
    if (!user) {
      console.log('User not found')
      return res.status(401).json({
        message: "Login Failed"
      });
    }
    if (user) {
      let token = authService.signUser(user); // <--- Uses the authService to create jwt token
      res.cookie('jwt', token); // <--- Adds token to response as a cookie
      res.send('Login successful');
    } else {
      console.log('Wrong password');
      res.redirect('login')
    }
  });
});


// route until Nov 21   //
  
  // router.post('/login', function(req, res, next) {
  //   models.users
  //     .findOne({
  //       where: {
  //         Username: req.body.Username,
  //         Password: req.body.Password
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

  // router.get('/users', function(req, res, next) {
  //   models.user.findAll({}).then(foundUsers => {
  //     const mappedUsers = foundUsers.map(user => ({
  //       UserrID: user.user_id,
  //       Name: `${user.first_name} ${user.last_name}`
  //     }));
  //     res.send(JSON.stringify(mappedUsers));
  //   });
  // });

  router.get('/profile', function (req, res, next) {
    let token = req.cookies.jwt;
    if (token) {
      authService.verifyUser(token)
        .then(user => {
          if (user) {
            res.send(JSON.stringify(user));
          } else {
            res.status(401);
            res.send('Invalid authentication token');
          }
        });
    } else {
      res.status(401);
      res.send('Must be logged in');
    }
  });

  // route until Nov 21   //
  
  // router.get('/profile/:id', function(req, res, next) {
  //   models.users
  //   .findByPk(parseInt(req.params.id))
  //   .then(
  //     user => {
  //       if (user) {
  //         res.send(JSON.stringify(user))
  //       }
  //     }
  //   )
  // });

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

  router.get('/logout', function (req, res, next) {
    res.cookie('jwt', "", { expires: new Date(0) });
    res.send('Logged out');
    });

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