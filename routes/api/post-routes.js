// const router = require('express').Router();
// const { BlogPost, User, Comment } = require('../../models');

// // GET all blog posts
// router.get('/', async (req, res) => {
//   try {
//     const postData = await BlogPost.findAll({
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'name', 'email'], // Include specific attributes of the user
//         },
//         {
//           model: Comment,
//           attributes: ['id', 'content', 'createdAt', 'updatedAt'],
//           include: {
//             model: User,
//             attributes: ['id', 'name'], // Include only the user's name for each comment
//           },
//         },
//       ],
//     });
//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // GET a single blog post by id
// router.get('/:id', async (req, res) => {
//   try {
//     const postData = await BlogPost.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['id', 'name', 'email'],
//         },
//         {
//           model: Comment,
//           attributes: ['id', 'content', 'createdAt', 'updatedAt'],
//           include: {
//             model: User,
//             attributes: ['id', 'name'],
//           },
//         },
//       ],
//     });

//     if (!postData) {
//       res.status(404).json({ message: 'No post found with this id' });
//       return;
//     }

//     res.status(200).json(postData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Route to create a new blog post
// router.post('/', async (req, res) => {
//   try {
//     const newPost = await BlogPost.create({
//       title: req.body.title,
//       content: req.body.content,
//       user_id: req.session.user_id, 
//     });
//     res.status(200).json(newPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Route to update an existing blog post
// router.put('/:id', async (req, res) => {
//   try {
//     const updatedPost = await BlogPost.update(
//       {
//         title: req.body.title,
//         content: req.body.content,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json(updatedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Route to delete a blog post
// router.delete('/:id', async (req, res) => {
//   try {
//     const deletedPost = await BlogPost.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json(deletedPost);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;

const router = require('express').Router();
const { Post, User } = require('../../models/');
const withAuth = require('../../utils/auth');

// Create a new post
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({ 
      ...req.body, 
      userId: req.session.userId 
    });
    
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Update an existing post
router.put('/:id', withAuth, async (req, res) => {
  try {
    const affectedRows = await Post.update(req.body, {
      where: {
        id: req.params.id
      }
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

// Delete an existing post
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const affectedRows = await Post.destroy({
      where: {
        id: req.params.id
      }
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

module.exports = router;