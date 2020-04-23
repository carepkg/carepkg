const Sequelize = require("sequelize");
const db = require("../db");

const Address = db.define(
  "address",
  {
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
    shipToAddress: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    shipToCity: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    shipToState: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    shipToPostalCode: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    }
  },
  {
    validate: () => {
      //check if address resolves to a valid location
    }
  }
);

module.exports = PurchaseProfile;
