const Sequelize = require("sequelize");
const db = require("../db");

const Package = db.define("package", {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"
  },
  numPurchases: {
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
