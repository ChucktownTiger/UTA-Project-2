// require the model datatype from sequelize:
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class TVShow extends Model {}

TVShow.init(
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
        tvshow_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tvshow_idea: {
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
        modelName: 'TVShow'
    }
);

module.exports = TVShow;