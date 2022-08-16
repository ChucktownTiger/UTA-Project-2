const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
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
    book_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    book_idea: {
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
    modelName: 'Book'
  }
);

module.exports = Book;
