const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const BlockModel = require("./block-model");
const SlabModel = require("./slab-model");
const factorySales = sequelize.define("factorysale", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  customerName: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  stoneType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quality: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  blockId: {
    type: Sequelize.INTEGER,
    references: {
      model: BlockModel,
      key: "id",
    },
  },
  slabId: {
    type: Sequelize.INTEGER,
    references: {
      model: SlabModel,
      key: "id",
    },
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  sqFt: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },

  imageURL: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  paymentMode: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paymentDate: {
    type: Sequelize.DATE,
    allowNull: true,
  },
});

module.exports = factorySales;
