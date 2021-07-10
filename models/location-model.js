const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Location = sequelize.define("locations", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  stateName: {
    type: Sequelize.STRING,
    allowNull: true,
  }
});

module.exports = Location;