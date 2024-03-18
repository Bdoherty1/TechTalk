const router = require('express').Router();
const {
  createPost,
  updatePost,
  deletePost
} = require('../../controlers/postControllers');

// /api/post/
router.route('/')
  .post(createPost)
  .put(updatePost)
  .delete(deletePost);

module.exports = router;


