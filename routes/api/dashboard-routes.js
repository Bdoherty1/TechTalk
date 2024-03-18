const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts belonging to the logged-in user
router.get('/', withAuth, async (req, res) => {
  try {
    const dbPostData = await Post.findAll({ where: { userId: req.session.userId } });
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render('dashboard', { posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get the form to create a new post
router.get('/new', withAuth, async (req, res) => {
  try {
    res.render('new-post', { loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update a specific post
router.put('/:id', withAuth, async (req, res) => {
    try {
      const affectedRows = await Post.update(req.body, {
        where: { id: req.params.id },
      });
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Delete a specific post
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const affectedRows = await Post.destroy({ where: { id: req.params.id } });
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
  // Get the form to edit a specific post
  router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id);
      if (postData) {
        const post = postData.get({ plain: true });
        res.render('edit-post', { post, loggedIn: req.session.loggedIn });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });
  
module.exports = router;