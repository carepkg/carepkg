const express = require("express");
const router = express.Router();
const {
  Product,
  Category,
  PricingHistory,
  Review,
  User
} = require("../db/models");
const Sequelize = require("sequelize");
// const Op = Sequelize.Op;
// const db = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: {
        model: Review
      }
    });
    res.send(products);
  } catch (err) {
    next(err);
  }
});

router.get("/:productId", async (req, res, next) => {
  try {
    const product = await Product.findByPk(Number(req.params.productId), {
      include: [
        {
          model: Review,
          include: [
            {
              model: User,
              where: {
                id: Review.userId
              }
            }
          ]
        },
        {
          model: Category
        }
      ]
    });

    if (product) res.json(product);
    else res.sendStatus(404);
  } catch (err) {
    next(err);
  }
});

module.exports = router;

// const adminRole = (req, res, next) => {
//   try {
//     if (req.user && req.user.role === "Admin") {
//       next();
//     } else {
//       const error = new Error("You are not an admin");
//       throw error;
//       //res.redirect('/')
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// router.get("/", async (req, res, next) => {
//   const PRODUCTS_PER_PAGE = 12;
//   const whereClause = {};

//   if (req.query.name && req.query.name.length) {
//     whereClause.name = { [Op.iLike]: "%" + req.query.cat[0].length };
//   }
//   if (req.query.name && req.query.cat[0] && req.query.cat[0].length) {
//     const queryString = `SELECT count("categoryId) as matches, "productId"
//                       FROM "productCategory
//                       WHERE "categoryId" IN (${req.query.cat
//                         .map(catId => Number(catId))
//                         .join()})`;
//     const matchedProducts = await db.query(queryString);

//     whereClause.id = {
//       [Sequelize.Op.in]: matchedProducts[0].map(prod => prod.productId)
//     };
//   }
//   if (!req.user || req.user.role != "Admin") whereClause.isAvailable = true;
//   const products = Product.findAll({
//     include: [
//       { model: Category },
//       {
//         model: PricingHistory,
//         order: [["effectiveDate"], "DESC"],
//         where: { effectiveDate: { [Sequelize.Op.lte]: new Date() } },
//         limit: 1,
//         required: false
//       },
//       {
//         model: Review
//       }
//     ],
//     where: whereClause,
//     limit: PRODUCTS_PER_PAGE,
//     offset: req.query.page ? Number(req.query.page - 1) * PRODUCTS_PER_PAGE : 0,
//     order: [["id", "ASC"]]
//   })
//     .then(dbRes => res.json(dbRes))
//     .catch(err => next(err));
// });
