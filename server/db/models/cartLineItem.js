const Sequelize = require("sequelize");
const db = require("../db");

const CartLineItem = db.define("cartLineItem", {
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  unitPriceAtPurchase: Sequelize.FLOAT,
  totalPriceAtPurchase: Sequelize.FLOAT
});

module.exports = CartLineItem;
