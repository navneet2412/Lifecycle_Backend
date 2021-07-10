const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Expense = sequelize.define("expense", {
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
  category: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  amount: {
    type: Sequelize.DOUBLE,
    allowNull: true,
  },
  beneficiary: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  paymentMode: {
    type: Sequelize.TEXT,
    allowNull: true,
  }
});

module.exports = Expense;