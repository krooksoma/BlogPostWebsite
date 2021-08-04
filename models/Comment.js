const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },  
        body: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        post_id: { 
            type: DataTypes.INTEGER,            
            references: {
            model:'post',
            key: 'id'
        }}
    },
    {
        sequelize,
        underscored: true,
        modelName: 'comment',
        freezeTableName: true
    }
)

module.exports = Comment;