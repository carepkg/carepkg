const Sequelize = require("sequelize");
const db = require("../db");

const Package = db.define("package", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  numPurchase: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  },
  upvotes: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
});

module.exports = Package;
