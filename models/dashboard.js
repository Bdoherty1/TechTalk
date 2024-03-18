const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create Dashboard model - extending Sequelize's Model class
class Dashboard extends Model {}

Dashboard.init(
  {
    // Define attributes/columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Define sequelize options
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: 'dashboard'
  }
);

module.exports = Dashboard;