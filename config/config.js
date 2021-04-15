const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PWD,
  database: process.env.MYSQL_DB,
  dialect: 'mysql',
  operatorsAliases: false,
};
