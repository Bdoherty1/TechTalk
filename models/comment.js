
// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connections');

// class Comment extends Model {}

// Comment.init(
//   {
//     // Define your comment model attributes here
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'comment',
//   }
// );

// module.exports = Comment;



const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const User = require('./User'); 
const BlogPost = require('./post'); 

class Comment extends Model {}

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