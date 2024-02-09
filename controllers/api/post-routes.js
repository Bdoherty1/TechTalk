const router = require('express').Router();
const { BlogPost, User, Comment } = require('../../models');

// GET all blog posts
router.get('/', async (req, res) => {
  try {
    const postData = await BlogPost.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'], // Include specific attributes of the user
        },
        {
          model: Comment,
          attributes: ['id', 'content', 'createdAt', 'updatedAt'],
          include: {
            model: User,
            attributes: ['id', 'name'], // Include only the user's name for each comment
          },
        },
      ],
    });
    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single blog post by id
router.get('/:id', async (req, res) => {
  try {
    const postData = await BlogPost.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: Comment,
          attributes: ['id', 'content', 'createdAt', 'updatedAt'],
          include: {
            model: User,
            attributes: ['id', 'name'],
          },
        },
      ],
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Add more routes as needed for creating, updating, and deleting blog posts

module.exports = router;