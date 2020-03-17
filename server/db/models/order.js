const Sequelize = require("sequelize");
const db = require("../db");

const Order = db.define(
  "order",
  {
    status: {
      type: Sequelize.ENUM("pending", "purchased", "cancelled", "completed"),
      defaultValue: "Pending"
    },
    purchasedAt: Sequelize.DATE,
    cancelledAt: Sequelize.DATE,
    fulfilledAt: Sequelize.DATE,
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
          orderInstance.status === "fulfilled" &&
          orderInstance.fulfilledAt === null
        )
          return orderInstance.update({ fulfilledAt: Date.now() });
        return orderInstance;
      }
    }
  }
);

module.exports = Order;
