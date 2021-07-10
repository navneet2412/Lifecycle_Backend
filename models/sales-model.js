const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const CustomerModel = require("../models/customer-model");

const Sales = sequelize.define("sales", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  customer_Id: {
    type: Sequelize.INTEGER,
    references: {
      model: CustomerModel,
      key: "id",
    },
  },
  stoneType: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  quality: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  rate: {
    type: Sequelize.DOUBLE,
    allowNull: false,
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

module.exports = Sales;