const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = mysql.createConnection({
  host: "cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "abneomai0ags3zeb",
  password: "b4yxh9q7tsmugklo",
  database: "kgbw6d4abn4gb1zg"
})

module.exports = sequelize;
