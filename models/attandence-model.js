const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Attandence = sequelize.define("attandence", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  total: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  present: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  absent: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  dd: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  mm: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  yy: {
    type: Sequelize.STRING,
    allowNull: true,
  },
});

module.exports = Attandence;
