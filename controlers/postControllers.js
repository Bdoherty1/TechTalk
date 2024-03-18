const router = require('express').Router();
const { Post, User } = require('../models/post');

const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const updatePost = async (req, res) => {
  try {
    const updatedPost = await Post.update(req.body, {
      where: { id: req.params.id }
    });
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  createPost,
  updatePost,
  deletePost
};


// const router = require('express').Router();
// const { Post, User } = require('../../models/');
// const withAuth = require('../../utils/auth');

// // Create a new post
// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newPost = await Post.create({ 
//       ...req.body, 
//       userId: req.session.userId 
//     });
    
//     res.status(200).json(newPost);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Update an existing post
// router.put('/:id', withAuth, async (req, res) => {
//   try {
//     const affectedRows = await Post.update(req.body, {
//       where: {
//         id: req.params.id
//       }
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// // Delete an existing post
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const affectedRows = await Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (affectedRows > 0) {
//       res.status(200).end();
//     } else {
//       res.status(404).end();
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;