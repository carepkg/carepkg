const Sequelize = require("sequelize");
const db = require("../db");

const LineItem = db.define("lineItem", {
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  // orderId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  // productId: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false
  // },
  unitPriceAtPurchase: Sequelize.INTEGER,
  totalPriceAtPurchase: Sequelize.INTEGER
});

module.exports = LineItem;
