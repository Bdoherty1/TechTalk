const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// Get all posts and render the homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      include: [{ model: User }],
      order: [['createdAt', 'DESC']]
    });

    const posts = dbPostData.map((post) => post.get({ plain: true }));

    res.render('homepage', { 
      posts,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get a single post and its associated comments
router.get('/post/:id', async (req, res) => {
  try {
    const dbPostData = await Post.findByPk(req.params.id, {
      include: [
        { model: User },
        { 
          model: Comment, 
          include: [{ model: User }] 
        }
      ]
    });

    if (!dbPostData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    const post = dbPostData.get({ plain: true });

    res.render('single-post', { 
      post,
      loggedIn: req.session.loggedIn 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Add other home routes as needed

module.exports = router;


// const router = require('express').Router();
// const { Post } = require('../models');

// // Define your home routes here

// module.exports = router;