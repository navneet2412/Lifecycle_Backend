const Sequelize = require("sequelize");

const { host, user, password, database } = require("./Constant");

const sequelize = new Sequelize(database, user, password, {
  dialect: "mysql",
  host: host,
});

// const sequelize = new Sequelize(
//   // "mysql://b3ddecbc4ca42c:52f33026@eu-cdbr-west-03.cleardb.net/heroku_2e44c0e28ae22a5?reconnect=true",
//   "mysql://qf4fqxspwp5fftnn:wtktn2czcwrgouqk@lmc8ixkebgaq22lo.chr7pe7iynqr.eu-west-1.rds.amazonaws.com:3306/kg61vx26e27m2n6v",
//   {
//     dialect: "mysql",
//   }
// );

module.exports = sequelize;
