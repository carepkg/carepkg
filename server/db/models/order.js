const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define(
  "order",
  {
    status: {
      type: Sequelize.ENUM("purchased", "cancelled", "completed"),
      defaultValue: "purchased"
    },
    purchasedAt: Sequelize.DATE,
    cancelledAt: Sequelize.DATE,
    completedAt: Sequelize.DATE,
    totalPriceAtPurchase: Sequelize.FLOAT
  },
  {
    hooks: {
      afterUpdate: orderInstance => {
        if (
          orderInstance.status === "purchased" &&
          orderInstance.purchasedAt === null
        )
          return orderInstance.update({ purchasedAt: Date.now() });
        else if (
          orderInstance.status === "cancelled" &&
          orderInstance.cancelledAt === null
        )
          return orderInstance.update({ cancelledAt: Date.now() });
        else if (
          orderInstance.status === "completed" &&
          orderInstance.fulfilledAt === null
        )
          return orderInstance.update({ completedAt: Date.now() });
        return orderInstance;
      }
    }
  }
);

module.exports = Order;
