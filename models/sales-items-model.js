const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const SalesModel = require("../models/sales-model");
const BlockModel = require("../models/block-model");
const SalesItems = sequelize.define("sales-items", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  salesId: {
    type: Sequelize.INTEGER,
    references: {
      model: SalesModel,
      key: 'id',
    }
  },
  blockId: {
    type: Sequelize.INTEGER,
    references: {
      model: BlockModel,
      key: 'id',
    }
  }
});

module.exports = SalesItems;