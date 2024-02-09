const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('../models/User');
const Comment = require('../models/comment');

class BlogPost extends Model {}

BlogPost.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog_posts',
  }
);

// Define associations
BlogPost.belongsTo(User, {
    foreignKey: 'user_id', 
  });

BlogPost.hasMany(Comment, {
  foreignKey: 'blogposts_id',
  onDelete: 'CASCADE',
});

module.exports = BlogPost;