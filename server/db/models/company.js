const Sequelize = require("sequelize");
const db = require("../db");

const Company = db.define("company", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  membership: {
    type: Sequelize.ENUM("Basic", "Premium"),
    allowNull: false
  },
  coEmail: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  coPassword: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.STRING,
    defaultValue: "company"
  }
});

//companycode

module.exports = Company;
