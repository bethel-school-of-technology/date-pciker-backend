var express = require('express');
var router = express.Router();
const mysql = require('mysql2');
var models = require('../models');
// var passport = require('../services/passport'); // <--- Add this code
var authService = require('../services/auth'); //<--- Add authentication service

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});


router.get('/signup', function(req, res, next) {
    res.render('signup');
});

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

// Login user and return JWT as cookie
router.post('/login', function(req, res, next) {
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

router.get('/profile', function(req, res, next) {
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

router.get('/logout', function(req, res, next) {
    res.cookie('jwt', "", { expires: new Date(0) });
    res.send('Logged out');
});

module.exports = router;

//PRIOR TO USING PASSPORT
// router.post('/signup', function(req, res, next) {
//     models.users
//         .findOrCreate({
//             where: {
//                 Username: req.body.username
//             },
//             defaults: {
//                 FirstName: req.body.firstName,
//                 LastName: req.body.lastName,
//                 Email: req.body.email,
//                 Password: req.body.password
//             }
//         })
//         .spread(function(result, created) {
//             if (created) {
//                 res.send('User successfully created');
//             } else {
//                 res.send('This user already exists');
//             }
//         });
// });

// router.post('/signup', function(req, res, next) {
//     models.users
//         .findOrCreate({
//             where: {
//                 Username: req.body.username
//             },
//             defaults: {
//                 FirstName: req.body.firstName,
//                 LastName: req.body.lastName,
//                 Email: req.body.email,
//                 Password: req.body.password
//             }
//         })
//         .spread(function(result, created) {
//             if (created) {
//                 res.send('User successfully created');
//             } else {
//                 res.send('This user already exists');
//             }
//         });
// });

// //PRIOR TO USING PASSPORT
// router.get('/login', function(req, res, next) {
//     res.render('login');
// });

// //PRIOR TO USING PASSPORT

// // router.post('/login', function(req, res, next) {
// //     models.users
// //         .findOne({
// //             where: {
// //                 Username: req.body.username,
// //                 Password: req.body.password
// //             }
// //         })
// //         .then(user => {
// //             if (user) {
// //                 res.send('Login succeeded!');
// //             } else {
// //                 res.send('Invalid login!');
// //             }
// //         });
// // });

// // SECURE POST LOGIN ROUTE PRIOR TO PASSPORT

// // router.post('/login', function(req, res, next) {
// //   models.users
// //     .findOne({
// //       where: {
// //         Username: req.body.username,
// //         Password: req.body.password
// //       }
// //     })
// //     .then(user => {
// //       if (user) {
// //         res.redirect('profile/' + user.UserId); //<---Change this line to redirect to the profile
// //       } else {
// //         res.send('Invalid login!');
// //       }
// //     });
// // });

// // SECURE POST LOGIN ROUTE WITH PASSPORT

// router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
//     function(req, res, next) { res.redirect('profile') }); //<--- Called Without UserID

// // SECOND POST LOGIN ROUTE W/ PASSPORT

// // router.post('/login', passport.authenticate('local', { failureRedirect: '/users/login' }),
// //   function (req, res, next) { res.redirect('profile') });  //<--- Called Without UserID

// router.get('/profile', function(req, res, next) {
//     if (req.user) {
//         models.users
//             .findByPk(parseInt(req.user.UserId))
//             .then(user => {
//                 if (user) {
//                     res.render('profile', {
//                         FirstName: user.FirstName,
//                         LastName: user.LastName,
//                         Email: user.Email,
//                         Username: user.Username
//                     });
//                 } else {
//                     res.send('User not found');
//                 }
//             });
//     } else {
//         res.redirect('/users/login');
//     }
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