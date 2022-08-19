const Sequelize = require('sequelize');

require('dotenv').config();



  const sequelize = new Sequelize('kgbw6d4abn4gb1zg', 'abneomai0ags3zeb', 'b4yxh9q7tsmugklo', {
    host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect:'mysql' 
  });


module.exports = sequelize;