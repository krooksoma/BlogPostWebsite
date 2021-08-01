const sequelize = require('../config/connection');
const { Model, DataTypes } = require('sequelize');

class Post extends Model {}

Post.init(
    {
        title:{
            type: DataTypes.STRING, 
            allowNull: false,
        },
        body :{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
    sequelize,
    modelName: 'Post'
    }
)

module.exports = Post;