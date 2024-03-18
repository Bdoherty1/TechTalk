// const router = require('express').Router();
// const { User, BlogPost, Comment } = require('../../models'); // Import BlogPost and Comment models

// router.post('/login', async (req, res) => {
//   try {
//     // Find the user who matches the posted e-mail address
//     const userData = await User.findOne({ where: { email: req.body.email } });

//     if (!userData) {
//       res.status(400).json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     // Verify the posted password with the password stored in the database
//     const validPassword = await userData.checkPassword(req.body.password);

//     if (!validPassword) {
//       res.status(400).json({ message: 'Incorrect email or password, please try again' });
//       return;
//     }

//     // Create session variables based on the logged-in user
//     req.session.save(() => {
//       req.session.user_id = userData.id;
//       req.session.logged_in = true;
      
//       res.json({ user: userData, message: 'You are now logged in!' });
//     });

//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.post('/logout', (req, res) => {
//   if (req.session.logged_in) {
//     // Remove the session variables
//     req.session.destroy(() => {
//       res.status(204).end();
//     });
//   } else {
//     res.status(404).end();
//   }
// });

// module.exports = router;

const router = require('express').Router();
const { User } = require('../../models/');
const withAuth = require('../../utils/auth');

// Create a new user
router.post('/', async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      password: req.body.password
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;
      
      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Log in a user
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.body.username
      }
    });

    if (!userData) {
      res.status(400).json({ message: 'No user account found!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = userData.id;
      req.session.username = userData.username;
      req.session.loggedIn = true;
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Log out a user
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;