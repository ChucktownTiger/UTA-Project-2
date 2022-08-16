// require the model datatype from sequelize:
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Show extends Model {}

Show.init(
    {
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
        creator: {
            type: DataTypes.STRING,
            allowNull: false
        },
        photo_file: { 
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        showpost_id: {
            type: DataTypes.STRING,
            // not sure if this below would be correct
            references: {
                model: 'show',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'show'
    }
);

module.exports = Show;