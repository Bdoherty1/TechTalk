// Import required packages
const Sequelize = require('sequelize');
require('dotenv').config(); // Load environment variables from .env file

// Initialize sequelize variable without assigning it a value yet
let sequelize;

// Check if JAWSDB_URL environment variable is set
if (process.env.JAWSDB_URL) {
  // Initialize sequelize with the provided URL for a remote MySQL database
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Initialize sequelize with values from .env file for local MySQL database setup
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

// Export the initialized sequelize object
module.exports = sequelize;