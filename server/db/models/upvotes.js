const Sequelize = require("sequelize");
const db = require("../db");

const Upvote = db.define("upvotes", {});

module.exports = Upvote;
