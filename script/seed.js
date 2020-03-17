/* eslint-disable complexity */
/* eslint-disable max-statements */
"use strict";

const db = require("../server/db");
const {
  User,
  PurchaseProfile,
  Category,
  Product,
  Review
} = require("../server/db/models/");
const faker = require("faker");
const randomNum = () => Math.random() * 100;
class Price {
  constructor() {
    this.price = randomNum(100);
  }
}
const qty = 1000;

async function seed() {
  await db.sync({ force: true });
  console.log("db has been synced!");

  // ---------- USERS ---------- \\
  const users = await Promise.all([
    User.create({
      firstName: "Henry",
      lastName: "Griffith",
      age: 23,
      userName: "hgriffith",
      email: "henry@carepkg.com",
      role: "Admin"
    }),
    User.create({
      firstName: "Isley",
      lastName: "Griffith",
      age: 21,
      userName: "igriffith",
      email: "isley@carepkg.com",
      role: "Admin"
    }),
    User.create({
      firstName: "Rufus",
      lastName: "Griffith",
      age: 1,
      userName: "roof",
      email: "rufus@email.com",
      role: "Customer"
    })
  ]);

  // --------- Products -------- \\
  const products = await Promise.all([
    Product.create({
      price: new Price(),
      qty: qty,
      name: "Tent",
      description: "Place to sleep. Easy set up"
    })
  ]);
  console.log("seeded successfully");
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
