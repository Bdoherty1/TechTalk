const router = require('express').Router();
const { Comment } = require('../../models/comment');
const withAuth = require('../../utils/auth');

// Create a new comment
router.post("/", withAuth, (req, res) => {
  Comment.create({ ...req.body, userId: req.session.userId })
    .then(newComment => {
      res.json(newComment);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Update a comment by its ID
router.put("/:id", withAuth, (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

// Delete a comment by its ID
router.delete("/:id", withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(affectedRows => {
      if (affectedRows > 0) {
        res.status(200).end();
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json(err);
    });
});

module.exports = router;

// const router = require('express').Router();
// const { Comment } = require('../../models/');
// const withAuth = require('../../utils/auth');

// // Define your comment routes here

// module.exports = router;
//   module.exports = router;
  