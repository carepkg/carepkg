const Sequelize = require("sequelize");
const db = require("../db");

const WishlistLineItem = db.define("wishlistLineItem", {
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = WishlistLineItem;
