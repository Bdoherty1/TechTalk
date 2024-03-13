// const path = require('path');
// const express = require('express');
// const session = require('express-session');
// const exphbs = require('express-handlebars');
// const routes = require('./controllers');
// const helpers = require('./utils/helpers');

// const Sequelize = require('./config/connection');

// // Create a new sequelize store using the express-session package
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// const app = express();
// const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers });

// // Configure and link a session object with the sequelize store
// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: Sequelize
//   })
// };

// // Add express-session and store as Express.js middleware
// app.use(session(sess));

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use(routes);

// Sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });

const express = require('express');
const Sequelize = require('sequelize');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Database configuration
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'mysql'
});

// Test database connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Your other routes and middleware configurations go here...

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});