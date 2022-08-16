const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Website extends Model {}

Website.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    website_idea: {
      type: DataTypes.STRING,
      allowNull: false
    },
    submit_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Website'
  }
);

module.exports = Website;
