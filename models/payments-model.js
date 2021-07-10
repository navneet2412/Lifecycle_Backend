const Sequelize = require("sequelize");

const sequelize = require("../util/database");
const Customer = require("./customer-model");

const Payments = sequelize.define("payments", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  customer_Id: {
    type: Sequelize.INTEGER,
    references: {
      model: Customer,
      key: 'id',
    }
  },
  paymentMode: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
});

module.exports = Payments;