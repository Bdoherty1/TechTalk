// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');
// // const User = require('./User');
// // const Comment = require('./comment');

// class BlogPost extends Model {}

// BlogPost.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     content: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'users',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     timestamps: true,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'blog_posts',
//   }
// );

// // // Define associations
// BlogPost.belongsTo(User, {
//     foreignKey: 'user_id', 
//   });

// BlogPost.hasMany(Comment, {
//   foreignKey: 'blogpost_id',
//   onDelete: 'CASCADE',
// });

// module.exports = BlogPost;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Post extends Model {}

Post.init(
  {
    // Define your post model attributes here
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;