require("dotenv").config({
  path: ".env.local",
});

module.exports = {
  development: {
    client: "pg",
    connection: {
<<<<<<< HEAD
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
=======
      database: "taberu",
      user: "postgres",
      password: "zoudatabase",
      // database: "taberu",
      // user: process.env.DB_USER,
      // password: process.env.DB_PASSWORD,
>>>>>>> 727cc39faa4705de5ff7b71ef949a90364c44f61
    },
    migrations: {
      // have to be in db to create migrations
      directory: "./db/knex/migrations",
    },
    seeds: { directory: "./db/knex/seeds" },
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    },
    migrations: {
      directory: "./db/knex/migrations",
    },
    seeds: {
      directory: "./db/knex/seeds",
    },
  },
};
