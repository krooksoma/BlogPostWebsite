const { Post } = require('../models');

const PostData = [
    {
        user_id: 1,    
        title: 'Bootcamps can be overwhelming',
        body: 'bootcamps demand a lot of your time outside the classroom. You better be prepared. It is called bootcamp for a reason.'
    },
    {
        user_id: 3,
        title: 'JavaScript doesnt have OOP',
        body: 'JavaScript OOP is a fraud. It is only a wanabee programming language.'
    },
    {
        user_id: 2,
        title: 'Nobody uses JavaScript',
        body: 'Javacript is not as good as TypeScript. It is so loosely typed that it makes it prone to bugs.'
    }   
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;