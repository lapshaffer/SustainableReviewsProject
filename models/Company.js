const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Company extends Model { }

Company.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        average_rating: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        description: {
            type: DataType.TEXT,
            allowNull: false
        },
        industry: {
            type: DataType.STRING,
            allowNull: false
        },
        number_reviews: {
            type: DataType.INT,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'company',
    }
);

module.exports = Company;
