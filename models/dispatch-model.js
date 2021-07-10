const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const BlockModel = require("../models/block-model");
// const LocationModel = require("../models/location-model");

const Dispatch = sequelize.define("dispatch", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  // locationId: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: LocationModel,
  //     key: 'id',
  //   }
  // },
  locationName: {
    type: Sequelize.STRING,
    allowNull:false,
  },
  blockId: {
    type: Sequelize.INTEGER,
    references: {
      model: BlockModel,
      key: "id",
    },
  },
});

module.exports = Dispatch;