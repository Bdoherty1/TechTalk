const { User } = require('../models');

// TODO: Add a comment describing the functionality of the withAuth middleware
module.exports = {
  renderHomepage: async (req, res) => {
    try {
      const userData = await User.findAll({
        attributes: { exclude: ['password'] },
        order: [['name', 'ASC']],
      });
  
      const users = userData.map((project) => project.get({ plain: true }));
  
      res.render('homepage', {
        users,
        // TODO: Add a comment describing the functionality of this property
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  renderLogin: (req, res) => {
    // TODO: Add a comment describing the functionality of this if statement
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  }
}
