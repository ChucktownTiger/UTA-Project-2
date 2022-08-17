const { User } = require('../models')

const userData = [
    {
        id: 1,
        username: 'SLachelier',
        email: 'slachelier@gmail.com',
        password: 'Shauna11'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;