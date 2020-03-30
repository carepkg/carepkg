const Sequelize = require("sequelize");
const db = require("../db");

const OrderProduct = db.define("orderProduct", {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  orderId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  unitPriceAtPurchase: Sequelize.INTEGER,
  totalPriceAtPurchase: Sequelize.INTEGER
});

module.exports = OrderProduct;
