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
    },
    address1: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    address2: {
      type: Sequelize.STRING
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    postalCode: {
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

module.exports = Address;
