const Sequelize = require("sequelize");
const db = require("../db");

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  profilePic: {
    type: Sequelize.STRING,
    defaultValue:
      "http://www.racemph.com/wp-content/uploads/2016/09/profile-image-placeholder.png"
  },
  role: {
    type: Sequelize.ENUM("Customer", "Admin")
  },
  signUpDate: {
    type: Sequelize.DATE,
    defaultValue: Date.now()
  }
});

module.exports = User;
