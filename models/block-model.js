const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const FaadaModel = require("../models/faada-model");

const BlockModel = sequelize.define("block", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  faadaId: {
    type: Sequelize.INTEGER,
    references: {
      model: FaadaModel,
      key: 'id',
    }
  },
  serialNo: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  length: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  width: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  height: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
  }
});

module.exports = BlockModel;