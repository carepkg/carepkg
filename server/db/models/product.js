const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  qty: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Product;
