// Import necessary modules
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User'); // Corrected import path
const BlogPost = require('./post'); // Corrected import path

// Define Comment model
class Comment extends Model {}

// Initialize Comment model
Comment.init(
  {
    // Define model attributes
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
  foreignKey: 'blogpost_id',
});

// Export Comment model
module.exports = Comment;
