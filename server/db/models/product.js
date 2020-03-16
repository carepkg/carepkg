const Sequelize = require("sequelize");
const db = require("../db");

const Product = db.define("product", {
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productImage: {
        type: Sequelize.STRING,
        allowNull: false
    },
    productDescription: {
        type: Sequelize.TEXT,
        allowNull: false
    }
    
});