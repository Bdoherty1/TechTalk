const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('');

// GET all comments
router.get('/', async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: BlogPost,
          attributes: ['id', 'title', 'content'],
        },
      ],
    });
    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET a single comment by id
router.get('/:id', async (req, res) => {
  try {
    const commentData = await Comment.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id', 'name', 'email'],
        },
        {
          model: BlogPost,
          attributes: ['id', 'title', 'content'],
        },
      ],
    });

    if (!commentData) {
      res.status(404).json({ message: 'No comment found with this id' });
      return;
    }

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a new comment
router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create(req.body);
      res.status(201).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // UPDATE a comment by id
//   router.put('/:id', async (req, res) => {
//     try {
//       const updatedComment = await Comment.update(req.body, {
//         where: {
//           id: req.params.id,
//         },
//       });
//       if (!updatedComment) {
//         res.status(404).json({ message: 'No comment found with this id' });
//         return;
//       }
//       res.status(200).json(updatedComment);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
//   // DELETE a comment by id
//   router.delete('/:id', async (req, res) => {
//     try {
//       const deletedComment = await Comment.destroy({
//         where: {
//           id: req.params.id,
//         },
//       });
//       if (!deletedComment) {
//         res.status(404).json({ message: 'No comment found with this id' });
//         return;
//       }
//       res.status(200).json({ message: 'Comment deleted successfully' });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
  module.exports = router;
  