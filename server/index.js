const path = require("path");
const express = require("express");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const passport = require("passport");
const morgan = require("morgan");
const compression = require("compression");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const db = require("./db");
const sessionStore = new SequelizeStore({ db });
const stripe = require("stripe")(
  "sk_test_51HmPaAAYf0d6QX7hNBJk9oFdipY81DrpYaLDJ1H2RKEpIUKaRxJteVd9uNamzMtGGkWXmiScuXZdbOyrRCBo0F2f00rsgVfEna"
);
const {
  User,
  Review,
  Product,
  LineItem,
  Order,
  Address,
} = require("./db/models");
const PORT = 8000;
const app = express();

const createApp = () => {
  // logging middleware
  app.use(morgan("dev"));

  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // session middleware with passport
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await db.models.user
        .findByPk(id, {
          include: [
            {
              model: Order,
              include: [
                {
                  model: LineItem,
                  include: [
                    {
                      model: Product,
                    },
                  ],
                },
              ],
            },
            {
              model: Review,
              include: [
                {
                  model: Product,
                },
              ],
            },
            {
              model: Address,
            },
          ],
        })
        .then((user) => done(null, user));
    } catch (err) {
      done(err);
    }
  });
  // compression middleware
  app.use(compression());

  //session middleware with passport
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "my best friend is Cody",
      store: sessionStore,
      resave: false,
      saveUninitialized: true,
      // cookie: { secure: true },
      proxy: true,
    })
  );
  app.use(passport.initialize());
  app.use(passport.session());

  // auth and api routes
  app.use("/auth", require("./auth"));
  app.use("/api", require("./api"));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, "..", "public")));

  // STRIPE POST ROUTE

  app.post("/stripe-checkout", async (req, res) => {
    let error;
    let status;
    try {
      const { token } = req.body;

      await stripe.customers.create({
        email: token.email,
        source: token.id,
      });
      status = "success";
    } catch (err) {
      console.error("Error: ", error);
      status = "failure";
    }
    res.json({ error, status });
  });

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      console.log(req.path);
      const err = new Error("Not found");
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // sends index.html
  app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public/index.html"));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || "Internal server error.");
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );

  // set up our socket control center
};

const syncDb = () => db.sync();

async function bootApp() {
  await sessionStore.sync();
  await syncDb();
  await createApp();
  await startListening();
}
// This evaluates as true when this file is run directly from the command line,
// i.e. when we say 'node server/index.js' (or 'nodemon server/index.js', or 'nodemon server', etc)
// It will evaluate false when this module is required by another module - for example,
// if we wanted to require our app in a test spec
if (require.main === module) {
  bootApp();
} else {
  createApp();
}
module.exports = app;
