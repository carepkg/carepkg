const Sequelize = require("sequelize");
const db = require("../db");

const ProductCategory = db.define("productCategory", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  categoryId: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});
module.exports = ProductCategory;
