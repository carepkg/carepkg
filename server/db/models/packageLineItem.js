const Sequelize = require("sequelize");
const db = require("../db");

const PackageLineItem = db.define("packageLineItem", {
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = PackageLineItem;
