const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const FaadaModel = sequelize.define("faada", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  serialNo: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  blocks: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING,
    allowNull:true,
  }
});
module.exports = FaadaModel;