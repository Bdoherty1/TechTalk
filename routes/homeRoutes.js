
const router = require('express').Router();
const { 
  renderHomepage,
  renderLogin
} = require('../controlers/homeControllers');
const withAuth = require('../utils/auth');

router.route('/')
.get(withAuth, renderHomepage);

router.route('/login')
.get(renderLogin)

module.exports = router;