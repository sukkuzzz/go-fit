const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const HealthActivity = sequelize.define('HealthActivity', {
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  calories: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, { timestamps: true });

module.exports = HealthActivity;
