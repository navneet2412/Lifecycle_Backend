const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const BlockModel = require("./block-model");

const Spoilage = sequelize.define("spoilage", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  blockId: {
    type: Sequelize.INTEGER,
    references: {
      model: BlockModel,
      key: "id",
    },
    allowNull: false
  },
  msg: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  imageURL: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Spoilage;
