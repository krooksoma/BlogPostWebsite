const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');


class Comment extends Model {}

Comment.init(
    {
        body :{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Comment'
    }
)

module.exports = Comment;