const db = require("../db");
const Sequelize = require("sequelize");

const Shipping = db.define("shipping", {
  name: {
    type: Sequelize.ENUM(
      "Standard (5-10 Business Days)",
      "Two Business Days",
      "One Business Day"
    ),
    allowNull: false
  },
  cost: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Shipping;
