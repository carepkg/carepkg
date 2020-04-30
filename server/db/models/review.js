const Sequelize = require("sequelize");
const db = require("../db");

const Review = db.define("review", {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  familiarity: {
    type: Sequelize.ENUM(
      "Never used it",
      "I've used it once or twice",
      "I use it fairly often",
      "I use it all the time"
    )
  },
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  text: {
    type: Sequelize.TEXT,
    allowNull: true
  }
});

module.exports = Review;
