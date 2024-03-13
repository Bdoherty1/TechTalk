
const sequelize = require('../config/connection');
const { User, BlogPost } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  for (const user of userData) {
    // Create user
    const createdUser = await User.create(user);

    // Check if user has blog posts
    if (user.BlogPosts && user.BlogPosts.length > 0) {
      // Create blog posts associated with the user
      for (const post of user.BlogPosts) {
        await BlogPost.create({
          title: post.title,
          content: post.content,
          user_id: createdUser.id
        });
      }
    }
  }

  process.exit(0);
};

seedDatabase();
