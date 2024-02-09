const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('../models/User');
const BlogPost = require('../models/post');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    blogpost_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'comments',
  }
);

// Define associations
Comment.belongsTo(User, {
    foreignKey: 'user_id',
  });

Comment.belongsTo(BlogPost, {
  foreignKey: 'blogposts_id',
});

module.exports = Comment;