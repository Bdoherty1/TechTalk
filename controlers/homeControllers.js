const { User } = require('../models');

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
        logged_in: req.session.logged_in,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  renderLogin: (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  }
}

