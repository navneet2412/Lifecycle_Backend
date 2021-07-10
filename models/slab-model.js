const Sequelize = require("sequelize");

const sequelize = require("../util/database");


const Slabs = sequelize.define("slab", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  slabNo: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  dimensions: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sqFt: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
  slabAmount: {
    type: Sequelize.DOUBLE,
    allowNull: false,
  },
 
});

module.exports = Slabs;
