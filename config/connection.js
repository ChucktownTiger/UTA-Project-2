const Sequelize = require('sequelize');

require('dotenv').config();



  const sequelize = new Sequelize('kgbw6d4abn4gb1zg', 'abneomai0ags3zeb', 'b4yxh9q7tsmugklo', {
    host: 'cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect:'mysql' 
  });

// const sequelize = new Sequelize(
//   {
//     host: "cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//     user: "abneomai0ags3zeb",
//     password: "b4yxh9q7tsmugklo",
//     database: "kgbw6d4abn4gb1zg"
//   }
// );

// const sess = sequelize.createConnection({
//   host: "cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
//   user: "abneomai0ags3zeb",
//   password: "b4yxh9q7tsmugklo",
//   database: "kgbw6d4abn4gb1zg"
// })

module.exports = sequelize;