const Sequelize = require("sequelize");

const { host, user, password, database } = require("./Constant");

const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: host,
});



module.exports = sequelize;
