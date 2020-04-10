const Sequelize = require("sequelize");
const db = require("../db");

const Upvotes = db.define("upvotes", {});

module.exports = Upvotes;
