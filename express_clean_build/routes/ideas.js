var express = require('express');
var router = express.Router();
var models = require('../models');

//              INVENTORY TRACKER OPTIONS           //

// // Get all posts
// Router.get('/get-posts', async (req, res) => {
//     const allPosts = await Post.find();
//     res.send(allPosts);
// });

// // Get all user posts
// Router.get('/user-posts/:id', async (req, res) => {
//     const posts = await Post.find({ userId: req.params.id });
//     res.send(posts);
// });

// // Create new post
// Router.post('/', async (req, res) => {
//     const post = new Post({
//         userId: req.body.userId,
//         userName: req.body.userName,
//         title: req.body.title,
//         body: req.body.body
//     })
//     try {
//         const savedPost = await post.save();
//         res.send(savedPost);
//     } catch (err) {
//         res.send(err);
//     }
// });

// // Delete post
// Router.delete('/delete-post', async (req, res) => {
//     await Post.findByIdAndDelete(req.query.postId, err => {
//         res.send(err)
//     });
// });

// // Get comments for post
// Router.get('/get-comments/:postId', async (req, res) => {
//     const allComments = await Comment.find({ postId: req.params.postId });
//     res.send(allComments);
// });

// // Create new comment
// Router.post('/comment', async (req, res) => {
//     const comment = new Comment({
//         userId: req.body.userId,
//         userName: req.body.userName,
//         postId: req.body.postId,
//         body: req.body.body
//     })
//     try {
//         const savedComment = await comment.save();
//         res.send(savedComment);
//     } catch (err) {
//         res.send(err);
//     }
// });

// // Delete Comment
// Router.delete('/delete-comment', async (req, res) => {
//     await Comment.findByIdAndDelete(req.query.commentId, err => {
//         res.send(err);
//     });
// });

///////////////////////////////////////////

router.get('/ideas', function(req, res, next) {
  models.ideas
    .findAll({include: [{ model: models.ideas }]})
    .then(ideasFound => {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(ideasFound));
    });
});

//              FRONT END INTEGRATION OPTION            //

// router.get('/staticPlanets', function (req, res, next) {

//         res.send(JSON.stringify(
//           staticModels.planet
//         ));
//       });

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

router.get('/comments', function(req, res, next) {
    models.comments
      .findAll({include: [{ model: models.comments }]})
      .then(commentsFound => {
        res.setHeader('Content-Type', 'application/json');
        res.send(JSON.stringify(commentsFound));
      });
  });



router.post('/comments', function(req, res, next) {
    models.comments
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
                res.send('Comment posted successfully');
            } else {
                res.send('This comment already exists');
            }
        });
  });

module.exports = router;
