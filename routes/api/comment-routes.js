const router = require('express').Router();
const {
  createComment,
  updateComment,
  deleteComment
} = require('../../controlers/commentControllers');

// /api/comment/
router.route('/')
  .post(createComment)
  .put(updateComment)
  .delete(deleteComment);

module.exports = router;






