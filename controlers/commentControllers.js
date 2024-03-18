const router = require('express').Router();
const { Comment } = require('../models/comment');
// const withAuth = require('../utils/auth');

const createComment = async (req, res) => {
    try {
      const newComment = await Comment.create(req.body);
      res.status(201).json(newComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const updateComment = async (req, res) => {
    try {
      const updatedComment = await Comment.update(req.body, {
        where: { id: req.params.id }
      });
      res.status(200).json(updatedComment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  const deleteComment = async (req, res) => {
    try {
      await Comment.destroy({ where: { id: req.params.id } });
      res.status(204).end();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };

module.exports = {
    createComment,
    updateComment,
    deleteComment
  };
  