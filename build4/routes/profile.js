// var express = require('express');
// var router = express.Router();
// var models = require('../models');

// // SECURE GET ROUTE WITH PASSPORT

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

// // GET PROFILE ROUTE

// router.get('/profile/:username', function(req, res, next) {
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
// });

// // router.get('/profile/:id', function(req, res, next) {
// //     models.users
// //         .findByPk(parseInt(req.params.id))
// //         .then(user => {
// //             if (user) {
// //                 res.render('profile', {
// //                     FirstName: user.FirstName,
// //                     LastName: user.LastName,
// //                     Email: user.Email,
// //                     Username: user.Username
// //                 });
// //             } else {
// //                 res.send('User not found');
// //             }
// //         });
// // });


// //***NEEDED: SECURE POST & PUT PROFILE ROUTES? */

// module.exports = router;