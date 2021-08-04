const { User } = require('../models');

const UserData = [
    {
        name:'Jonas Calvin',
        email: 'calvin@email.com',
        password: 'supersecure'
    },
    {
        name:'Mariah Scary',
        email: 'mariah@scareu.com',
        password: 'supersecure'
    },
    {
        name: 'Jamal Wayslost',
        email: 'whereami@email.com',
        password: 'supersecure',
    }
];
// setting data before running it
const seedUsers = () => User.bulkCreate(UserData, {individualHooks: true});

module.exports = seedUsers;